<section class="body-content">
    <div class="container">
        <div class="post-page">
            <div class="content-post-info-user">
                <div class="pay">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="title-head-login">
                                <a><?php echo rear('info_account'); ?></a>
                            </h1>
                            <div class="user-cart">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="list-group">
                                            <ul>
<!--                                                <li class="list-group-item">-->
<!--                                                    <a href="--><?php //echo base_url() . rear('edit_account_link'); ?><!--"><i-->
<!--                                                                class="fa fa-pencil"></i> --><?php //echo rear('edit_account'); ?>
<!--                                                    </a>-->
<!--                                                </li>-->
<!--                                                <li class="list-group-item">-->
<!--                                                    <a href="--><?php //echo base_url() . rear('account_change_pass_alias'); ?><!--"><i-->
<!--                                                                class="fa fa-key"></i> --><?php //echo rear('account_change_pass'); ?>
<!--                                                    </a>-->
<!--                                                </li>-->
                                                <li class="list-group-item">
                                                    <a href="<?php echo base_url() . rear('logout_link'); ?>"><i
                                                                class="fa fa-sign-out"></i> <?php echo rear('account_logout'); ?>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <?php if (!empty($cus)) { ?>
                                            <ul class="list-group">
                                                <li class="list-group-item list-group-item-info"><?php echo rear('office_name') . ': ' . $cus->fullname; ?></li>
                                                <li class="list-group-item list-group-item-info"><?php echo rear('office_phone') . ': ' . $cus->phone; ?></li>
                                                <li class="list-group-item list-group-item-info"><?php echo rear('office_email') . ': ' . $cus->email; ?></li>
                                                <li class="list-group-item list-group-item-info"><?php echo rear('office_address') . ': ' . $cus->address; ?></li>
                                            </ul>
                                        <?php } ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<style>
    .form-error {
        display: none;
    }

</style>