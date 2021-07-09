<?php
$title = 'title' . $rear;
$excerpt = 'excerpt' . $rear;
$fulltext = 'fulltext' . $rear;
?>
<?php if (!empty($art)) { ?>
    <div class="uk-container uk-container-center">
        <div class="uk-grid">
            <?php if (!empty($arr_cate)) { ?>
                <div class="uk-width-medium-1-1">
                    <div class="link">
                        <a href="<?php echo base_url();?>"><?php if($rear=='_en'){echo 'Accueil';}else{echo 'Home';}?></a>
                        <?php foreach ($arr_cate as $cat) { ?>
                            / <a href="<?php echo base_url().$cat->alias.'.html' ;?>" title="<?php echo show_meta($cat);?>"><?php echo $cat->$title ;?></a>
                        <?php } ?>
                    </div>
                </div>
            <?php } ?>
            <?php echo Modules::run('Left/Module_left/index'); ?>
            <div class="uk-width-medium-7-10">
                <h1 class="title_article">
                    <?php echo $art->$title ;?>
                </h1>
                <div class="article">
                    <?php echo $art->$fulltext ;?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>