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
<div class="main main-menu">
    <div class="container">
        <ul>
            <li class="item-menu"><a onclick="count_visit('home','<?php echo base_url();?>manager');"  class="cusor-ponter <?php if (empty($_GET['table'])) {
                        echo 'active';
                } ?>">Home</a></li>
            <?php if(Check_per_table('categories',$id)){?>
                <li class="item-menu">
                    <a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'categories') {
                            echo 'active';
                        }
                    } ?>"
                       onclick="count_visit('categories','<?php echo base_url(); ?>manager/list?table=categories');"
                    >Quản lý menu</a>
                    <ul class="sub-menu">
                        <?php if(Check_per_action('categories',$id,1)){?>
                            <li><a class="cusor-ponter ajax-list " href="<?php echo base_url(); ?>manager/add?table=categories">Thêm menu</a></li>
                        <?php }?>
                    </ul>
                </li>
            <?php }?>
            <?php if(Check_per_table('article',$id)){?>
            <li class="item-menu">
                <a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                    if ($this->input->get('table') == 'article') {
                        echo 'active';
                    }
                } ?>"
                 onclick="count_visit('article','<?php echo base_url(); ?>manager/list?table=article');" >Bài viết</a>
                <ul class="sub-menu">
                    <?php if(Check_per_action('article',$id,1)){?>
                    <li><a class="cusor-ponter ajax-list " href="<?php echo base_url(); ?>manager/add?table=article">Thêm
                            bài viết</a></li>
                    <?php }?>
                </ul>
            </li>
            <?php }?>
            <?php if(Check_per_table('product',$id)){?>
                <li class="item-menu">
                    <a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'product') {
                            echo 'active';
                        }
                    } ?>"
                       onclick="count_visit('article','<?php echo base_url(); ?>manager/list?table=product');" >Sản phẩm</a>
                    <ul class="sub-menu">
                        <?php if(Check_per_action('product',$id,1)){?>
                            <li><a class="cusor-ponter ajax-list " href="<?php echo base_url(); ?>manager/add?table=product">Thêm
                                    Sản phẩm</a></li>
                        <?php }?>
                    </ul>
                </li>
            <?php }?>
            <?php if(Check_per_table('order',$id)){?>
                <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'order') {
                            echo 'active';
                        }
                    } ?>"
                                         onclick="count_visit('order','<?php echo base_url(); ?>manager/list?table=order');"
                    >Đơn hàng (<?php $order = $this->Admin_model->get_total('order',array('show'=>0)); if(!empty($order)){echo $order;}else{echo '0';}?>)</a>
                </li>
            <?php }?>
            <?php if(Check_per_table('slide',$id)){?>
                <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'slide') {
                            echo 'active';
                        }
                    } ?>"
                                         onclick="count_visit('slide','<?php echo base_url(); ?>manager/list?table=slide');"
                    >Slideshow</a>
                </li>
            <?php }?>
            <?php if(Check_per_table('ads',$id)){?>
                <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'ads') {
                            echo 'active';
                        }
                    } ?>"
                                         onclick="count_visit('ads','<?php echo base_url(); ?>manager/list?table=ads');"
                    >Ảnh và video</a>

                </li>
            <?php }?>

            <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                    if ($this->input->get('table') == 'users') {
                        echo 'active';
                    }
                } ?>"
                                     onclick="count_visit('users','<?php echo base_url(); ?>manager/list?table=users');"
                >Thành viên</a>
                <ul class="sub-menu">
                    <li><a class="cusor-ponter ajax-list" href="<?php echo base_url(); ?>manager/add?table=users">Thêm
                            thành viên</a></li>
                </ul>
            </li>
            <?php if(Check_per_table('contact',$id)){?>
                <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'contact') {
                            echo 'active';
                        }
                    } ?>"
                                         onclick="count_visit('contact','<?php echo base_url(); ?>manager/list?table=contact');"
                    >Liên hệ</a>
                </li>
            <?php }?>
            <?php if(Check_per_table('comment',$id)){?>
                <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'comment') {
                            echo 'active';
                        }
                    } ?>"
                                         onclick="count_visit('comment','<?php echo base_url(); ?>manager/list?table=comment');"
                    >Bình luận</a>
                </li>
            <?php }?>
            <?php if(Check_per_table('email',$id)){?>
                <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'email') {
                            echo 'active';
                        }
                    } ?>"
                                         onclick="count_visit('email','<?php echo base_url(); ?>manager/list?table=email');"
                    >Email</a>
                </li>
            <?php }?>

            <?php if(Check_per_table('setting',$id)){?>
                <li class="item-menu">
                    <a href="<?php echo base_url(); ?>manager/setting?table=setting" class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'setting') {
                            echo 'active';
                        }
                    } ?>" >Quản trị hệ thống</a>
                    <ul class="sub-menu">
                        <li><a class="cusor-ponter ajax-list " href="<?php echo base_url(); ?>manager/library">Quản lý thư viện ảnh</a></li>
                        <?php if(Check_per_table('history',$id)){?>
                            <li><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                                    if ($this->input->get('table') == 'history') {
                                        echo 'active';
                                    }
                                } ?>"
                                                     onclick="count_visit('email','<?php echo base_url(); ?>manager/list?table=history');"
                                >Lịch sử</a>
                            </li>
                        <?php }?>
                    </ul>
                </li>
            <?php }?>
        </ul>
    </div>
</div>