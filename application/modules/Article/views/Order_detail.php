<?php if(!empty($order)){ ?>
<div class="module-order">

    <div class="row">
<!--        <div class="col-xl-6">-->
<!--            <div class="billing-order">-->
<!--                <p>Order ID(--><?php //echo $order->title;?><!--)</p>-->
<!--                <p>Fullname: --><?php //echo $order->name;?><!--</p>-->
<!--                <p>Phone:--><?php //echo $order->phone;?><!--</p>-->
<!--                <p>Email:--><?php //echo $order->email;?><!--</p>-->
<!--                <p>Address:--><?php //echo $order->address;?><!--</p>-->
<!--                <p>Company Name:--><?php //echo $order->company;?><!--</p>-->
<!--            </div>-->
<!--            <ul class="list-group">-->
<!--                <li class="list-group-item list-group-item-danger">Total Amount : --><?php //echo $order->total ;?><!-- VNĐ</li>-->
<!--            </ul>-->
<!--        </div>-->
        <div class="col-xl-12">
            <div class="alert alert-danger text-xl-center" role="alert">
                BILLING INFORMATION
            </div>
            <ul class="list-group">
                <li class="list-group-item list-group-item-success">Company name: <?php echo $order->company ;?></li>
                <li class="list-group-item list-group-item-info">Email:<?php echo $order->email ;?></li>
                <li class="list-group-item list-group-item-warning">Contact Number:<?php echo $order->phone ;?></li>
                <li class="list-group-item list-group-item-danger">Address:<?php echo $order->address ;?></li>
                <li class="list-group-item list-group-item-success">Amount VND : <?php echo $order->total ;?> </li>
                <li class="list-group-item list-group-item-warning">Description:<?php echo $order->content ;?></li>
            </ul>
        </div>
        <div class="col-xl-6">
            <ul class="list-group">

            </ul>
        </div>
        <?php if($order->type_money != 3){ ?>
            <div class="col-12 pay-now">
                <a class="btn btn-success" href="<?php echo $link['data'];?>">Pay now</a>
            </div>
        <?php } else{?>
            <div class="alert alert-success text-xl-center" role="alert">
                Paid
            </div>
        <?php } ?>
    </div>
</div>
<?php } ?>
