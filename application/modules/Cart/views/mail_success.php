<p> Thân gửi bạn <span style="font-size: 15px; font-weight: bold"><?php echo $post_item['name']; ?></span></p>
<p> Cảm ơn bạn đã mua sắm tại website <a href="<?php echo base_url();?>">Chúng tôi</a></p>
<p> Đơn hàng của bạn hiện đã được tiếp nhận và đang trong quá trình xử lý.</p>
<p> Hàng sẽ được giao đến địa chỉ nhận trong thời gian sớm nhất.</p>
<p> Trong quá trình mua hàng và sử dụng sản phẩm của công ty, nếu có bất cứ thắc</p>
<p> mắc hay góp ý gì, bạn vui lòng gọi điện tới số hotline <?php echo $GLOBALS['supp']->phone ;?> </p>
<p> trong giờ hành chính để được tư vấn.</p>
<p> Hy vọng bạn cảm thấy hài lòng với các sản phẩm của chúng tôi. Hẹn sớm gặp lại bạn!</p>
<p> Họ và tên: <?php echo $post_item['name']; ?></p>
<p> Email: <?php echo $post_item['email']; ?></p>
<p> Điện thoại: <?php echo $post_item['phone']; ?></p>
<p> Nội dung: <?php echo $post_item['content']; ?></p>
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