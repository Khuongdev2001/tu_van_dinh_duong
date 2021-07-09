<?php if (!empty($item_post)) {
    if ($item_post->show == 0) {
        $this->Common_model->update_data('order', array('id' => $item_post->id), array('show' => 1));
    }
    $product = $this->Common_model->get_data('product');
    foreach ($product as $ur) {
        $object[$ur->id] = $ur;
    }
    $detail_order = $this->Common_model->get_data('order_details', array('id_order' => $item_post->id));
    if (isset($_GET['page'])) {
        $page = '&page=' . $_GET['page'];
    } else {
        $page = '';
    }
    ?>
    <form method="post"
          action="<?php echo base_url(); ?>manager/edit?table=order&id=<?php echo $item_post->id . $page; ?>">
        <div class="menu-filter filter-add add-user">
            <ul class="" role="tablist">
                <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                          role="tab" data-toggle="tab">Thông tin đơn hàng</a>
                </li>
            </ul>
        </div>
        <!-- end tab list-->
        <div class="content-add-item">
            <p class="add-title-top">Thông tin chi tiết</p>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="user-info">
                    <div class="row row-input">
                        <div class="col-xs-2">Họ tên</div>
                        <div class="col-xs-8">
                            <?php echo $item_post->name; ?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Điện thoại</div>
                        <div class="col-xs-8">
                            <?php echo $item_post->phone; ?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Email</div>
                        <div class="col-xs-8">
                            <?php echo $item_post->email; ?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">&#272;&#7883;a ch&#7881;</div>
                        <div class="col-xs-8">
                            <?php echo $item_post->address; ?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Sản phẩm</div>
                        <div class="col-xs-8">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>SP</th>
                                    <th>Mã</th>

                                    <th>SL</th>
                                    <th>Giá</th>
                                </tr>
                                </thead>
                                <?php if(!empty($detail_order)){
                                    foreach ($detail_order as $ord){ ?>
                                        <?php $product = $this->Common_model->get_one('product',array('id'=>$ord->id_sp));
                                        if(!empty($product)){?>
                                            <tr>
                                                <td><a href="<?php echo base_url().$product->alias; ?>"><?php echo $product->title; ?></a></td>
                                                <td><?php echo $product->code; ?></td>

                                                <td><?php echo $ord->qty; ?></td>
                                                <td><?php echo VndDot($ord->price).'đ'; ?></td>
                                            </tr>
                                        <?php  } ?>
                                    <?php }
                                } ?>
                                <tr>
                                    <td>Vận chuyển</td>
                                    <td></td>
                                    <td></td>
                                    <td><?php echo VndDot($item_post->ship).'đ'; ?></td>
                                </tr>
                                <tr>
                                    <td>Tổng cộng</td>
                                    <td></td>
                                    <td></td>
                                    <td><?php echo VndDot($item_post->total).'đ'; ?></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Hình thức đặt hàng</div>
                        <div class="col-xs-10">
                            <?php if($item_post->pay_bank==0){echo 'COD';}else{echo 'Chuyển khoản';}?>
                        </div>
                    </div>

                    <div class="row row-input">
                        <div class="col-xs-2">Ngày mua</div>
                        <div class="col-xs-10">
                            <?php echo date('d-m-Y', strtotime($item_post->date_create)); ?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Tình trạng đơn hàng</div>
                        <div class="col-xs-10">
                            <div>
                                <div class="select-box" style="display: inline-block; min-width: 100px"><label> <select
                                                name="status">
                                            <option value="0" <?php if ($item_post->type_money == 0) {
                                                echo 'selected="selected"';
                                            } ?>>Chờ xử lý
                                            </option>
                                            <option value="1" <?php if ($item_post->type_money == 1) {
                                                echo 'selected="selected"';
                                            } ?>>Chờ thanh toán
                                            </option>
                                            <option value="2" <?php if ($item_post->type_money == 2) {
                                                echo 'selected="selected"';
                                            } ?>>Đang giao hàng
                                            </option>
                                            <option value="3" <?php if ($item_post->type_money == 3) {
                                                echo 'selected="selected"';
                                            } ?>>Đã hoàn thành
                                            </option>
                                        </select> </label></div>
                            </div>                            <!-- end -->                        </div>
                    </div>
                </div>
                <!-- end tab info-->
                <div class="row text-left">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-10">
                        <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                        <a href="<?php echo $_SERVER['HTTP_REFERER']; ?>" class="btn btn-default btn-delete">Quay
                            lại</a>
                    </div>

                </div>
            </div>
            <!-- end tab content-->

        </div>
    </form>
<?php } ?>