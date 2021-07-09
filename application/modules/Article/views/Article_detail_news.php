<?php if (!empty($cate)) { ?>
    <section class="body-content">
        <div class="container">
            <div class="banner-home">
                <img src="<?php echo $cate->banner; ?>" alt="<?php echo show_meta($cate); ?>">
            </div>
            <div class="main-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>"><?php echo rear('home'); ?></a></li>
                    <?php if (!empty($arr_cate)) {
                        foreach ($arr_cate as $cat) {
                            ?>
                            <li class="breadcrumb-item">
                                <a href="<?php echo base_url() . $cat->$GLOBALS['alias']; ?>"
                                   title="<?php echo show_meta($cat); ?>">
                                    <?php echo $cat->$GLOBALS['title']; ?>
                                </a>
                            </li>
                        <?php }
                    } ?>
                </ol>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <div class="module-pt">
                        <p class="cate-title-left">
                            <span><?php echo rear('menu') . $arr_cate[0]->$GLOBALS['title']; ?></span></p>
                        <div class="module-left left-cate-pro">
                            <ul class="list-pt">
                                <?php if (!empty($cate_child)) {
                                    foreach ($cate_child as $child) { ?>
                                        <li class="<?php if ($child->id == $cate->id) {
                                            echo 'active';
                                        } ?>">
                                            <a href="<?php echo base_url($child->$GLOBALS['alias']); ?>">
                                                <i class="fa fa-caret-right"></i> <?php echo $child->$GLOBALS['title']; ?>
                                            </a>
                                        </li>
                                        <?php if (!empty($cate_baby[$child->id])) {
                                            foreach ($cate_baby[$child->id] as $baby) { ?>
                                                <li class="<?php if ($baby->id == $cate->id) {
                                                    echo 'active';
                                                } ?> baby-cate">
                                                    <a href="<?php echo base_url($baby->$GLOBALS['alias']); ?>">
                                                        <i class="fa fa-caret-down"></i> <?php echo $baby->$GLOBALS['title']; ?>
                                                    </a>
                                                </li>
                                            <?php }
                                        } ?>
                                    <?php }
                                } ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-9">
                    <h1 class="title-news">
                        <?php echo $art->$GLOBALS['title']; ?>
                    </h1>
                    <div class="art-detail">
                        <?php echo $art->$GLOBALS['fulltext']; ?>
                    </div>
                    <?php if (!empty($more_art)) { ?>
                        <h4 class="cate-title-pri"><?php echo $cate->$GLOBALS['title'] . ' ' . rear('more'); ?></h4>
                        <ul class="more-art">
                        <?php foreach ($more_art as $art) { ?>

                            <li>
                                <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                   title="<?php echo show_meta($art); ?>">
                                    <?php echo $art->$GLOBALS['title']; ?>
                                </a>
                            </li>
                        <?php } ?>
                        </ul>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>
<?php } ?>