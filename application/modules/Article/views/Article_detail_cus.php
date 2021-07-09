<?php if(!empty($art)){ ?>
<section class="testimonial-detail">
    <div class="container">
        <style>
            section {
                padding: 0 0 60px !important;
            }

            section img {
                margin: 10px 0;
            }

            .fr-fic.fr-dib {
                margin: 0 auto;
                display: inherit;
            }
        </style>
        <article>
            <h1 style="color:#000"><?php echo $art->title; ?></h1>
            <p><strong><?php echo $art->hoten; ?> </strong> - <?php echo $art->ceo; ?> </p>
            <div>
                <?php echo $art->content_text; ?>
            </div>
        </article>
    </div>
</section>
    <?php echo Modules::run('Products/Module_product/index'); ?>
<?php } ?>