<div class="body-content">
    <div class="container">
        <link href="<?php echo base_url();?>skin/frontend/css/bootstrap-datepicker.min.css" rel="stylesheet"/>
        <script src="<?php echo base_url();?>skin/frontend/js/bootstrap-datepicker.min.js" ></script>
        <div class="main-breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>"><i
                            class="fa fa-home"></i> Home</a></li>

                <li class="breadcrumb-item">
                    <a>
                        Payments
                    </a>
                </li>

            </ol>
        </div>
        <div class="row justify-content-center">
            <div class="col-sm-9">
                <form id="form-payment">
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Enter the invoice code</label>
                        <div class="col-sm-5">
                            <input class="form-control" type="text" value="" name="key_order" data-validation="required">
                        </div>
                        <div class="col-sm-3">
                            <button class="btn btn-success btn-cursor" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

