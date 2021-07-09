<?php
$title = 'title' . $rear;
$excerpt = 'excerpt' . $rear;
$fulltext = 'fulltext' . $rear;
$address = 'address_contact' . $rear;
?>
<div class="main main-container">
    <div class="uk-container uk-container-center uk-padding-remove">
        <div class="container-right">
            <div class="uk-grid uk-margin-remove">
                <div class="uk-width-small-3-4 uk-width-large-4-5 uk-padding-remove">
                    <div class="container-main uk-pdl0">
                        <?php if (!empty($course)) { ?>
                            <div class="box_mid">
                                <div class="mid-title">
                                    <div class="titleL"><h1><?php echo $course->$title; ?></h1></div>
                                    <div class="titleR"></div>
                                </div>
                                <div class="mid-content">
                                    <form id="formOpening">
                                        <div class="desc">
                                            <div class="uk-grid">
                                                <div class="uk-width-small-1-2">
                                                    <div class="thong-tin-1">
                                                        <div class="thong-tin-user">
                                                            <h2><?php if (!empty($rear)) {
                                                                    echo 'Information student';
                                                                } else {
                                                                    echo 'Thông tin học viên';
                                                                } ?></h2>
                                                            <input type="hidden" name="id_course"
                                                                   value="<?php echo $course->id; ?>">
                                                            <input type="text" name="name"
                                                                   placeholder="<?php if (!empty($rear)) {
                                                                       echo 'Fullname (*)';
                                                                   } else {
                                                                       echo 'Họ tên (*)';
                                                                   } ?>"
                                                                   class="form-text uk-width-1-1"
                                                                   data-validation="required">
                                                            <input type="text" name="day"
                                                                   placeholder="<?php if (!empty($rear)) {
                                                                       echo 'Birthday (*)';
                                                                   } else {
                                                                       echo 'Ngày sinh (*)';
                                                                   } ?>"
                                                                   class="form-text uk-width-1-1"
                                                                   data-validation="required">
                                                            <input type="text" name="phone"
                                                                   placeholder="<?php if (!empty($rear)) {
                                                                       echo 'Phone (*)';
                                                                   } else {
                                                                       echo 'Điện thoại (*)';
                                                                   } ?>"
                                                                   class="form-text uk-width-1-1"
                                                                   data-validation="length alphanumeric"
                                                                   data-validation-length="10-15">
                                                            <input type="text" name="email" placeholder="Email (*)"
                                                                   class="form-text uk-width-1-1"
                                                                   data-validation="required,email">
                                                            <input type="text" name="address"
                                                                   placeholder="<?php if (!empty($rear)) {
                                                                       echo 'Address (*)';
                                                                   } else {
                                                                       echo 'Địa chỉ (*)';
                                                                   } ?>"
                                                                   class="form-text uk-width-1-1"
                                                                   data-validation="required">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="uk-width-small-1-2">
                                                    <div class="thong-tin-2">
                                                        <h2><?php if (!empty($rear)) {
                                                                echo 'Information course';
                                                            } else {
                                                                echo 'Thông tin khóa học';
                                                            } ?></h2>
                                                        <div class="thong-tin-kh1">
                                                            <div class="uk-grid row-course">
                                                                <div class="uk-width-small-1-3">
                                                                    <strong><?php if (!empty($rear)) {
                                                                            echo 'Level:';
                                                                        } else {
                                                                            echo 'Trình độ:';
                                                                        } ?></strong>
                                                                </div>
                                                                <div class="uk-width-small-2-3">
                                                                   <span>
                                                                       <?php echo $course->level; ?>
                                                                   </span>
                                                                </div>
                                                            </div>
                                                            <div class="uk-grid row-course">
                                                                <div class="uk-width-small-1-3">
                                                                    <strong><?php if (!empty($rear)) {
                                                                            echo 'Class:';
                                                                        } else {
                                                                            echo 'Mã lớp:';
                                                                        } ?></strong>
                                                                </div>
                                                                <div class="uk-width-small-2-3">
                                                                   <span>
                                                                       <?php echo $course->code; ?>
                                                                   </span>
                                                                </div>
                                                            </div>
                                                            <div class="uk-grid row-course">
                                                                <div class="uk-width-small-1-3">
                                                                    <strong><?php if (!empty($rear)) {
                                                                            echo 'Time:';
                                                                        } else {
                                                                            echo 'Thời gian:';
                                                                        } ?></strong>
                                                                </div>
                                                                <div class="uk-width-small-2-3">
                                                                   <span>
                                                                       <?php echo $course->time; ?>
                                                                   </span>
                                                                </div>
                                                            </div>
                                                            <div class="uk-grid row-course">
                                                                <div class="uk-width-small-1-3">
                                                                    <strong><?php if (!empty($rear)) {
                                                                            echo 'Opening:';
                                                                        } else {
                                                                            echo 'Khâi giảng:';
                                                                        } ?></strong>
                                                                </div>
                                                                <div class="uk-width-small-2-3">
                                                                   <span>
                                                                       <?php echo $course->open; ?>
                                                                   </span>
                                                                </div>
                                                            </div>
                                                            <div class="uk-grid row-course">
                                                                <div class="uk-width-small-1-3">
                                                                    <strong><?php if (!empty($rear)) {
                                                                            echo 'Tuition:';
                                                                        } else {
                                                                            echo 'Học phí:';
                                                                        } ?></strong>
                                                                </div>
                                                                <div class="uk-width-small-2-3">
                                                                   <span>
                                                                       <?php echo $course->price; ?>
                                                                   </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="noi-quy">
                                                <h2><?php if (!empty($rear)) {
                                                        echo 'Rules students';
                                                    } else {
                                                        echo 'Nội quy học viên';
                                                    } ?></h2>
                                                <div class="overflow-y">
                                                    <?php echo $sett->$address; ?>
                                                </div>
                                                <p class="check-error">
                                                    <input id="check_box"
                                                           name="allow"
                                                           value="1"
                                                           type="checkbox" data-validation="required">
                                                    <label for="check_box"><?php if (!empty($rear)) {
                                                            echo 'I have read and agree to the above terms';
                                                        } else {
                                                            echo 'Tôi đã đọc và đồng ý với các điều khoản trên';
                                                        } ?>
                                                    </label>
                                                </p>
                                            </div>
                                            <p class="btn-button">
                                                <button type="submit"
                                                        class="uk-button uk-button-danger"><?php if (!empty($rear)) {
                                                        echo 'Register';
                                                    } else {
                                                        echo 'Đăng ký';
                                                    } ?></button>
                                                <img class="ajax-loader"
                                                     src="<?php echo base_url(); ?>skin/frontend/images/ajax-loader.gif"
                                                     alt="Đang gửi ..."
                                                >
                                            </p>
                                            <div class="opening-note">

                                            </div>
                                            <h2 class="about-class"><?php echo $course->$title; ?></h2>
                                            <div class="content-about">
                                                <?php echo $course->$fulltext; ?>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        <?php } ?>

                    </div>
                </div>
                <?php echo Modules::run('Right/Module_right/index'); ?>
            </div>
        </div>
    </div>
</div>