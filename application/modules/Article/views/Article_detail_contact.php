<?php if (!empty($cate_contact)) {
    if(!empty($sett)){
        $notes = json_decode($sett->notes);
    }
    ?>
    <div class="contact-page">
        <?php if (!empty($contact)) { ?>
            <section class="section-intro">
                <div class="container">
                    <div class="title-block text-center">
                        <?php echo $cate_contact->introtext; ?>
                    </div>
                    <div class="row ourservice text-center">
                        <?php foreach ($contact as $obj) { ?>
                            <div class="col-md-4 col-12 service_item">
                                <a href="#" title="<?php echo show_meta($obj); ?>" alt="<?php echo show_meta($obj); ?>">
                                    <div class="service_img">
                                        <img src="<?php echo $obj->image; ?>"
                                             class="img-responsive" alt="<?php echo show_meta($obj); ?>"
                                             title="<?php echo show_meta($obj); ?>"/></div>
                                    <div class="overlay">
                                        <h2 class="service_title">
                                            - <?php echo $obj->title; ?> -</h2>
                                        <p class="text-center">
                                            <a href="<?php echo base_url() . $obj->alias.'.html'; ?>" class="btn-cta">
                                                XEM CHI TIẾT
                                            </a>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </section>
        <?php } ?>
        <?php if (!empty($cate_contact->img)) {
            $gallery = json_decode($cate_contact->img);
            ?>
            <section class="section-slider">
                <div class="title-block text-center">
                    <?php if(!empty($notes[7])){ echo $notes[7] ;}?>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="owl-carousel owl-theme opacity-item d-none d-sm-block">
                            <?php foreach ($gallery as $im) { ?>
                                <div class="item">
                                    <div class="img-wrapper"><img
                                                src="<?php echo $im; ?>"
                                                alt="" class="img-responsive"/></div>
                                </div>
                            <?php } ?>
                        </div>
                        <div class="owl-carousel owl-theme opacity-item-m d-block d-sm-none">
                            <?php foreach ($gallery as $im) { ?>
                                <div class="item">
                                    <div class="img-wrapper"><img
                                                src="<?php echo $im; ?>"
                                                alt="" class="img-responsive"/></div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </section>
        <?php } ?>
        <?php if (!empty($cate_home)) { ?>
            <section class="sec-service">
                <div class="container">
                    <div class="title-block text-center">
                        <?php if(!empty($notes[8])){ echo $notes[8] ;}?>
                    </div>
                    <div class="content">
                        <div class="row">
                            <?php foreach ($cate_home as $cat) { ?>
                                <div class="element-item col-sm-3">
                                    <a data-mh="img-service" href="<?php echo base_url($cat->alias.'.html'); ?>"
                                       style="height: 265px;">
                                        <div class="wrap-img">
                                            <img class="img-responsive"
                                                 src="<?php echo $cat->image; ?>"
                                                 alt="">
                                            <div style="display:none; margin-bottom:15px; text-align: left; padding: 0 15px;">
                                                <?php echo $cat->title; ?>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </section>
        <?php } ?>
        <?php echo Modules::run('Content/Content/get_customer'); ?>
        <section class="section-contact">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div>
                            <img src="<?php echo $cate_contact->image; ?>"
                                 class="img-responsive" alt="viện thẩm mỹ hàng đầu Việt Nam"/></div>
                    </div>
                    <div class="col-sm-4">
                        <div class="new-contact-form">
                            <div class="new-heading">
                                <?php if(!empty($notes[9])){ echo $notes[9] ;}?>
                            </div>
                            <div class="content">
                                <form  accept-charset="utf-8" class="form-contact register-form-1">
                                    <input class="form-control" name="type" type="hidden" value="1">
                                    <div class="form-group"><p>Họ tên</p><input class="form-control" name="name"
                                                                                type="text" required></div>
                                    <div class="form-group"><p>Email</p><input class="form-control" name="email"
                                                                               type="email" required
                                                                               data-msg-required="Thông tin cần thiết"
                                                                               data-msg-email="Xin vui lòng nhập email hợp lệ">
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group"><p>Số điện thoại</p><input class="form-control"
                                                                                               name="phone"
                                                                                               type="tel" required
                                                                                               data-rule-vnphone="true">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group"><p>Chọn cơ sở</p><select
                                                        name="address" required
                                                        data-msg-required="Thông tin cần thiết" class="form-control">
                                                    <?php if (!empty($contact)) {
                                                        foreach ($contact as $obj) {?>
                                                            <option value="<?php echo $obj->title; ?>"><?php echo $obj->title; ?></option>
                                                        <?php } ?>
                                                    <?php } ?>
                                                </select></div>
                                        </div>
                                    </div>
                                    <div class="form-group"><p>Lời nhắn</p><textarea class="form-control" name="content"
                                                                                     rows="2"
                                                                                     data-msg-required="Thông tin cần thiết"></textarea>
                                    </div>
                                    <div class="btn-submit-gr">
                                        <input type="hidden" name="curl" value="<?php echo current_url();?>">
                                        <button type="submit" class="cool-btn-cta">ĐẶT LỊCH HẸN NGAY</button>
                                        <i>*Chúng tôi sẽ liên hệ trong vòng 24h</i></div>
                                </form>
                                <script>
                                    $(document).ready(function () {
                                        $('.form-contact').submit(function () {
                                            $.ajax({
                                                type: "post",
                                                url: '<?php echo base_url();?>register-contact',
                                                data: $('.form-contact').serialize(),
                                                dataType: 'json',
                                                success: function (data) {
                                                    $('.form-contact').html(data.view);
                                                }
                                            });
                                            return false;
                                        })
                                    })
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <script>
        windowsize = $(window).width();
        stagePaddingValue = 400;

        function stagePadding() {
            if (windowsize <= 992) {
                stagePaddingValue = 200;
            } else if (windowsize > 993 & windowsize < 1700) {
                stagePaddingValue = 400;
            } else {
                stagePaddingValue = 600;
            }
            console.log(stagePaddingValue)
        }

        //1700, 1500, 1366, 1280, 992, 768

        stagePadding();
        $(".opacity-item-m").owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            equalize: true,
            autoplay: false,
            margin: 5,
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1024: {
                    items: 3
                }
            }
        });
        $('.opacity-item').owlCarousel({
            stagePadding: stagePaddingValue,
            loop: true,
            margin: 30,
            nav: true,
            navText: '',
            dots: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    </script>
<?php } ?>