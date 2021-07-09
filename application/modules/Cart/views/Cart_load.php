<div class="mini-cart text-xs-center">

    <a class="icon-cart" href="/cart"><img alt="icon-cart"
                                           src="//bizweb.dktcdn.net/100/111/231/themes/139137/assets/icon-cart.png?1473395521439"></a>
    <div class="heading-cart text-xs-left">
        <a href="<?php echo base_url(); ?>gio-hang">Giỏ hàng</a>
        <p><span><span class="cartCount"><?php if ($this->cart->contents()) {
                        echo $this->cart->total_items();
                    } else {
                        echo '0';
                    } ?></span></span> sản phẩm</p>
    </div>
    <div>
        <div class="top-cart-content arrow_box " style="">
            <!-- <div class="block-subtitle">Sản phẩm đã cho vào giỏ hàng</div> -->
            <?php if($this->cart->contents()) {?>
            <ul class="mini-products-list count_li hasclass" id="cart-sidebar">
                <?php foreach($this->cart->contents() as $item){
                   $idpro = $item['id'];
                    ?>
                <li class="list-item">
                    <ul>
                        <li class="item"><a title="<?php echo $item['name'] ;?>"
                                            href="<?php echo base_url().link_pro()[$idpro];?>" class="product-image"><img
                                    width="80"
                                    src="<?php echo $item['image'] ;?>"
                                    alt="<?php echo $item['name'] ;?>" class="anh-img"></a>
                            <div class="detail-item">
                                <div class="product-details"><a class="fa fa-remove"
                                                                onclick="removeItem(<?php echo $item['id'] ;?>)" title="Xóa"
                                                                href="javascript:void(0);">&nbsp;</a>
                                    <p class="product-name"><a title="<?php echo $item['name'] ;?>"
                                                               href="<?php echo base_url().link_pro()[$idpro];?>"><?php echo $item['name'] ;?></a></p></div>
                                <div class="product-details-bottom"><span class="price"><?php echo VndDot($item['price']) ;?>₫</span> <span
                                        class="title-desc">Số lượng:</span> <strong><?php echo $item['qty'] ;?></strong></div>
                            </div>
                        </li>
                    </ul>
                </li>
                <?php } ?>
                <li class="action">
                    <ul>
                        <li class="li-fix-1">
                            <div class="top-subtotal">
                                Tổng cộng:
                                <span class="price"><?php echo VndDot($this->cart->total());?>₫</span>
                            </div>
                        </li>
                        <li style="" class="li-fix-2">
                            <div class="actions">
                                <a class="btn-checkout btn-style" href="<?php echo base_url();?>checkout">
                                    <span>Thanh toán</span>
                                </a>
                                <a class="view-cart btn-style" href="<?php echo base_url();?>gio-hang">
                                    <span>Giỏ hàng</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>

            <script>
                var count = $("ul.count_li &gt; li.item").length;
            </script>
            <?php }else{?>
                <ul class="mini-products-list count_li hasclass" id="cart-sidebar">
                        <li class="list-item">
                            <ul>
                                <li class="item"><p>Không có sản phẩm nào trong giỏ hàng.</p></li>
                            </ul>
                        </li>
                </ul>
            <?php }?>
        </div>
    </div>
</div>
