<?php
    if (!empty($post_all)) {
        $i = 1;
            ?>
            <div class="item-group-category">
                <label>Cấp <?php echo $i; ?></label>
                <select name="<?php echo $name; ?>[]" class="select-group cate-group" size="5"
                        data-level="<?php echo $i; ?>">
                    <?php if (!empty($post_all)) {
                        foreach ($post_all as $cat) { ?>
                            <option value="<?php echo $cat->id; ?>" ><?php echo $cat->title; ?></option>
                        <?php }
                    } ?>
                </select>
            </div>
            <?php $i++;
    }
?>


