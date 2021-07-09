<?php if (!empty($cate_all)) {
    $i = 1;
    ?>
    <div class="item-group-category">
        <label>Cấp 1</label>
        <select name="category[]" class="select-group cate-group" size="5" data-level="1">
            <?php foreach ($cate_all as $obj) { ?>
                <option <?php if($i==1){echo 'selected';}?> value="<?php echo $obj->id; ?>"><?php echo $obj->title; ?></option>
                <?php $i++;
            } ?>
        </select>
    </div>
<?php } ?>