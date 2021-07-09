<?php
$permission=array();
if($this->session->userdata('loged')){
    $id=$this->session->userdata('loged');
    $user=$this->Admin_model->getone('users',array('show'=>1,'id'=>$id),array('permission'));
    if(!empty($user)){
        $permission=json_decode($user->permission);
    }
}else{
    redirect(base_url().'manager');
}
?>
<?php if(!empty($contact)){?>
<div class="module-content admin-contact">
    <p class="contact-title"><a href="">Liên hệ chưa xem</a></p>
    <table class="table table-contact">
        <thead>
        <tr>
            <th>STT</th>
            <th>Tên khách hàng</th>
            <th>Nội dung</th>
            <th>Gửi lúc</th>
            <th>Tình trạng</th>
        </tr>
        </thead>
        <tbody>
        <?php
            $i=1;
            foreach($contact as $ct){?>
        <tr>
            <td><?php echo $i;?></td>
            <td><a href="<?php echo base_url().'manager/edit?table=contact&id='.$ct->id;?>" target="_blank"><?php echo $ct->name;?></a></td>
            <td><?php echo $ct->content;?></td>
            <td><?php echo date('d/m/Y H:i',strtotime($ct->date_create));?></td>
            <td>
                <?php if($ct->show==1){?>
                    <a class="folder-open" href="<?php echo base_url(); ?>manager/edit?table=contact&id=<?php echo $ct->id; ?>" data-toggle="tooltip" data-placement="right" title="Liên hệ đã duyệt">
                        <i class="glyphicon glyphicon-folder-open"></i>
                    </a>
                <?php }else{?>
                    <a class="folder-close" href="<?php echo base_url(); ?>manager/edit?table=contact&id=<?php echo $ct->id; ?>" data-toggle="tooltip" data-placement="right" title="Liên hệ chưa duyệt">
                        <i class="glyphicon glyphicon-envelope"></i>
                    </a>
                <?php }?>
            </td>
        </tr>
        <?php $i++; }?>
        </tbody>
    </table>
</div>
<?php }?>
<!-- end admin contact-->
<div class="module-content admin-list">
    <div class="row">
        <div class="col-xs-8">
            <div class="row row-option">
                <div class="col-xs-6 col-list">
                    <p class="title-list"><a href="">Quản lý bài viết</a></p>

                    <div class="row list-option">
                        <div class="col-xs-4 item-option text-center">
                            <a <?php if(Check_per_action('article',$id,1)){ echo 'href="'.base_url().'manager/add?table=article"';}else{echo 'href=""  style="cursor:not-allowed"';}?> ><img src="<?php echo base_url();?>skin/admin/images/icon-add-post.png" alt=""/></a>

                            <p><a <?php if(Check_per_action('article',$id,1)){ echo 'href="'.base_url().'manager/add?table=article"';}else{echo 'href=""  style="cursor:not-allowed"';}?> >Tạo mới</a></p>
                        </div>
                        <div class="col-xs-4 item-option text-center">
                            <a <?php if(Check_per_action('article',$id,5)){ echo 'href="'.base_url().'manager/list?table=article"';}else{echo 'href=""  style="cursor:not-allowed"';}?>><img src="<?php echo base_url();?>skin/admin/images/icon-list-article.png" alt=""/></a>

                            <p><a <?php if(Check_per_action('article',$id,5)){ echo 'href="'.base_url().'manager/list?table=article"';}else{echo 'href=""  style="cursor:not-allowed"';}?>>Danh sách bài viết</a></p>
                        </div>
                        <div class="col-xs-4 item-option text-center">
                            <a <?php if(Check_per_action('categories',$id,5)){ echo 'href="'.base_url().'manager/list?table=categories"';}else{echo 'href=""  style="cursor:not-allowed"';}?>><img src="<?php echo base_url();?>skin/admin/images/icon-file.png" alt=""/></a>
                            <p><a <?php if(Check_per_action('categories',$id,5)){ echo 'href="'.base_url().'manager/list?table=categories"';}else{echo 'href=""  style="cursor:not-allowed"';}?>>Danh mục bài viết</a></p>
                        </div>
                    </div>
                </div>
                <!-- end col-->
                <div class="col-xs-6 col-list">
                    <p class="title-list"><a href="">Chức năng khác</a></p>

                    <div class="row list-option">
                        <div class="col-xs-4 item-option text-center">
                            <a <?php if(Check_per_action('ads',$id,1)){ echo 'href="'.base_url().'manager/list?table=ads"';}else{echo 'href=""  style="cursor:not-allowed"';}?> ><img src="<?php echo base_url();?>skin/admin/images/icon-tv.png" alt=""/></a>
                            <p><a <?php if(Check_per_action('ads',$id,1)){ echo 'href="'.base_url().'manager/list?table=ads"';}else{echo 'href=""  style="cursor:not-allowed"';}?> >Quảng cáo</a></p>
                        </div>
                        <div class="col-xs-4 item-option text-center">
                            <a <?php if(Check_per_action('contact',$id,1)){ echo 'href="'.base_url().'manager/list?table=contact"';}else{echo 'href=""  style="cursor:not-allowed"';}?>><img src="<?php echo base_url();?>skin/admin/images/icon-contact.png" alt=""/></a>
                            <p><a <?php if(Check_per_action('contact',$id,1)){ echo 'href="'.base_url().'manager/list?table=contact"';}else{echo 'href=""  style="cursor:not-allowed"';}?>>Liên hệ</a></p>
                        </div>
                        <div class="col-xs-4 item-option text-center">
                            <a <?php if(Check_per_action('users',$id,5)){ echo 'href="'.base_url().'manager/list?table=users"';}else{echo 'href=""  style="cursor:not-allowed"';}?>><img src="<?php echo base_url();?>skin/admin/images/icon-list-user.png" alt=""/></a>
                            <p><a <?php if(Check_per_action('users',$id,5)){ echo 'href="'.base_url().'manager/list?table=users"';}else{echo 'href=""  style="cursor:not-allowed"';}?>>Thành viên</a></p>
                        </div>
                    </div>
                </div>
                <!-- end col-->
            </div>

            <!-- end row-->
            <div class="row row-option">
                <div class="col-xs-12 col-list">
                    <p class="title-list"><a href="">Hệ thống</a></a></p>

                    <div class="row list-option">
                        <div class="col-xs-2 item-option text-center">
                            <a <?php if(Check_per_action('setting',$id,2)){ echo 'href="'.base_url().'manager/setting?table=setting&language=vi&setup=website"';}else{echo 'href=""  style="cursor:not-allowed"';}?> ><img src="<?php echo base_url();?>skin/admin/images/icon-setup.png" alt=""/></a>
                            <p><a <?php if(Check_per_action('setting',$id,2)){ echo 'href="'.base_url().'manager/setting?table=setting&language=vi&setup=website"';}else{echo 'href=""  style="cursor:not-allowed"';}?>>Cấu hình web</a></p>
                        </div>
                        <div class="col-xs-2 item-option text-center">
                            <a <?php if(Check_per_action('support',$id,1)){ echo 'href="'.base_url().'manager/support?table=support"';}else{echo 'href=""  style="cursor:not-allowed"';}?>><img src="<?php echo base_url();?>skin/admin/images/icon-chat.png" alt=""/></a>

                            <p><a <?php if(Check_per_action('support',$id,1)){ echo 'href="'.base_url().'manager/support?table=support"';}else{echo 'href=""  style="cursor:not-allowed"';}?>>Hỗ trợ trực tuyến</a></p>
                        </div>
                        <div class="col-xs-2 item-option text-center">
                            <a <?php if(Check_per_action('setting',$id,2)){ echo 'href="'.base_url().'manager/setting?table=setting&language=vi&setup=social"';}else{echo 'href=""  style="cursor:not-allowed"';}?>><img src="<?php echo base_url();?>skin/admin/images/icon-social.png" alt=""/></a>
                            <p><a <?php if(Check_per_action('setting',$id,2)){ echo 'href="'.base_url().'manager/setting?table=setting&language=vi&setup=social"';}else{echo 'href=""  style="cursor:not-allowed"';}?>>Mạng xã hội</a></p>
                        </div>
                        <div class="col-xs-2 item-option text-center">
                            <a <?php if(Check_per_action('slide',$id,1)){ echo 'href="'.base_url().'manager/list?table=slide"';}else{echo 'href=""  style="cursor:not-allowed"';}?>><img src="<?php echo base_url();?>skin/admin/images/icon-background.png" alt=""/></a>
                            <p><a <?php if(Check_per_action('slide',$id,1)){ echo 'href="'.base_url().'manager/list?table=slide"';}else{echo 'href=""  style="cursor:not-allowed"';}?>>Slide</a></p>
                        </div>
                        <div class="col-xs-2 item-option text-center">
                            <a <?php if(Check_per_action('setting',$id,2)){ echo 'href="'.base_url().'manager/setting?table=setting&language=vi&setup=address"';}else{echo 'href=""  style="cursor:not-allowed"';}?>><img src="<?php echo base_url();?>skin/admin/images/icon-setup-footer.png" alt=""/></a>
                            <p><a <?php if(Check_per_action('setting',$id,2)){ echo 'href="'.base_url().'manager/setting?table=setting&language=vi&setup=address"';}else{echo 'href=""  style="cursor:not-allowed"';}?>>Cấu hình chân trang</a></p>
                        </div>
                        <div class="col-xs-2 item-option text-center">
                            <a href="" style="cursor: not-allowed;"><img src="<?php echo base_url();?>skin/admin/images/icon-search.png" alt=""/></a>
                            <p><a href="" style="cursor: not-allowed;">Từ khóa tìm kiếm</a></p>
                        </div>
                    </div>
                </div>
                <!-- end col-->
            </div>
            <!-- end row-->
        </div>
    </div>
</div>
<!-- end admin list-->
<?php if(!empty($backlink)){?>
<div class="module-content admin-seo">
    <p class="contact-title"><a href="">Thống kê backlink</a></p>
    <table class="table table-contact">
        <thead>
        <tr>
            <th>STT</th>
            <th>Website</th>
            <th>Link</th>
            <th>Thời gian</th>
            <th>IP Address</th>
        </tr>
        </thead>
        <tbody>
        <?php $i=1; foreach($backlink as $bl){?>
        <tr>
            <td><?php echo $i;?></td>
            <td><span><?php echo $bl->title;?></span></td>
            <td><?php echo $bl->link;?></td>
            <td><?php echo $this->Admin_model->time_ago(strtotime($bl->date_create));?></td>
            <td><?php echo $bl->ip;?></td>
        </tr>
        <?php $i++; }?>
        </tbody>
    </table>
</div>
<!-- end admin contact-->
<?php }?>
<div class="module-content admin-system">
    <p class="title-counter-sys">Thống kê toàn hệ thống</p>

    <div class="counter-sys-content">
        <div class="col-xs-2 col-sys">
            <div class="col-sys-inner">
                <div class="system-name">
                    <p class="sys-title">Chuyên mục</p>

                    <p class="sys-number"><?php echo $this->Admin_model->get_number('categories');?></p>
                </div>
                <img src="<?php echo base_url();?>skin/admin/images/icon-file.png" alt=""/>
            </div>
        </div>
        <!-- end col-->
        <div class="col-xs-2 col-sys">
            <div class="col-sys-inner">
                <div class="system-name">
                    <p class="sys-title">Bài viết</p>

                    <p class="sys-number"><?php echo $this->Admin_model->get_number('article');?></p>
                </div>
                <img src="<?php echo base_url();?>skin/admin/images/icon-list-article.png" alt=""/>
            </div>
        </div>
        <!-- end col-->
        <div class="col-xs-2 col-sys">
            <div class="col-sys-inner">
                <div class="system-name">
                    <p class="sys-title">Đơn hàng</p>

                    <p class="sys-number"><a style="color:#ff0000;font-weight: bold; font-size: 20px" href="<?php echo base_url('manager/list?table=order');?>"> <span class="glyphicon glyphicon-shopping-cart"></span> (<?php $order = $this->Admin_model->get_total('order',array('show'=>0)); if(!empty($order)){echo $order;}else{echo '0';}?>)</a></p>
                </div>
                <img src="<?php echo base_url();?>skin/admin/images/icon-tv.png" alt=""/>
            </div>
        </div>
        <!-- end col-->

        <div class="col-xs-2 col-sys">
            <div class="col-sys-inner">
                <div class="system-name">
                    <p class="sys-title">Slide</p>

                    <p class="sys-number"><?php echo $this->Admin_model->get_number('slide');?></p>
                </div>
                <img src="<?php echo base_url();?>skin/admin/images/icon-comment.png" alt=""/>
            </div>
        </div>
        <!-- end col-->
        <div class="col-xs-2 col-sys">
            <div class="col-sys-inner">
                <div class="system-name">
                    <p class="sys-title">Liên hệ</p>

                    <p class="sys-number"><?php echo $this->Admin_model->get_number('contact');?></p>
                </div>
                <img src="<?php echo base_url();?>skin/admin/images/icon-contact.png" alt=""/>
            </div>
        </div>
        <!-- end col-->
        <div class="col-xs-2 col-sys">
            <div class="col-sys-inner">
                <div class="system-name">
                    <p class="sys-title">Thành viên</p>

                    <p class="sys-number"><?php echo $this->Admin_model->get_number('users');?></p>
                </div>
                <img src="<?php echo base_url();?>skin/admin/images/icon-list-user.png" alt=""/>
            </div>
        </div>
        <!-- end col-->
    </div>
</div>
