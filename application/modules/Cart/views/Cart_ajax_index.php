<?php if (!empty($product) && !empty($this->cart->total_items())) { ?>
    <div id="popup-cart-desktop" class="clearfix">
        <div class="title-popup-cart">
            <img src="<?php echo base_url(); ?>skin/frontend/images/icon-check.png?<?php echo time(); ?>"
                 alt="Amomo - Template bán hàng số 1 Việt Nam"> <span class="your_product">Bạn đã thêm <span
                        class="cart_name_style">[ <span class="cart-popup-name"><a
                                href="<?php echo base_url($product->alias); ?>"
                                title="<?php echo show_meta($product->title); ?> "><?php echo $product->title ?></a> </span>]</span> vào giỏ hàng thành công ! </span>
        </div>
        <div class="wrap_popup">
            <div class="title-quantity-popup">
                    <span class="cart_status" onclick="window.location.href='/gio-hang';">Giỏ hàng của bạn có <span
                                class="cart-popup-count"><?php echo $this->cart->total_items(); ?></span> sản phẩm </span>
                <i class="fa fa-caret-right"
                   aria-hidden="true"></i>
            </div>

            <div class="content-popup-cart">
                <div class="thead-popup">
                    <div style="width: 53%;" class="text-left product-name-mobile">Sản phẩm</div>
                    <div style="width: 15%;" class="text-center product-item-mobile">Đơn giá</div>
                    <div style="width: 15%;" class="text-center product-item-mobile">Số lượng</div>
                    <div style="width: 17%;" class="text-center product-item-mobile">Thành tiền</div>
                </div>
                <div class="tbody-popup scrollbar-dynamic">
                    <?php if ($this->cart->contents()) {
                        $i = 0;
                        foreach ($this->cart->contents() as $item) {
                            $i++;
                            $proCart = $this->Common_model->get_one('product', array('id' => $item['id']));
                            ?>
                            <div class="item-popup productid-<?php echo $proCart->id; ?>">
                                <div style="width: 13%;" class="height image_ text-left ">
                                    <div class="item-image"><a class="product-image"
                                                               href="<?php echo base_url($proCart->alias); ?>"
                                                               title="<?php echo show_meta($proCart->title); ?> "><img
                                                    alt="<?php echo $proCart->title; ?>"
                                                    src="<?php echo $proCart->image; ?>?v<?php echo time(); ?>"
                                                    width="90"></a></div>
                                </div>
                                <div style="width:37.8%;" class="height text-left name-pro">
                                    <div class="item-info"><p class="item-name"><a class="text2line"
                                                                                   href="<?php echo base_url($proCart->alias); ?>"
                                                                                   title="<?php echo show_meta($proCart->title); ?> "><?php echo $proCart->title; ?></a>
                                        </p>
                                        <a  onclick="delete_cart('<?php echo $item['rowid']; ?>','<?php echo base_url();?>');" href="javascript:;" class="remove-item-cart" title="Xóa"
                                                data-id="17758159"><i
                                                    class="fa fa-close"></i>&nbsp;&nbsp;Xoá</a>
                                        </div>
                                </div>
                                <div style="width: 14.4%;" class="border-cart height text-center product-item-mobile">
                                    <div class="item-price"><span class="price"><?php echo VndDot($item['price']); ?>₫</span></div>
                                </div>
                                <div style="width: 14.5%;" class="border-cart height text-center product-item-mobile">
                                    <div class="qty_inputt check_">
                                        <input class="variantID" type="hidden"
                                                                          name="variantId"
                                                                          value="17758159">
                                        <button onclick="step_down(this)" data-id="updates_<?php echo $item['id']; ?>"
                                                class="num1 reduced items-count btn-minus" type="button">-
                                        </button>
                                        <input type="text" maxlength="12" readonly=""
                                               class="input-text number-sidebar qtyItemP17758159" onchange="update_cart(this,'<?php echo $item['rowid']; ?>','<?php echo base_url();?>')"
                                               min="1" id="updates_<?php echo $item['id']; ?>"
                                               name="<?php echo $item['id']; ?>"
                                               value="<?php echo $item['qty']; ?>">
                                        <button onclick="step_up(this)" data-id="updates_<?php echo $item['id']; ?>"
                                                class="num2 increase items-count btn-plus" type="button">+
                                        </button>
                                    </div>
                                </div>
                                <div style="width: 20.3%;" class="border-cart height text-center product-item-mobile"><span
                                            class="cart-price"> <span
                                                class="price"><?php echo VndDot($item['price'] * $item['qty']); ?>₫</span> </span></div>
                            </div>
                        <?php }
                    } ?>
                </div>
                <div class="tfoot-popup">
                    <div class="tfoot-popup-1 a-right clearfix">
                            <span class="total-p popup-total">Tổng tiền thanh toán: <span
                                        class="total-price"><?php echo VndDot($this->cart->total()); ?>₫</span></span>
                    </div>
                    <div class="tfoot-popup-2 clearfix">
                        <a class="button checkout_ btn-proceed-checkout" title="Thực hiện thanh toán"
                           href="<?php echo base_url();?>checkout"><span>Thực hiện thanh toán</span></a>
                        <a class="button buy_ btn-continus-h" title="Tiếp tục mua hàng"
                           data-dismiss="modal" aria-label="Close"><span><span>Tiếp tục mua hàng</span></span></a>

                    </div>
                </div>
            </div>
            <a title="Close" class="quickview-close close-window" data-dismiss="modal" aria-label="Close"><i
                        class="fa  fa-close"></i></a>
        </div>
    </div>
<?php } ?>