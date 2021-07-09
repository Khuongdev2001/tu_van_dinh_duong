<div class="body-wap">
    <?php if (!empty($product)) { ?>
        <section class="body-content">
            <div class="container">
                <div class="main-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>"><?php echo rear('home') ;?></a></li>
                        <li class="breadcrumb-item">
                            <a href="" title="">
                            </a>
                        </li>
                    </ol>
                </div>
                <div class="row">
                    <?php echo Modules::run('Left/Module_left/index'); ?>
                    <div class="col-sm-85">
                        <div class="excerpt-cate">
                            <h1 class="box-title"><span><?php echo rear('hot') ;?></span></h1>
                        </div>
                        <?php if (!empty($product)) {
                            $arr_pro = array_chunk($product, 4);
                            foreach ($arr_pro as $arr) { ?>
                                <div class="row row-product row-10">
                                    <?php foreach ($arr as $pro) { ?>
                                        <div class="col-sm-3 pro-item padding-10">
                                            <div class="pro-inner">
                                                <h4 style="margin-bottom: 0">
                                                    <a href="<?php echo base_url($pro->alias.'.html'); ?>"
                                                       title="<?php echo show_meta($pro); ?>">
                                                        <img style="margin-bottom: 0" src="<?php echo $pro->image; ?>"
                                                             alt="<?php echo $pro->image; ?>">
                                                    </a>
                                                </h4>
                                                <div class="info-product">
                                                    <h3>
                                                        <a href="<?php echo base_url($pro->alias.'.html'); ?>"
                                                           title="<?php echo show_meta($pro); ?>">
                                                            <?php echo $pro->$GLOBALS['title']; ?>
                                                        </a>
                                                    </h3>
                                                    <p><span><?php echo rear('code') ;?>:</span> <?php echo $pro->code_pr; ?></p>
                                                    <p><span><?php echo rear('size') ;?>:</span> <?php echo $pro->size_pr; ?></p>
                                                    <p><span><?php echo rear('price') ;?>:</span> <?php if ($pro->price > 0) {
                                                            echo VndDot($pro->price) . 'VNĐ';
                                                        } else {
                                                            echo rear('contact');
                                                        } ?></p>
                                                </div>

                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                            <div id="paging">
                                <div class="auto pagination"><?php echo $this->pagination->create_links(); ?></div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </section>
    <?php } ?>
</div>