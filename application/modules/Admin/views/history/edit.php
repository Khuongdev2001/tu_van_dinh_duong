<?php if (!empty($item_post)) { ?>
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
                        <div class="col-xs-2">Tiêu đề<span class="user-error">*</span></div>
                        <div class="col-xs-10">
                            <?php echo $item_post->title_his; ?>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2">Nội dung</div>
                        <div class="col-xs-10">
                            <?php
                            echo $item_post->content;
                            ?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Nhân viên</div>
                        <div class="col-xs-10">
                            <?php $user_post = $this->Common_model->get_one('users',array('id'=>$item_post->iduser));
                            if(!empty($user_post)){echo $user_post->username; }
                            ?>
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
    <style>
        ins {
            color: #333333;
            background-color: #eaffea;
            text-decoration: none;
        }
        del {
            color: #AA3333;
            background-color: #ffeaea;
            text-decoration: line-through;
        }
    </style>
<?php } ?>