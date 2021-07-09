$(document).ready(function()
{
    /* Check if browser is mobile */

    var window_width = (window.screen.width < window.outerWidth)? window.screen.width : window.outerWidth;
    var is_mobile = window_width < 768;

    /* If not mobile, run "broken" scripts */

    if(!is_mobile)
    {
        var type = ($('body').hasClass('broken-animated'))? 'animated' : 'static';

        if(type == 'static')
        {
            $('#error').hide();
        }

        $.getJSON('broken.' + type + '.config.json', function(data)
        {
            $('.broken-swing').breakIt('swing', data);
            $('.broken-crack').breakIt('crack', data);
        });
        //$('.nobroke').hide();
    }
});