<div class="main  d-none d-md-block cart-desktop">
    <div class="header-cart" style="background:#fff;">
        <div class="title-cart">
            <h3>Giỏ hàng của bạn</h3> (<span class="count_item_pr"><?php echo $this->cart->total_items();?></span> sản phẩm)
        </div>
    </div>
    <div class="col-main cart_desktop_page cart-page">
        <div class="cart page_cart hidden-xs">
            <form action="<?php echo base_url(); ?>cart/update" method="post" novalidate="" class="margin-bottom-0">
                <div class="bg-scroll">
                    <div class="cart-thead">
                        <div style="width: 17%">Ảnh sản phẩm</div>
                        <div style="width: 33%"><span class="nobr">Tên sản phẩm</span></div>
                        <div style="width: 15%" class="a-center"><span class="nobr">Đơn giá</span></div>
                        <div style="width: 20%" class="a-center">Số lượng</div>
                        <div style="width: 15%" class="a-center">Thành tiền</div>
                    </div>
                    <div class="cart-tbody">
                        <?php if ($this->cart->contents()) {
                            $i = 0;
                            foreach ($this->cart->contents() as $item) {
                                $i++;
                                $product = $this->Common_model->get_one('product', array('id' => $item['id']));
                                if (!empty($product)) {
                                    ?>
                                    <div class="item-cart productid-<?php echo $product->id;?>">
                                        <div style="width: 17%" class="image"><a class="product-image"
                                                                                 title="<?php echo show_meta($product); ?>"
                                                                                 href="<?php echo base_url().$product->alias;?>"><img
                                                    width="75" height="auto"
                                                    alt="<?php echo $product->title;?>"
                                                    src="<?php echo $product->image;?>"></a>
                                        </div>
                                        <div style="width: 33%" class="prd_name"><h2 class="product-name"><a
                                                    class="text2line"
                                                    href="<?php echo base_url().$product->alias;?>"><?php echo $product->title;?></a>
                                            </h2><a class="button remove-item remove-item-cart" title="Xóa"
                                                    href="javascript:;" onclick="delete_cart_all('<?php echo $item['rowid']; ?>','<?php echo base_url();?>');"
                                                    data-id="<?php echo $product->id;?>"><span><i class="fa fa-trash"
                                                                                                  aria-hidden="true"></i><span>Xóa sản phẩm</span></span></a>
                                        </div>
                                        <div style="width: 15%" class="a-center"><span class="item-price"> <span
                                                    class="price"><?php echo VndDot($product->price);?>₫</span></span>
                                        </div>
                                        <div style="width: 20%" class="a-center">
                                            <div class="input_qty_pr"><input class="variantID" type="hidden"
                                                                             name="variantId"
                                                                             value="<?php echo $product->id;?>">
                                                <button onclick="step_down(this)" data-id="updates_<?php echo $item['id']; ?>"
                                                        class="reduced_pop items-count btn-minus" type="button">–
                                                </button>
                                                <input type="text" maxlength="12" min="1"
                                                       class="input-text number-sidebar input_pop input_pop qtyItem<?php echo $product->id;?>"
                                                       id="updates_<?php echo $item['id']; ?>" name="<?php echo $item['id']; ?>"
                                                       value="<?php echo $item['qty']; ?>" onchange="update_cart_all(this,'<?php echo $item['rowid']; ?>','<?php echo base_url();?>')">
                                                <button onclick="step_up(this)" data-id="updates_<?php echo $item['id']; ?>"
                                                        class="increase_pop items-count btn-plus" type="button">+
                                                </button>
                                            </div>
                                        </div>
                                        <div style="width: 15%" class="a-center"><span class="cart-price"> <span
                                                    class="price"><?php echo VndDot($item['price'] * $item['qty']); ?>₫</span> </span>
                                        </div>
                                    </div>
                                <?php }
                            }
                        } ?>
                    </div>
                </div>
            </form>
            <div class="cart-collaterals cart_submit row">
                <div class="col-md-6 ">
                </div>
                <div class="totals-table totals col-md-6 ">
                    <div class="totals">
                        <div class="inner">
                            <table class="table shopping-cart-table-total margin-bottom-0"
                                   id="shopping-cart-totals-table">
                                <colgroup>
                                    <col>
                                    <col>
                                </colgroup>
                                <tfoot>
                                <tr>
                                    <td colspan="0" class="a-right"><span>Tạm tính:</span></td>
                                    <td class="a-right"><strong><span
                                                class="totals_price price"><?php echo VndDot($this->cart->total()); ?>₫</span></strong></td>
                                </tr>
                                <tr>
                                    <td colspan="0" class="a-right"><span>Thành tiền:</span></td>
                                    <td class="a-right"><strong><span
                                                class="totals_price_second totals_price price"><?php echo VndDot($this->cart->total()); ?>₫</span></strong>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-primary button btn-proceed-checkout"
                                            title="Thực hiện thanh toán" type="button"
                                            onclick="window.location.href='<?php echo base_url();?>checkout'">
                                        <span>Thực hiện thanh toán</span></button>
                                    <button class="btn btn-white" title="Tiếp tục mua hàng" type="button"
                                            onclick="window.location.href='<?php echo base_url();?>'"><span>Tiếp tục mua hàng</span>
                                    </button>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<div class="cart-mobile d-block d-md-none">
    <form action="<?php echo base_url(); ?>cart/update" method="post" novalidate="" class="margin-bottom-0">
        <div class="header-cart" style="background:#fff;">
            <div class="title-cart">
                <h3>Giỏ hàng của bạn</h3>
            </div>

        </div>

        <div class="header-cart-content" style="background:#fff;">
            <div class="cart_page_mobile content-product-list">
                <?php if ($this->cart->contents()) {
                    $i = 0;
                    foreach ($this->cart->contents() as $item) {
                        $i++;
                        $product = $this->Common_model->get_one('product', array('id' => $item['id']));
                        if (!empty($product)) { ?>
                            <div class="item-product item productid-<?php echo $product->id;?> ">
                                <div class="item-product-cart-mobile">

                                    <a class="product-images1"
                                       title="<?php echo show_meta($product); ?>"
                                       href="<?php echo base_url().$product->alias;?>"><img
                                            width="80" height="150"
                                            alt="<?php echo $product->title;?>"
                                            src="<?php echo $product->image;?>"></a>

                                </div>
                                <div class="title-product-cart-mobile"><h3><a
                                            href="<?php echo base_url().$product->alias;?>"><?php echo $product->title;?></a></h3>
                                    <p>Giá: <span><?php echo VndDot($product->price);?>₫</span></p></div>
                                <div class="select-item-qty-mobile">
                                    <div class="txt_center"><input class="variantID" type="hidden" name="variantId"
                                                                   value="<?php echo $product->id;?>">
                                        <button onclick="var result = document.getElementById('qtyMobile<?php echo $product->id;?>'); var qtyMobile<?php echo $product->id;?> = result.value; if( !isNaN( qtyMobile<?php echo $product->id;?> ) &amp;&amp; qtyMobile<?php echo $product->id;?> > 1 ) result.value--;return false;"
                                                class="reduced items-count btn-minus" type="button">–
                                        </button>
                                        <input type="text" maxlength="12" min="0"
                                               class="input-text number-sidebar qtyMobile<?php echo $product->id;?>" id="qtyMobile<?php echo $product->id;?>"
                                               name="<?php echo $item['id']; ?>"
                                               value="<?php echo $item['qty']; ?>" onchange="update_cart_all(this,'<?php echo $item['rowid']; ?>')">
                                        <button onclick="var result = document.getElementById('qtyMobile<?php echo $product->id;?>'); var qtyMobile<?php echo $product->id;?> = result.value; if( !isNaN( qtyMobile<?php echo $product->id;?> )) result.value++;return false;"
                                                class="increase items-count btn-plus" type="button">+
                                        </button>
                                    </div>
                                    <a class="button remove-item remove-item-cart" href="javascript:;" onclick="delete_cart_all('<?php echo $item['rowid']; ?>','<?php echo base_url();?>');"
                                       data-id="<?php echo $product->id; ?>">Xoá</a></div>
                            </div>
                        <?php }
                    }
                } ?>
            </div>
            <div class="header-cart-price" style="">
                <div class="title-cart "><h3 class="text-xs-left">Tổng tiền</h3><a
                        class="text-xs-right pull-right totals_price_mobile"><?php echo VndDot($this->cart->total()); ?>₫</a></div>
                <div class="checkout">
                    <button class="btn-proceed-checkout-mobile" title="Tiến hành thanh toán" type="button"
                            onclick="window.location.href='<?php echo base_url();?>checkout'"><span>Tiến hành thanh toán</span></button>
                    <button class="btn btn-white f-left" title="Tiếp tục mua hàng" type="button"
                            onclick="window.location.href='<?php echo base_url();?>'"><span>Tiếp tục mua hàng</span>
                    </button>
                </div>
            </div>
        </div>

    </form>

</div>