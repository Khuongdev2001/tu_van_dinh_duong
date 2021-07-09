<!DOCTYPE html>

<html lang="vi" xmlns="http://www.w3.org/1999/xhtml">

<?php echo Modules::run('Header/Module_header/index'); ?>

<body data-base="<?php echo base_url(); ?>">

<div id="fb-root"></div>

<script async defer crossorigin="anonymous"

        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v6.0&appId=216163346320636&autoLogAppEvents=1"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0GMNCL1Z89"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0GMNCL1Z89');
</script>

<?php

echo Modules::run('Header/Module_header/main_menu');

//if (current_url() == base_url()) {

//    echo Modules::run('Slide/Module_slide/index');

//}





?>





<?php if (!empty($content)) {

    echo $content;

} ?>



<?php echo Modules::run('Footer/Module_footer/index'); ?>

<a id="button-top"></a>

<script>

    var btn = $('#button-top');



    $(window).scroll(function () {

        if ($(window).scrollTop() > 300) {

            btn.addClass('show');

        } else {

            btn.removeClass('show');

        }

    });



    btn.on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({scrollTop: 0}, '300');

    });

</script>

<?php if(!empty($GLOBALS['sett']->customer)){ ?>

    <script>

        $(document).ready(function () {

            var inter = 30000;

            setInterval(function(){

                $.ajax({

                    type: "post",

                    url: '<?php echo base_url();?>get-news-order',

                    data: {},

                    dataType: 'json',

                    success: function (data) {

                        $('#customer').empty();

                        $('#customer').html(data.view);

                        $('#customer').show();

                        setTimeout(function(){  $('#customer').hide(); }, 5000);

                    }

                });

            }, 30000);

        })

    </script>

<?php } ?>

<!-- END CHAT FACEBOOK -->

<div id="customer" style="display: none">

</body>

</html>