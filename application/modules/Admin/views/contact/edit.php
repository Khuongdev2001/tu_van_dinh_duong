<?php if (!empty($item_post)) {
    if ($item_post->show == 0) {
        $this->Common_model->update_data('contact', array('id' => $item_post->id), array('show' => 1));
    }
    ?>
    <form>
        <div class="menu-filter filter-add add-user">
            <ul class="" role="tablist">
                <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                          role="tab" data-toggle="tab">Thông tin liên hệ</a>
                </li>
            </ul>
        </div>
        <!-- end tab list-->
        <div class="content-add-item">
            <p class="add-title-top">Thông tin chi tiết</p>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="user-info">
                    <div class="row row-input">
                        <div class="col-xs-2">Tên khách hàng<span class="user-error">*</span></div>
                        <div class="col-xs-10">
                            <?php echo $item_post->name; ?>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2">Email</div>
                        <div class="col-xs-10">
                            <?php echo $item_post->email; ?>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2">Điện thoại</div>
                        <div class="col-xs-10">
                            <?php echo $item_post->phone; ?>
                        </div>
                    </div>
                    <!-- end row-->

                    <div class="row row-input">
                        <div class="col-xs-2">Địa chỉ</div>
                        <div class="col-xs-10">
                            <?php echo $item_post->address; ?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Nội dung</div>
                        <div class="col-xs-10">
                            <?php echo $item_post->content; ?>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2">Thời gian gửi</div>
                        <div class="col-xs-10">
                            <?php echo date('d-m-Y',strtotime($item_post->date_create)); ?>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2">Url</span>
                        </div>
                        <div class="col-xs-10">
                            <?php echo $item_post->ip; ?>
                        </div>
                    </div>
                    <!-- end row-->

                </div>
                <!-- end tab info-->
                <div class="row text-left">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-10">
                        <a href="<?php echo $_SERVER['HTTP_REFERER']; ?>" class="btn btn-default btn-delete">Quay
                            lại</a>
                    </div>

                </div>
            </div>
            <!-- end tab content-->

        </div>
    </form>
<?php } ?>