<?php if (!empty($product)) {
    $count = count($product);
    foreach ($product as $pro) { ?>
        <div class="uk-width-medium-1-3">
            <div class="list_tour">
                <a href="<?php echo base_url() . $pro->alias.'.html'; ?>"
                   title="<?php echo show_meta($pro); ?>">
                    <img src="<?php echo $pro->image ;?>" width="100%" alt="<?php echo show_meta($pro); ?>">
                </a>
                <div class="title_list_tour">
                    <a href="<?php echo base_url() . $pro->alias.'.html'; ?>"
                       title="<?php echo show_meta($pro); ?>"><?php echo $pro->title ;?></a>
                </div>
                <div class="nd_list_tour">
                    <p>Ngày khởi hành: <?php echo $pro->day_tour; ?></p>
                    <p>Nơi khởi hành: <?php echo $pro->start_tour; ?></p>
                </div>
                <div class="price_list_tour">
                    <?php echo $pro->price; ?> VNĐ
                    <a href="<?php echo base_url() . 'booking/' . $pro->alias.'.html'; ?>">Booking</a>
                </div>
            </div>
        </div>
    <?php } ?>
    <span style="visibility: hidden" id="count"><?php if ($count < $cate->number_post) {
            echo 0;
        } else {
            echo 1;
        }; ?></span>

<?php } ?>