<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php
        echo validation_errors();
        ?>
    </div>
<?php }
if (!empty($note)) {
    echo ' <div class="validate-form">' . $note . '</div>';
}
?>
<form id="support-all" method="post"
      action="<?php echo base_url(); ?>manager/setting?table=setting">
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="" class="active">Quản trị hệ thống</a></li>
        </ul>
        <div class="btn-top-add">
            <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
            <a href="<?php echo base_url(); ?>" class="btn btn-default btn-delete">Hủy</a>
        </div>
    </div>
    <!-- end tab list-->
    <?php if (isset($_GET['setup'])) {
        $setup = $_GET['setup'];
    } else {
        $setup = '';
    } ?>
    <div class="content-add-item">
        <div class="row">
            <div class="col-xs-12 col-information">
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="support-live">
                        <div class="toggle-group">
                            <p class="toggle-title <?php if ($setup != 'website') {
                                echo 'toggle-title-up';
                            } ?> ">Thông tin website</p>
                            <div class="toggle-content" <?php if ($setup == 'website') {
                                echo 'style="display:block"';
                            } ?>>
                                <div class="row row-input">
                                    <div class="col-xs-2">Biểu tượng website</div>
                                    <div class="col-xs-10">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <input type="text" name="favicon_icon" id="xFilePath"
                                                       class="control-input"
                                                       style="width: 100%"
                                                       value="<?php if (!empty($arr_setting->favicon_icon)) {
                                                           echo $arr_setting->favicon_icon;
                                                       } else {
                                                           echo $this->input->post('favicon_icon');
                                                       } ?>"/>
                                            </div>
                                            <div class="col-xs-1 box-tooltip-img">
                                                <span class="image-tooltip">
                                                    <img id="views-image" class="zoom-image"
                                                         src="">
                                                </span>
                                            </div>
                                            <div class="col-xs-3">
                                                <button type="button" class="btn-browse"
                                                        onclick="openPopup('xFilePath','views-image')">
                                                    Browse...
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-2">Logo</div>
                                    <div class="col-xs-10">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <input type="text" name="logo" id="xFilePath1" class="control-input"
                                                       style="width: 100%"
                                                       value="<?php if (!empty($arr_setting->logo)) {
                                                           echo $arr_setting->logo;
                                                       } else {
                                                           echo $this->input->post('logo');
                                                       } ?>"/>
                                            </div>
                                            <div class="col-xs-1 box-tooltip-img">
                                                <span class="image-tooltip">
                                                    <img id="views-image1" class="zoom-image"
                                                         src="<?php if (!empty($arr_setting->logo)) {
                                                             echo $arr_setting->logo;
                                                         } else {
                                                             echo $this->input->post('logo');
                                                         } ?>">
                                                </span>
                                            </div>
                                            <div class="col-xs-3">
                                                <button type="button" class="btn-browse"
                                                        onclick="openPopup('xFilePath1','views-image1')">
                                                    Browse...
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row row-input">
                                    <div class="col-xs-2">Điện thoại</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="phone" class="control-input"
                                               value="<?php if (!empty($arr_setting->phone)) {
                                                   echo $arr_setting->phone;
                                               } else {
                                                   echo $this->input->post('phone');
                                               } ?>"/>
                                    </div>
                                </div>
                                <div class="row row-input">
                                    <div class="col-xs-2">Thời gian Flashsale</div>
                                    <div class="col-xs-8">
                                        <input type="text" placeholder="12/30/2020 18:30:00" name="countdown" class="control-input"
                                               value="<?php if (!empty($arr_setting->countdown)) {
                                                   echo $arr_setting->countdown;
                                               } else {
                                                   echo $this->input->post('countdown');
                                               } ?>"/>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                            <!-- end togger content-->
                        </div>
                        <!-- end togger-->
                        <div class="row row-input">
                            <div class="col-xs-12">Danh sách khách hàng ảo</div>
                            <div class="col-xs-12">
                                        <textarea type="text" name="customer" rows="10"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->customer)) {
                                                echo $arr_setting->customer;
                                            } else {
                                                echo $this->input->post('customer');
                                            } ?></textarea>
                            </div>
                        </div>
                        <div class="toggle-group">
                            <p class="toggle-title <?php if ($setup != 'social') {
                                echo 'toggle-title-up';
                            } ?>">Mạng xã hội</p>
                            <div class="toggle-content" <?php if ($setup == 'social') {
                                echo 'style="display:block"';
                            } ?>>
                                <div class="row row-input">
                                    <div class="col-xs-2">Link Facebook</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="facebook" class="control-input"
                                               value="<?php if (!empty($arr_setting->facebook)) {
                                                   echo $arr_setting->facebook;
                                               } else {
                                                   echo $this->input->post('facebook');
                                               } ?>"/>
                                    </div>
                                </div>
                                <div class="row row-input">
                                    <div class="col-xs-2">Link Youtube</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="youtube" class="control-input"
                                               value="<?php if (!empty($arr_setting->youtube)) {
                                                   echo $arr_setting->youtube;
                                               } else {
                                                   echo $this->input->post('youtube');
                                               } ?>"/>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                            <!-- end togger content--->
                        </div>
                        <!-- end togger-->
                        <!-- end -->
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Footer</p>
                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-12">
                                <textarea type="text" name="footer" rows="3"
                                          class="control-input input-title check-editor" id="footer"
                                          style="height: auto"><?php if (!empty($arr_setting->footer)) {
                                        echo $arr_setting->footer;
                                    } else {
                                        echo $this->input->post('footer');
                                    } ?></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end -->
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Nội dung trang đăng ký đại lý</p>
                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-12">
                                <textarea type="text" name="address_contact" rows="3"
                                          class="control-input input-title check-editor" id="address_contact"
                                          style="height: auto"><?php if (!empty($arr_setting->address_contact)) {
                                        echo $arr_setting->address_contact;
                                    } else {
                                        echo $this->input->post('address_contact');
                                    } ?></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end -->

                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Bản đồ</p>
                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-12">
                                <textarea type="text" name="google_map" rows="3"
                                          class="control-input input-title check-editor" id="google_map"
                                          style="height: auto"><?php if (!empty($arr_setting->google_map)) {
                                        echo $arr_setting->google_map;
                                    } else {
                                        echo $this->input->post('google_map');
                                    } ?></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end -->
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Cấu hình SEO</p>
                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-12">Tiêu đề website</div>
                                    <div class="col-xs-12">
                                        <textarea type="text" name="title" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->title)) {
                                                echo $arr_setting->title;
                                            } else {
                                                echo $this->input->post('title');
                                            } ?></textarea>
                                    </div>
                                </div>

                                <div class="row row-input">
                                    <div class="col-xs-12">Mô tả website (<span class="count-title">0</span>)</div>
                                    <div class="col-xs-12">
                                        <textarea type="text" name="meta_des" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->meta_des)) {
                                                echo $arr_setting->meta_des;
                                            } else {
                                                echo $this->input->post('meta_des');
                                            } ?></textarea>
                                    </div>
                                </div>

                                <div class="row row-input">
                                    <div class="col-xs-12">Từ khoá website</div>
                                    <div class="col-xs-12">
                                        <textarea type="text" name="meta_key" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->meta_key)) {
                                                echo $arr_setting->meta_key;
                                            } else {
                                                echo $this->input->post('meta_key');
                                            } ?></textarea>
                                    </div>
                                </div>
                                <div class="row row-input">
                                    <div class="col-xs-12">Google Analytic</div>
                                    <div class="col-xs-12">
                                        <textarea type="text" name="analytics" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->analytics)) {
                                                echo $arr_setting->analytics;
                                            } else {
                                                echo $this->input->post('analytics');
                                            } ?></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end -->
                        <?php
                        $arr_cate = $GLOBALS['arr_cate'];
                        $arr_obj = '';
                        if (!empty($arr_cate)) {
                            foreach ($arr_cate as $cat) {
                                $arr_obj[$cat->parentid][] = $cat;
                            }
                        }
                        $cate_contact = $this->Common_model->get_one('categories', array('show' => 1, 'taxonomy' => 'cate_article', 'type_categories' => 5), array('id', 'asc'));
                        if (!empty($cate_contact)) {
                            $arr_category = $this->Common_model->get_all_cat($arr_obj, $cate_contact->id, array());
                            $this->db->group_start();
                            foreach ($arr_category as $it) {
                                $this->db->or_like('array_cate', ',' . $it . ',');
                            }
                            $this->db->group_end();
                            $this->db->distinct();
                            $contact = $this->Common_model->get_data('article', array('show' => 1), array('order', 'asc'));
                        }
                        ?>
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Form và POPUP</p>
                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-12">Form</div>
                                    <div class="col-xs-12">
                                        <textarea type="text" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><form accept-charset="utf-8" method="post"
                                                                             class="form-contact1 register-form">
                                        <div class="input-group-wrapper">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Họ và Tên"
                                                       name="name" required=""
                                                       aria-required="true">
                                            </div>
                                            <div class="input-group">
                                                <input name="phone" type="tel" value="" required="" class="form-control"
                                                       placeholder="Số điện thoại" required=""
                                                       data-msg-required="Thông tin bắt buộc"
                                                       data-rule-vnphone="true" aria-required="true">
                                            </div>
                                            <div class="input-group">
                                                <select name="address" required=""
                                                        data-msg-required="Thông tin cần thiết" class="form-control"
                                                        aria-required="true">
                                                    <option value="">Nơi sinh sống</option>
                                                    <?php if (!empty($contact)) {
                                                        foreach ($contact as $con) { ?>
                                                            <option value="<?php echo $con->title; ?>"><?php echo $con->title; ?></option>
                                                        <?php }
                                                    } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <input type="hidden" name="curl" value="">
                                        <button type="submit" class="cool-btn-cta">hoàn tất</button>
                                    </form>
                                    <script>
                                        $(document).ready(function () {
                                            $('.form-contact1').submit(function () {
                                                $.ajax({
                                                    type: "post",
                                                    url: '<?php echo base_url();?>register',
                                                    data: $('.form-contact1').serialize(),
                                                    dataType: 'json',
                                                    success: function (data) {
                                                        $('.form-contact1').html(data.view);
                                                    }
                                                });
                                                return false;
                                            })
                                        })
                                    </script></textarea>
                                    </div>
                                </div>
                                <div class="row row-input">
                                    <div class="col-xs-12">Form liên hệ</div>
                                    <div class="col-xs-12">
                                        <textarea type="text" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto">
                                                    <form accept-charset="utf-8" class="form-contact register-form-1">
                                                        <div class="form-group"><p>Họ tên</p><input class="form-control"
                                                                                                    name="name"
                                                                                                    type="text"
                                                                                                    required></div>
                                                        <div class="form-group"><p>Email</p><input class="form-control"
                                                                                                   name="email"
                                                                                                   type="email" required
                                                                                                   data-msg-required="Thông tin cần thiết"
                                                                                                   data-msg-email="Xin vui lòng nhập email hợp lệ">
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group"><p>Số điện thoại</p><input
                                                                            class="form-control"
                                                                            name="phone"
                                                                            type="tel" required
                                                                            data-rule-vnphone="true">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group"><p>Chọn cơ sở</p><select
                                                                            name="address" required
                                                                            data-msg-required="Thông tin cần thiết"
                                                                            class="form-control">
                                                                        <?php if (!empty($contact)) {
                                                                            foreach ($contact as $obj) { ?>
                                                                                <option value="<?php echo $obj->title; ?>"><?php echo $obj->title; ?></option>
                                                                            <?php } ?>
                                                                        <?php } ?>
                                                                    </select></div>
                                                            </div>
                                                        </div>
                                                        <div class="btn-submit-gr">
                                                            <input type="hidden" name="curl"
                                                                   value="">
                                                            <button type="submit"
                                                                    class="cool-btn-cta">ĐẶT LỊCH HẸN NGAY</button>
                                                            <i>*Chúng tôi sẽ liên hệ trong vòng 24h</i></div>
                                                    </form>
                                                    <script>
                                                        $(document).ready(function () {
                                                            $('.form-contact').submit(function () {
                                                                $.ajax({
                                                                    type: "post",
                                                                    url: '<?php echo base_url();?>register-contact',
                                                                    data: $('.form-contact').serialize(),
                                                                    dataType: 'json',
                                                                    success: function (data) {
                                                                        $('.form-contact').html(data.view);
                                                                    }
                                                                });
                                                                return false;
                                                            })
                                                        })
                                                    </script>
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end -->
                        <div class="row row-input row-margin">
                            <div class="col-option">
                                <div class="option-inner">
                                    Hiện popup
                                    <div class="item-on-off">
                                        <input type="hidden" name="popup" value="0"/>
                                        <input type="checkbox" name="popup"
                                               value="1" <?php if ($arr_setting->popup == 1) {
                                            echo 'checked';
                                        } ?>><label><span></span></label>
                                    </div>
                                </div>
                            </div>
                            <!-- end col-->

                        </div>
                        <!-- end row-->
                    </div>
                    </div>
                </div>
                <!-- end tab content-->
            </div>
            <!-- end col content-->
            <div class="col-xs-10 col-options col-action-bottom text-right">
                <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                <a href="" class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
