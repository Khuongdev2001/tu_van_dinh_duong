<?php if (!empty($danhhieu)) { ?>
    <div class="dh">
        <div class="mucluc">
            <p><?php if ($rear == '_en') {
                    echo 'Tile';
                } else {
                    echo 'DANH HIỆU';
                } ?></p>
        </div>
        <div class="vuottroi">
            <div class="slider">
                <div id="owl-title" class="owl-carousel owl-theme">
                    <?php foreach ($danhhieu as $dh) { ?>
                        <div class="item">
                            <a href="<?php echo $dh->hyperlink; ?>" title="<?php echo $dh->title; ?>">
                                <img src="<?php echo $dh->image; ?>" alt="<?php echo $dh->title; ?>">
                            </a>
                        </div>
                    <?php } ?>
                </div>
            </div>
            <script>
                $(document).ready(function () {
                    $("#owl-title").owlCarousel({
                        navigation: true,
                        navigationText: false,
                        slideSpeed: 300,
                        paginationSpeed: 400,
                        items: 2,
                        pagination: false
                    });
                });
            </script>
            <h3><b><?php if ($rear == '_en') {
                        echo 'WELDING COMPANY honored CNC VIETNAM CERTIFICATION LABEL TOP 100 LEADING VIETNAM, 100 PRODUCTS
                        PRODUCT GOLD - GOLD SERVICE VIETNAM 2016';
                    } else {
                        echo 'CNC Việt Hàn vinh dự nhận danh hiệu Top 50 Thương hiệu hàng đầu Việt Nam, Top 50 sản phẩm vàng Việt Nam năm 2016 do Hội sở hữu trí tuệ Việt Nam bình chọn';
                    } ?></b></h3>
        </div>
    </div>
<?php } ?>
<?php if (!empty($partner)) { ?>
    <div class="thanhke ">
        <p><b><?php if ($rear == '_en') {
                    echo 'Our partner';
                } else {
                    echo 'Đối tác của chúng tôi';
                } ?></b></p>
    </div>
    <div class="module-product" style="padding-bottom: 0;margin-bottom: 0">
        <div class="slider">
            <div id="owl-partner" class="owl-carousel owl-theme">
                <?php foreach ($partner as $dh) { ?>
                    <div class="item">
                        <a href="<?php echo $dh->hyperlink; ?>" title="<?php echo $dh->title; ?>">
                            <img src="<?php echo $dh->image; ?>" alt="<?php echo $dh->title; ?>">
                        </a>
                    </div>
                <?php } ?>
            </div>
        </div>
        <script>
            $(document).ready(function () {
                $("#owl-partner").owlCarousel({
                    navigation: true,
                    navigationText: false,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    items: 5,
                    pagination: false,
                    autoPlay:4000
                });
            });
        </script>

    </div>
<?php } ?>