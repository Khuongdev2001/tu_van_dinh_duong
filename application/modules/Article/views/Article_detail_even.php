<?php if (!empty($cate)) { ?>
    <section class="body-content">
        <div class="container">
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
                        <p class="cate-title-left"><?php if (!empty($_SESSION['rear']) && $_SESSION['rear'] == '_en') {
                                echo 'Catalogs';
                            } else {
                                echo 'Danh mục';
                            } ?> <?php echo $arr_cate[0]->$GLOBALS['title']; ?></p>
                        <div class="module-left">
                            <ul class="list-pt">
                                <?php if (!empty($cate_child)) {
                                    foreach ($cate_child as $child) { ?>
                                        <li class="<?php if ($child->id == $cate->id) {
                                            echo 'active';
                                        } ?>">
                                            <a href="<?php echo base_url($child->$GLOBALS['alias']); ?>">
                                                <?php echo $child->title; ?>
                                            </a>
                                        </li>
                                        <?php if (!empty($cate_baby[$child->id])) {
                                            foreach ($cate_baby[$child->id] as $baby) { ?>
                                                <li class="<?php if ($baby->id == $cate->id) {
                                                    echo 'active';
                                                } ?> baby-cate">
                                                    <a href="<?php echo base_url($baby->$GLOBALS['alias']); ?>">
                                                        <?php echo $baby->$GLOBALS['title']; ?>
                                                    </a>
                                                </li>
                                            <?php }
                                        } ?>
                                    <?php }
                                } ?>
                            </ul>
                        </div>
                    </div>
                    <?php if (!empty($more_art)) { ?>
                        <div class="module-pro-sale">
                            <p class="cate-title-left"><?php if (!empty($_SESSION['rear']) && $_SESSION['rear'] == '_en') {
                                    echo 'More post';
                                } else {
                                    echo 'Bài viết liên quan';
                                } ?></p>
                            <ul>
                                <?php foreach ($more_art as $art1) { ?>
                                    <li>
                                        <div class="row row-5">
                                            <div class="col-sm-3 padding-5">
                                                <a href="<?php echo base_url() . $art1->$GLOBALS['alias']; ?>"
                                                   class="img-pro" title="<?php echo show_meta($art1); ?>">
                                                    <img src="<?php echo $art1->image; ?>"
                                                         alt="<?php echo show_meta($art); ?>">
                                                </a>
                                            </div>
                                            <div class="col-sm-9 padding-5">
                                                <h3>
                                                    <a href="<?php echo base_url() . $art1->$GLOBALS['alias']; ?>"
                                                       title="<?php echo show_meta($art1); ?>">
                                                        <?php echo $art1->$GLOBALS['title']; ?>
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                <?php } ?>
                            </ul>
                        </div>
                    <?php } ?>
                </div>
                <div class="col-sm-9">
                    <h1 class="cate-title-left"><?php echo $art->$GLOBALS['title']; ?></h1>
                    <div class="article-detail">
                        <?php echo $art->$GLOBALS['fulltext']; ?>
                    </div>
                    <div class="btn-social">
                        <script type="text/javascript"
                                src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5902e86bcf77f4e9"></script>
                        <div class="addthis_inline_share_toolbox"></div>
                    </div>
                    <script type="text/javascript" language="javascript"
                            src="<?php echo base_url('skin/frontend'); ?>/js/behavior.js"></script>
                    <script type="text/javascript" language="javascript"
                            src="<?php echo base_url('skin/frontend'); ?>/js/rating.js"></script>
                    <link rel="stylesheet" type="text/CSS"
                          href="<?php echo base_url('skin/frontend'); ?>/css/rating.css"/>
                    <div class="fb-comments" data-href="<?php echo current_url(); ?>" data-width="100%"
                         data-numposts="5"></div>
                </div>
            </div>
        </div>
    </section>
<?php } ?>