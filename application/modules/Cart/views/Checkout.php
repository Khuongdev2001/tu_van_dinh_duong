<form id="form-validate" method="post" action="<?php echo base_url('checkout-payment'); ?>" class="content stateful-form formCheckout">
    <?php $ship=array();?>
    <div class=" wrap">
        <div class="sidebar ">
            <div class="sidebar_header">
                <h2>
                    <label class="control-label">Đơn hàng (<?php echo $this->cart->total_items(); ?> sản phẩm)</label>
                </h2>
                <hr class="full_width">
            </div>
            <div class="sidebar__content">
                <div class="order-summary order-summary--product-list order-summary--is-collapsed">
                    <div class="summary-body summary-section summary-product">
                        <div class="summary-product-list">
                            <table class="product-table">
                                <tbody>
                                <?php if ($this->cart->contents()) {
                                    $i = 0;
                                    foreach ($this->cart->contents() as $item) {
                                        $i++;
                                        $product = $this->Common_model->get_one('product', array('id' => $item['id']));
                                        if (!empty($product)) {
                                            $ship[]=$product->ship;
                                            ?>
                                            <tr class="product product-has-image clearfix">
                                                <td>
                                                    <div class="product-thumbnail">
                                                        <div class="product-thumbnail__wrapper">
                                                            <img src="<?php echo $product->image;?>"
                                                                 class="product-thumbnail__image">
                                                        </div>
                                                        <span class="product-thumbnail__quantity"
                                                              aria-hidden="true"><?php echo $item['qty']; ?></span>
                                                    </div>
                                                </td>
                                                <td class="product-info">
                                                    <span class="product-info-name">
                                                        <?php echo $product->title;?>
                                                    </span>
                                                </td>
                                                <td class="product-price text-right">
                                                    <?php echo VndDot($product->price);?>₫
                                                </td>
                                            </tr>
                                        <?php }
                                    }
                                } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr class="m0">
                </div>

                <div class="order-summary order-summary--total-lines">
                    <div class="summary-section border-top-none--mobile">
                        <div class="total-line total-line-subtotal clearfix">
                                <span class="total-line-name pull-left">
                                    Tạm tính
                                </span>
                            <span class="total-line-subprice pull-right"><?php echo VndDot($this->cart->total()); ?>₫</span>
                        </div>
                        <div class="total-line total-line-subtotal clearfix">
                                <span class="total-line-name pull-left">
                                   Phí vận chuyển
                                </span>
                            <span class="total-line-subprice pull-right"><?php echo VndDot(max($ship)); ?>₫</span>
                            <input type="hidden" name="ship" value="<?php echo max($ship);?>">
                        </div>
                        <div class="total-line total-line-total clearfix">
                                <span class="total-line-name pull-left">
                                    Tổng cộng
                                </span>
                            <span class="total-line-price pull-right"><?php echo VndDot($this->cart->total() + max($ship)); ?>₫</span>
                        </div>
                    </div>
                </div>
                <div class="form-group clearfix hidden-sm hidden-xs">
                    <div class="field__input-btn-wrapper mt10">
                        <a class="previous-link" href="<?php echo base_url('gio-hang'); ?>">
                            <i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>
                            <span>Quay về giỏ hàng</span>
                        </a>
                        <input class="btn btn-primary btn-checkout" type="submit" value="ĐẶT HÀNG">
                    </div>
                </div>
            </div>
        </div>
        <div class="main" role="main">
            <div class="main_header">
                <div class="shop logo logo--left ">

                    <h1 class="shop__name name-check-out" >
                        <a href="<?php echo base_url(); ?>">
                           Về trang chủ
                        </a>
                    </h1>
                    <p class="dat-hang-checkout">Đặt hàng</p>
                </div>
            </div>
            <div class="main_content">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <div class="section">
                            <div class="section__header">
                                <div class="layout-flex layout-flex--wrap">
                                    <h2 class="section__title layout-flex__item layout-flex__item--stretch">
                                        <i class="fa fa-id-card-o fa-lg section__title--icon hidden-md hidden-lg"
                                           aria-hidden="true"></i>
                                        <label class="control-label">Thông tin mua hàng</label>
                                    </h2>
                                </div>
                            </div>
                            <div class="section__content">
                                <div class="form-group">
                                    <div>
                                        <label class="field__input-wrapper js-is-filled">

                                            <input name="email" type="email" data-validation="required,email"
                                                   class="field__input form-control" id="_email" placeholder="Email"
                                                    >
                                        </label>
                                    </div>
                                </div>
                                <div class="billing">
                                    <div>
                                        <div class="form-group">
                                            <div class="field__input-wrapper">
                                                <input name="name" type="text"  data-validation="required"
                                                       class="field__input form-control" id="_billing_address_last_name" placeholder="Họ và tên">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="field__input-wrapper">

                                                <input name="phone" data-validation="required,length,number"
                                                       data-validation-allowing="float"
                                                       data-validation-length="10-20"
                                                       type="tel"
                                                       class="field__input form-control" id="_billing_address_phone" placeholder=" Số điện thoại">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="field__input-wrapper" >

                                                <input name="address" data-validation="required"
                                                       class="field__input form-control" id="_billing_address_address1" placeholder=" Địa chỉ">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section pt10">
                            <div class="section__content">
                                <div class="form-group m0">
                                    <div>
                                        <label class="field__input-wrapper"
                                               style="border: none">
                                            <textarea name="content"
                                                      class="field__input form-control m0" placeholder="Ghi chú"></textarea>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">

                        <div class="section payment-methods p0--desktop">
                            <div class="section__header">
                                <h2 class="section__title">
                                    <i class="fa fa-credit-card fa-lg section__title--icon hidden-md hidden-lg"
                                       aria-hidden="true"></i>
                                    <label class="control-label">Chọn hình thức thanh toán</label>
                                </h2>
                            </div>
                            <div class="section__content">
                                <div class="content-box">

                                    <div class="content-box__row">
                                        <div class="radio-wrapper">
                                            <div class="radio__input">
                                                <input class="input-radio" type="radio" value="0"
                                                       name="pay_bank" id="payment_method_316563"
                                                       checked="">
                                            </div>
                                            <label class="radio__label" for="payment_method_316563">
                                                <span class="radio__label__primary">Thanh toán khi giao hàng (COD)</span>
                                            </label>
                                        </div> <!-- /radio-wrapper-->
                                    </div>

                                    <div class="radio-wrapper content-box__row content-box__row--secondary"
                                         id="payment-gateway-subfields-316563">
                                        <div class="blank-slate">
                                            <p>Qúy khách thanh toán cho bưu tá khi nhận hàng</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-box">

                                    <div class="content-box__row">
                                        <div class="radio-wrapper">
                                            <div class="radio__input">
                                                <input class="input-radio" type="radio" value="1"
                                                       name="pay_bank" id="payment_method_3165633">
                                            </div>
                                            <label class="radio__label" for="payment_method_3165633">
                                                <span class="radio__label__primary">Thanh toán bằng chuyển khoản</span>
                                            </label>
                                        </div> <!-- /radio-wrapper-->
                                    </div>

                                    <div class="radio-wrapper content-box__row content-box__row--secondary"
                                         id="payment-gateway-subfields-316563">
                                        <div class="blank-slate">
                                            <p>Đang update...</p>
                                            <!-- <p>Số TK: 0451000328081</p>
                                            <p>Chủ TK: VUONG PHUONG LINH</p>
                                            <p>Chi nhánh: Cầu Giấy</p>
                                            <p>Nội dung: Số điện thoại KH</p> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section d-block d-sm-none">
                            <div class="form-group clearfix m0">
                                <input class="btn btn-primary btn-checkout" type="submit"
                                       value="ĐẶT HÀNG">
                            </div>
                            <div class="text-center mt20">
                                <a class="previous-link" href="<?php echo base_url('gio-hang'); ?>">
                                    <i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>
                                    <span>Quay về giỏ hàng</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main_footer footer unprint">
                <div class="mt10"></div>
            </div>
            <div class="modal fade" id="refund-policy" data-width="" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                            <h4 class="modal-title">Chính sách hoàn trả</h4>
                        </div>
                        <div class="modal-body">
                            <pre></pre>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="privacy-policy" data-width="" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                            <h4 class="modal-title">Chính sách bảo mật</h4>
                        </div>
                        <div class="modal-body">
                            <pre></pre>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="terms-of-service" data-width="" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                            <h4 class="modal-title">Điều khoản sử dụng</h4>
                        </div>
                        <div class="modal-body">
                            <pre></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

<script>
    $(document).ready(function () {
        $.validate({
            form: '#form-validate',
            lang: 'vi'
        });
    });
</script>