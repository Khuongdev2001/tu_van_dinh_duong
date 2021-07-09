<?php if (!empty($cate)) { ?>
    <div class="breadcrumb">
        <div class="container">
            <div class="row">
                <ul>
                    <li><a href="<?php echo base_url(); ?>">Trang chủ</a></li>
                    <?php if (!empty($arr_cate)) {
                        foreach ($arr_cate as $cat) {
                            ?>
                            <li class="<?php if ($cat->id == $cate->id) {
                                echo 'active';
                            } ?>">
                                <a href="<?php echo base_url() . $cat->alias.'.html'; ?>"
                                   title="<?php echo show_meta($cat); ?>">
                                    <?php echo $cat->title; ?>
                                </a>
                            </li>
                        <?php }
                    } ?>
                </ul>
            </div>
        </div>
    </div>
    <section class="main-blog">
        <div class="container">
            <?php echo $cate->content_text; ?>
        </div>
    </section>
    <?php echo Modules::run('Content/Content/get_customer'); ?>
    <?php echo Modules::run('Products/Module_product/index'); ?>
<?php } ?>