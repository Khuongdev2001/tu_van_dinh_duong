<?php if (!empty($obj_cate)) {
//    if (!empty($id_post)) {
    ?>
    <div class="item-group-category">
        <label>Cấp <?php echo $level; ?></label>
        <select name="<?php echo $name; ?>" class="select-group cate-group" data-post="<?php echo $id_post;?>" size="5"
                data-level="<?php echo $level; ?>">
            <?php foreach ($obj_cate as $obj) {
                if ($obj->id != $id_post) {
                    ?>
                    <option  value="<?php echo $obj->id; ?>"><?php echo $obj->title; ?></option>
                <?php }
            } ?>
        </select>
    </div>
<?php } ?>