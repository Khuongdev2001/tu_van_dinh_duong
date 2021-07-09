<?php if(!empty($supp)){?>
    <div class="main main-support support-page">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 text-center">
                    <p>
                        <img class="img-default"
                             src="<?php echo base_url(); ?>skin/frontend/images/arrow-247.png"
                             alt="<?php echo $supp->time_support; ?>">

                        <img class="img-hover"
                             src="<?php echo base_url(); ?>skin/frontend/images/arrow-247-hover.png"
                             alt="<?php echo $supp->time_support; ?>">
                    </p>
                    <p><?php echo $supp->time_support ;?></p>
                </div>
                <div class="col-sm-4 text-center">
                    <p><img class="img-default" src="<?php echo base_url(); ?>skin/frontend/images/arrow-phone.png"
                            alt="<?php echo $supp->phone; ?>">
                        <img class="img-hover" src="<?php echo base_url(); ?>skin/frontend/images/arrow-phone-hover.png"
                             alt="<?php echo $supp->phone; ?>"></p>
                    <p><?php echo $supp->phone ;?></p>
                </div>
                <div class="col-sm-4 text-center">
                    <p><img class="img-default" src="<?php echo base_url(); ?>skin/frontend/images/arrow-email.png"
                            alt="<?php echo $supp->email; ?>">
                        <img class="img-hover" src="<?php echo base_url(); ?>skin/frontend/images/arrow-email-hover.png"
                             alt="<?php echo $supp->email; ?>"></p>
                    <p><?php echo $supp->email ;?></p>
                </div>

            </div>
        </div>
    </div>
<?php }?>