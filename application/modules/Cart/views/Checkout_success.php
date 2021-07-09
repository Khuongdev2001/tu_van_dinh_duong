<link href="<?php echo base_url();?>skin/frontend/css/thankyou.css?v=<?php echo time();?>" rel="stylesheet"/>
<?php $ship=array();?>
<div class="container">
    <div class="header">
        <div class="wrap">
            <div class="shop logo logo--left ">

                <h1 class="shop__name shop__name_back">
                    <a href="<?php echo base_url(); ?>">
                        Về trang chủ
                    </a>
                </h1>

            </div>
        </div>
    </div>
    <div class="main main-success">
        <div class="wrap clearfix">
            <div class="row thankyou-infos">
                <div class="col-md-7 thankyou-message">
                    <div class="thankyou-message-icon unprint">
                        <div class="icon icon--order-success svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                                <g fill="none" stroke="#8EC343" stroke-width="2">
                                    <circle cx="36" cy="36" r="35"
                                            style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"></circle>
                                    <path d="M17.417,37.778l9.93,9.909l25.444-25.393"
                                          style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="thankyou-message-text">
                        <h3>Cảm ơn Quý khách đã đặt hàng</h3>
                        <p>
                            Chúng tôi sẽ liên hệ với Quý khách sớm nhất có thể!
                        </p>
                    </div>
                    <div id="map">
                        <?php echo $setting->google_map; ?>
                    </div>
                </div>
                <div class="col-md-5 col-sm-12 order-info">
                    <div class="order-summary order-summary--custom-background-color ">
                        <div class="order-summary-header summary-header--thin summary-header--border">
                            <h2>
                                <label class="control-label">Đơn hàng</label>

                                <label class="control-label unprint">(<?php echo $this->cart->total_items();?>)</label>
                            </h2>
                            <a class="underline-none expandable expandable--pull-right mobile unprint"
                               href="javascript:void(0)">
                                Xem chi tiết
                            </a>
                        </div>
                        <div class="order-items mobile--is-collapsed">
                            <div class="summary-body summary-section summary-product">
                                <div class="summary-product-list">
                                    <ul class="product-list">
                                        <?php if ($this->cart->contents()) {
                                            $i = 0;
                                            foreach ($this->cart->contents() as $item) {
                                                $i++;
                                                $product = $this->Common_model->get_one('product', array('id' => $item['id']));
                                                if (!empty($product)) {
                                                    $ship[]=$product->ship;
                                                    ?>
                                                    <li class="product product-has-image clearfix">
                                                        <div class="product-thumbnail pull-left">
                                                            <div class="product-thumbnail__wrapper">

                                                                <img src="<?php echo $product->image;?>"
                                                                     class="product-thumbnail__image">

                                                            </div>
                                                            <span class="product-thumbnail__quantity unprint"
                                                                  aria-hidden="true"><?php echo $item['qty']; ?></span>
                                                        </div>
                                                        <div class="product-info pull-left">
                                                            <span class="product-info-name">
                                                                <strong>  <?php echo $product->title;?></strong>
                                                            </span>
                                                        </div>
                                                        <strong class="product-price pull-right">
                                                            <?php echo VndDot($product->price);?>₫
                                                        </strong>
                                                    </li>
                                                <?php }
                                            }
                                        } ?>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="summary-section  border-top-none--mobile ">
                            <div class="total-line total-line-subtotal clearfix">
                                    <span class="total-line-name pull-left">
                                        Tạm tính
                                    </span>
                                <span class="total-line-subprice pull-right">
                                        <?php echo VndDot($this->cart->total()); ?>₫
                                    </span>
                            </div>
                        </div>
                        <div class="summary-section  border-top-none--mobile ">
                            <div class="total-line total-line-subtotal clearfix">
                                    <span class="total-line-name pull-left">
                                       Phí vận chuyển
                                    </span>
                                <span class="total-line-subprice pull-right">
                                        <?php echo VndDot(max($ship)); ?>₫
                                    </span>
                            </div>
                        </div>
                        <div class="summary-section">
                            <div class="total-line total-line-total clearfix">
                                    <span class="total-line-name total-line-name--bold pull-left">
                                        Tổng cộng
                                    </span>
                                <span class="total-line-price pull-right">
                                        <?php echo VndDot($this->cart->total()+max($ship)); ?>₫
                                    </span>
                            </div>
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
<?php $this->cart->destroy(); ?>