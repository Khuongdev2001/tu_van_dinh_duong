<?php if (!empty($ads_left)) { ?>
    <div class="ads-left hidden-xs">
        <img src="<?php echo $ads_left->image; ?>" alt="<?php echo $ads_left->title; ?>">
    </div>
<?php } ?>
<?php if (!empty($ads_right)) { ?>
    <div class="ads-right hidden-xs">
        <img src="<?php echo $ads_right->image; ?>" alt="<?php echo $ads_right->title; ?>">
    </div>
<?php } ?>