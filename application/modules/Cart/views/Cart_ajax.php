<form method="POST" action="<?php echo base_url(); ?>cart/update">
    <div class="row">
        <div class="col-md-12">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th class="text-center">Xóa</th>
                    <th class="text-center">Sản phẩm</th>
                    <th class="text-center"><?php echo rear('pro_price');?></th>
                    <th class="text-center"><?php echo rear('pro_qty');?></th>
                    <th class="text-center"><?php echo rear('pro_mon');?></th>
                </tr>
                </thead>
                <tbody>
                <?php if ($this->cart->contents()) {
                    $i = 0;
                    foreach ($this->cart->contents() as $item) {
                        $i++;
                        $proCart = $this->Common_model->get_one('product', array('id' => $item['id']));
                        ?>
                        <tr>
                            <td class="text-center">
                                <p class="remove-item">
                                    <a style="cursor: pointer"
                                       onclick="delete_cart('<?php echo $item['rowid']; ?>');"
                                       title="Xóa"
                                       class="button remove-item"><i aria-hidden="true"
                                                                     class="fa fa-times-circle"></i> </a>
                                </p>
                            </td>
                            <td>
                                <div class="row row-5">
                                    <div class="col-sm-4 padding-5">
                                        <a class="img-cart"
                                           href="<?php echo base_url() . $proCart->alias; ?>"><img
                                                    src="<?php echo $proCart->image; ?>"
                                                    alt="<?php echo show_meta($proCart) ?>"></a>
                                    </div>
                                    <div class="col-sm-8 padding-5">
                                        <h2 class="name-cart">
                                            <a href="<?php echo base_url() . $proCart->alias; ?>"
                                               class="name-product-cart"><?php echo $proCart->title; ?></a>
                                        </h2>
                                    </div>
                                </div>
                            </td>
                            <td class="text-center">
                                <?php if ($proCart->price_old > 0) { ?>
                                    <span class="cart-price-old">
                                                        <?php echo VndDot($proCart->price_old); ?> ₫
                                                    </span>
                                <?php } ?>
                                <span class="cart-price">
                                                        <?php echo VndDot($item['price']); ?> ₫
                                                    </span>
                            </td>
                            <td class="text-center">
                                <div class="number-input">
                                    <button type="button" class="number-step-down" onclick="step_down(this)" data-id="updates_<?php echo $item['id']; ?>"></button>
                                    <input onchange="update_cart(this,'<?php echo $item['rowid']; ?>')"
                                           type="number" min="1" id="updates_<?php echo $item['id']; ?>"
                                           name="<?php echo $item['id']; ?>"
                                           value="<?php echo $item['qty']; ?>">
                                    <button type="button" class="number-step-up plus" onclick="step_up(this)" data-id="updates_<?php echo $item['id']; ?>"></button>
                                </div>
                            </td>
                            <td class="text-center"><span
                                        class="cart-price"><?php echo VndDot($item['price'] * $item['qty']); ?>
                                    vnđ</span></td>

                        </tr>
                    <?php }
                } ?>
                <tr class="number-total">
                    <td colspan="3">

                    </td>
                    <td colspan="2"  style="text-align: right">
                        <p>
                            <span class="title-count"><?php echo rear('title_count');?></span>
                            <span class="count-cart"><?php echo VndDot($this->cart->total()); ?>
                                vnđ</span>
                        </p>

                    </td>
                </tr>

                </tbody>
            </table>
            <div class="btn-checkout">
                <div class="row">
                    <div class="col-sm-8">

                    </div>
                    <div class="col-sm-2">
                        <?php $procate = $this->Common_model->get_one('categories', array('show' => 1, 'taxonomy' => 'cate_product', 'parentid' => 0)); ?>
                        <button onclick="<?php if (!empty($procate)) { ?>window.location.href='<?php echo base_url($procate->alias);
                        } ?>'"
                                type="button"
                                title="<?php echo rear('next_buy'); ?>"
                                class="btn btn-danger btn-next-buy">
                            <?php echo rear('next_buy'); ?>
                        </button>
                    </div>
                    <div class="col-sm-2">
                        <button onclick="window.location.href='<?php echo base_url(); ?>checkout'"
                                type="button"
                                title="<?php echo rear('pay'); ?>" class="btn btn-success">
                            <span><?php echo rear('pay'); ?></span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</form>