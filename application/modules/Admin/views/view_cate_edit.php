<?php if (!empty($post_one)) {
    $i = 1;
    if (!empty($post_array)) {
        foreach ($post_array as $ps) {
            ?>
            <div class="item-group-category">
                <label>Cấp <?php echo $i; ?></label>
                <select name="<?php echo $name; ?>[]" class="select-group cate-group" data-post="<?php echo $post_one->id ;?>" size="5"
                        data-level="<?php echo $i; ?>">
                    <?php if (!empty($arr_child[$ps->parentid])) {
                        foreach ($arr_child[$ps->parentid] as $cat) {
                            if($cat->id!=$post_one->id){
                            ?>
                            <option value="<?php echo $cat->id; ?>" <?php if ($cat->id == $ps->id ) {
                                echo 'selected="selected"';
                            } ?>><?php echo $cat->title; ?></option>
                        <?php } }
                    } ?>
                </select>
            </div>
            <?php $i++;
        }
    }else{?>
        <?php if (!empty($post_child)) {
        ?>
        <div class="item-group-category">
            <label>Cấp <?php echo $i; ?></label>
            <select name="<?php echo $name; ?>[]" class="select-group cate-group"  data-post="<?php echo $post_one->id ;?>" size="5"
                    data-level="<?php echo $i; ?>">
                <?php foreach ($post_child as $po) {
                if($po->id!=$post_one->id){
                    ?>
                    <option  value="<?php echo $po->id; ?>"><?php echo $po->title; ?></option>
                <?php } }?>
            </select>
        </div>
    <?php }
    }
} ?>


