<?php if (!empty($comment_sub)) { ?>
    <div class="wap-comment-pr-sup">
        <?php foreach ($comment_sub as $sub) { ?>
            <div class="item-sub-pri" id="comment-user-<?php echo $sub->id; ?>">
                <div class="row">
                    <div class="col-sm-12">
                        <p class="full_content">
                            <span class="avatar-user">
                                <span class="fa fa-user"></span>
                            </span>
                            <span class="nickname txt_666 hover" title=""
                                  href="javascript:;"><?php echo $sub->name; ?></span> <span
                                    class="bought"
                                    style="font-weight:normal;font-style:italic;color:#999;font-size:95%"></span>
                            <span class="ount-comment"></span>
                            <span class="content"><?php echo $sub->comment; ?></span>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <p class="date-comment">
                            <i class="fa fa-clock-o"></i> <?php echo date('H:i , d/m/Y', strtotime($sub->date_create)); ?>
                        </p>
                    </div>
                    <div class="col-6">
                        <p class="action-add-rep" style="text-align: right">
                            <span class="btn-rep-sub" data-com="<?php echo $sub->id; ?>"
                                  data-post="<?php echo $pro->id; ?>">
                                <i class="fa fa-reply"></i> Trả lời
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <?php echo Modules::run('Comment/Comment/sub_comment1',$sub,$pro);?>
        <?php } ?>
    </div>
<?php } ?>