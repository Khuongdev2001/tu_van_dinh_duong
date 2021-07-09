(function( $ )
{
    $.fn.breakIt = function(method, options)
    {
        var $self = this;

        /* Default options */

        $self.options = $.extend(
            {
                "crack":
                {
                    "angle": -30,
                    "image": "403.png",
                    "image_left": 145,
                    "image_top": 210,
                    "animate": 0,
                    "duration": 0,
                    "easing": ""
                },
                "swing":
                {
                    "angle": 80,
                    "animate": 0,
                    "duration": 750,
                    "angle_attenuation": 0.75,
                    "speed_attenuation": 0.75
                }
            }, options || {});

        /* Add easing functions */

        $.extend($.easing,
            {
                easeInSine: function (x, t, b, c, d) {
                    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
                },
                easeOutSine: function (x, t, b, c, d) {
                    return c * Math.sin(t/d * (Math.PI/2)) + b;
                },
                easeInQuint: function (x, t, b, c, d) {
                    return c*(t/=d)*t*t*t*t + b;
                }
            });


        /* Swing function */

        $.fn.swing = function()
        {
            var $element = $(this);

            if(!$self.options.swing.animate)
            {
                $element.rotate(
                    {
                        'angle': $self.options.swing.angle
                    });

                return;
            }

            var time = $self.options.swing.duration;
            var next_angle = $self.options.swing.angle;

            var angle_attenuation = $self.options.swing.angle_attenuation;
            var speed_attenuation = $self.options.swing.speed_attenuation;

            var angle = 0;
            var steps = 0;

            var speed = next_angle / time;

            var swing = function()
            {
                var time_1 = Math.abs((angle - 90) / (angle - next_angle)) * time;

                $element.rotate(
                    {
                        animateTo: 90,
                        duration: time_1,
                        easing: $.easing.easeInSine,
                        callback: function()
                        {
                            if(next_angle == 90)
                            {
                                return;
                            }

                            var time_2 = time - time_1;

                            $element.rotate(
                                {
                                    animateTo: next_angle,
                                    duration: time_2,
                                    easing: $.easing.easeOutSine,
                                    callback: function()
                                    {
                                        angle = next_angle;
                                        next_angle = (next_angle > 89 && next_angle < 99)? 90 : 90 + (90 - next_angle) * angle_attenuation;
                                        time = Math.abs(angle - next_angle) / speed;
                                        speed *= speed_attenuation;
                                        steps++;

                                        swing();
                                    }
                                });
                        }
                    });
            }

            swing();

            return $self;
        }

        /* Crack function */

        $.fn.crack = function()
        {
            var $element = $(this);

            var offset = $element.offset();
            var full_width = $element[0].offsetWidth;
            var full_height = $element[0].offsetHeight;

            var getRotatingParams = function(angle)
            {
                var rad = Math.abs(angle) / 180 * Math.PI;

                var sin = Math.sin(rad);
                var cos = Math.cos(rad);

                var rotated_thickness_hor = sin * full_height;
                var rotated_thickness_vert = cos * full_height;

                var rotated_width = cos * full_width + sin * full_height;
                var rotated_height = rotated_thickness_vert + sin * full_width;

                var top = (rotated_height - full_height) / 2 + full_height - rotated_thickness_vert;
                var left = (full_width - rotated_width) / 2 * -angle / Math.abs(angle);

                var params =
                {
                    "offset":
                    {
                        "top": top,
                        "left": left
                    },
                    "dimensions":
                    {
                        "thickness_vert": rotated_thickness_vert,
                        "thickness_hor": rotated_thickness_hor,
                        "width": rotated_width,
                        "height": rotated_height
                    }
                }

                return params;
            }

            var img_src = $element.data('broken-image') || $self.options.crack.image;
            var $image = $('').prependTo('body');

            var rotated_params = getRotatingParams($self.options.crack.angle);

            var drawCrack = function()
            {
                var default_width = $image[0].naturalWidth;
                var default_height = $image[0].naturalHeight;

                $image.css('max-width', '100%').show();

                var actual_width = $image.width();
                var actual_height = $image.height();

                var image_offset =
                {
                    'left': parseInt(offset.left + rotated_params.offset.left * 2 + rotated_params.dimensions.thickness_hor - $self.options.crack.image_left * actual_width / default_width),
                    'top': parseInt(offset.top + rotated_params.dimensions.height - $self.options.crack.image_top * actual_height / default_height)
                }

                $image.offset(image_offset);
            };

            if($self.options.crack.animate)
            {
                $element.css('position', 'relative').rotate(
                    {
                        'animateTo': $self.options.crack.angle,
                        'duration': $self.options.crack.duration,
                        'easing': $.easing.easeInQuint,
                        'step': function(current_angle)
                        {
                            $element.css(getRotatingParams(current_angle).offset);
                        },
                        'callback': function()
                        {
                            $element.css(rotated_params.offset);

                            drawCrack();
                        }
                    });
            }
            else
            {
                $element.css(
                    {
                        'position': 'relative',
                        'left': rotated_params.offset.left,
                        'top': rotated_params.offset.top
                    }).rotate(
                    {
                        'angle': $self.options.crack.angle
                    });

                $image.load(function()
                {
                    drawCrack();
                });
            }
        }

        /* Object loop */

        $self.each(function()
        {
            var $element = $(this);

            switch(method)
            {
                case 'crack':
                    $element.crack();
                    break;

                default:
                case 'swing':
                    $element.swing();
                    break;
            }
        });

        return $self;
    };
})( jQuery );