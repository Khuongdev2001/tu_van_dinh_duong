<?php if (!empty($slide)) { ?>
    <div class="slide">
        <div id="owl-one-slide" class="owl-carousel owl-theme">
            <?php foreach ($slide as $sl) { ?>
                <div class="item">
                    <div class="section-common-banner section-common-banner-smart">
                        <a href="<?php echo $sl->hyperlink; ?>">
                            <img src="<?php echo $sl->image; ?>" alt="<?php echo $sl->title; ?>" class="img-responsive d-none d-sm-block">
                            <img src="<?php echo $sl->image_thum; ?>" alt="<?php echo $sl->title; ?>" class="img-responsive d-block d-sm-none">
                        </a>
                    </div>
                </div>
            <?php } ?>
        </div>
        <script>
            $(document).ready(function () {
                $("#owl-one-slide").owlCarousel({
                    dots: false,
                    nav:true,
                    navText: ['', ''],
                    autoplay: true,
                    autoplayTimeout: 5000,
                    loop: true,
                    items: true
                });
            });
        </script>
    </div>
<?php } ?>

