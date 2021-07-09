<div class="note-buy">
    <div class="modal-success">
        <p class="note-suc">Bạn vừa đặt hàng thành công sản phẩm</p>
        <p class="note-suc">Chúng tôi sẽ liên hệ sớm nhất với bạn có thể.</p>
        <div class="box_time">
            <span class="title_clock">Tự động chuyển về trang chủ sau: </span>
            <input id="input_itme" type="text" size="10" name="d2">
            <span class="title_clock"> Giây</span>
        </div>
    </div>
    <script>
        var seconds = 10;
        document.getElementById("input_itme").value = 10;
        function display() {
            if (seconds <= 0) {
                seconds = 0;
                window.location.href = "<?php echo base_url();?>";
            }
            else
                seconds -= 1;
            document.getElementById("input_itme").value = seconds;
            setTimeout("display()", 1000);
        }
        display();
    </script>
</div>