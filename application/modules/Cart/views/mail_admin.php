
<?php $content = str_replace('%name%',$post_item['name'],$sett->email_sent);
$content = str_replace('%email%',$post_item['email'],$content);
$content = str_replace('%phone%',$post_item['phone'],$content);
$content = str_replace('%address%',$post_item['address'],$content);
$content = str_replace('%content%',$post_item['content'],$content);
echo $content;
?>
<?php if (!empty($order_detail)) { ?>
    <table class="table">
        <caption>Thông tin sản phẩm.</caption>
        <thead>
        <tr>
            <th>Hình ảnh</th>
            <th>Tên</th>
            <th>Gía</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($order_detail as $idp) {
            $article = $this->Common_model->get_one('product', array('id' => $idp->id_sp));
            if (!empty($article)) {
                ?>
                <tr>
                    <th scope="row"><img style="width: 70px" src="<?php echo $article->image; ?>" alt=""></th>
                    <td><?php echo $article->title; ?></td>
                    <td><?php echo $idp->price; ?></td>
                    <td><?php echo $idp->qty; ?></td>
                    <td><?php echo VndDot($idp->price * $idp->qty); ?> VNĐ</td>
                </tr>
            <?php }
        } ?>
        </tbody>
    </table>
<?php } ?>