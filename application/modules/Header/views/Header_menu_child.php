<?php $title = 'title' . $rear; ?>
<div class="main main-cate">
    <div class="uk-container-center uk-container uk-padding-remove">
        <div class="container-right">
            <div class="uk-grid row-top uk-margin-remove">
                <div class="uk-width-small-1-4 uk-width-large-1-5 uk-padding-remove">

                    <div class="menu_course">
                        <div class="box">
                            <div class="box-title"><h2><?php if (isset($_COOKIE['rear'])) {
                                        echo 'Courses';
                                    } else {
                                        echo 'Các khóa học';
                                    } ?></h2></div>
                            <div class="box-content">
                                <div class="box_course">
                                    <?php if (!empty($menu_course)) { ?>
                                        <ul>
                                            <?php foreach($menu_course as $cou){
                                                if(!empty($cou->meta_title)){
                                                    $meta = $cou->meta_title;
                                                }else{
                                                    $meta = $cou->$title;
                                                }
                                                ?>
                                            <li><a href="<?php echo base_url().link_cate()[$cou->id];?>" title="<?php echo $meta ;?>"><?php echo $cou->$title ;?></a></li>
                                            <?php } ?>
                                        </ul>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-width-small-3-4 uk-width-large-4-5 uk-padding-remove">
                    <div class="banner-primary">
                        <?php if (!empty($slide)) { ?>
                            <div id="owl-banner" class="owl-carousel owl-theme">
                                <?php foreach ($slide as $sl) { ?>
                                    <div class="item">
                                        <a href="<?php echo $sl->hyperlink; ?>">
                                            <img src="<?php echo $sl->image; ?>" alt="<?php echo $sl->title; ?>">
                                        </a>
                                    </div>
                                <?php } ?>
                            </div>
                            <script>


                                $(document).ready(function () {

                                    $("#owl-banner").owlCarousel({

                                        navigation: true, // Show next and prev buttons
                                        slideSpeed: 300,
                                        paginationSpeed: 400,
                                        singleItem: true,
                                        pagination:false,
                                        navigationText:false

                                        // "singleItem:true" is a shortcut for:
                                        // items : 1,
                                        // itemsDesktop : false,
                                        // itemsDesktopSmall : false,
                                        // itemsTablet: false,
                                        // itemsMobile : false

                                    });

                                });


                            </script>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>