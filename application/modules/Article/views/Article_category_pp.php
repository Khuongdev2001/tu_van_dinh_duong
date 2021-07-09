<?php if (!empty($cate)) { ?>
    <div class="body-content">
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <div class="main-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>"><i
                                            class="fa fa-home"></i> <?php echo rear('home'); ?></a></li>
                            <?php if (!empty($arr_cate)) {
                                foreach ($arr_cate as $cat) {
                                    ?>
                                    <li class="breadcrumb-item">
                                        <a href="<?php echo base_url() . $cat->alias.'.html'; ?>"
                                           title="<?php echo show_meta($cat); ?>">
                                            <?php echo $cat->title; ?>
                                        </a>
                                    </li>
                                <?php }
                            } ?>
                        </ol>
                    </div>
                    <h1 class="main-title"><?php echo $cate->title; ?></h1>
                    <?php if (!empty($child_cat)) { ?>
                        <div class="group-address">
                            <?php foreach ($child_cat as $cat) { ?>
                                <div class="box-address">
                                    <h2 class="add-parent">
                                        <a href="<?php echo base_url() . $cat->alias.'.html'; ?>">
                                            <i class="fa fa-globe"></i>
                                            <?php echo $cat->color; ?>
                                        </a>
                                    </h2>
                                    <?php if (!empty($art_child[$cat->id])) { ?>
                                        <div class="add-child">
                                            <div class="row row-5">
                                                <?php foreach ($art_child[$cat->id] as $art) { ?>
                                                    <div class="col-sm-3 padding-5">
                                                        <h3>
                                                            <a href="<?php echo base_url() . $art->alias.'.html'; ?>">
                                                                <i class="fa fa-hand-o-right"></i>
                                                                <?php echo $art->title_other; ?>
                                                            </a>
                                                        </h3>
                                                    </div>
                                                <?php } ?>
                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                        </div>
                    <?php } ?>
                    <?php if (!empty($article)) { ?>
                        <div class="list-item-news">
                            <?php foreach ($article as $art) { ?>
                                <div class="row-list-news">
                                    <div class="row row-10">
                                        <div class="col-sm-3 padding-10">
                                            <a href="<?php echo base_url() . $art->alias.'.html'; ?>"
                                               title="<?php echo show_meta($art); ?>">
                                                <img src="<?php echo $art->image; ?>"
                                                     alt="<?php echo show_meta($art); ?>">
                                            </a>
                                        </div>
                                        <div class="col-sm-9 padding-10">
                                            <h3 class="news-title">
                                                <a href="<?php echo base_url() . $art->alias.'.html'; ?>"
                                                   title="<?php echo show_meta($art); ?>">
                                                    <?php echo $art->title; ?>
                                                </a>
                                            </h3>
                                            <div class="description">
                                                <?php echo $art->introtext; ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                        <div id="paging">
                            <div class="auto pagination"><?php echo $this->pagination->create_links(); ?></div>
                        </div>
                    <?php } ?>
                </div>
                <?php echo Modules::run('Right/Module_right/index'); ?>
            </div>

        </div>
    </div>
<?php } ?>