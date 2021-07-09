<?php
$vnp_TmnCode =$GLOBALS['supp']->vnpay_account; //Mã website tại VNPAY
$vnp_HashSecret = $GLOBALS['supp']->vnpay_serect; //Chuỗi bí mật
$vnp_Url = $GLOBALS['supp']->vnpay_url;
$vnp_Returnurl = base_url()."payment-now";
$vnp_SecureHash = $_GET['vnp_SecureHash'];
$inputData = array();
foreach ($_GET as $key => $value) {
    if (substr($key, 0, 4) == "vnp_") {
        $inputData[$key] = $value;
    }
}
unset($inputData['vnp_SecureHashType']);
unset($inputData['vnp_SecureHash']);
ksort($inputData);
$i = 0;
$hashData = "";
foreach ($inputData as $key => $value) {
    if ($i == 1) {
        $hashData = $hashData . '&' . $key . "=" . $value;
    } else {
        $hashData = $hashData . $key . "=" . $value;
        $i = 1;
    }
}

$secureHash = md5($vnp_HashSecret . $hashData);
if (!empty($_GET)) {
    ?>
    <div class="body-content">
        <div class="container">
            <div class="main-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>"><i
                                    class="fa fa-home"></i> Home</a></li>

                    <li class="breadcrumb-item">
                        <a>
                            Confirm Order
                        </a>
                    </li>

                </ol>
            </div>
            <div class="module-order">
                <div class="alert alert-danger text-xl-center" role="alert">
                    <?php echo $Message;?>
                </div>
                <?php if($RspCode == '00'){ ?>
                <div class="row">
                    <div class="col-xl-6">
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-success">Order
                                ID: <?php echo $_GET['vnp_TxnRef']; ?></li>
                            <li class="list-group-item list-group-item-info">
                                Money:<?php echo VndDot($_GET['vnp_Amount']/100);?> vnđ</li>
                            <li class="list-group-item list-group-item-warning">Code
                                response:<?php echo $_GET['vnp_ResponseCode'] ;?></li>
                            <li class="list-group-item list-group-item-danger">Trading
                                code:<?php echo $_GET['vnp_TransactionNo']; ?></li>
                        </ul>
                    </div>
                    <div class="col-xl-6">
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-success">Bank
                                code:<?php echo $_GET['vnp_BankCode']; ?></li>
                            <li class="list-group-item list-group-item-info">Payment
                                time:<?php echo $_GET['vnp_PayDate'] ;?></li>
                            <li class="list-group-item list-group-item-warning">
                                Content:<?php echo $_GET['vnp_OrderInfo']; ?></li>
                            <li class="list-group-item list-group-item-danger">Result: <?php
                                if ($secureHash == $vnp_SecureHash) {
                                    if ($_GET['vnp_ResponseCode'] == '00') {
                                        echo "Successful transaction";
                                    } else {
                                        echo "Transaction failed";
                                    }
                                } else {
                                    echo "Invalid signature";
                                }
                                ?></li>

                        </ul>
                    </div>

                    <div class="col-12 pay-now">
                        <a class="btn btn-success" href="<?php echo base_url(); ?>">Back Home</a>
                    </div>

                </div>
                <?php } ?>
            </div>
        </div>
    </div>
<?php } ?>
