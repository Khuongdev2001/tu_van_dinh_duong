<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Comment extends MX_Controller
{
    public $setting = '';

    public function __construct()
    {
        parent::__construct();

            $this->lang->load('atta_lang', 'vn');

    }

    public function index($pro)
    {
        if(!empty($pro)){
            $data['pro'] =$pro;
            $data['comment'] = $this->Common_model->get_data('comment', array('show' => 1,'type'=>1,'parentid'=>0, 'idpost' => $pro->id),array('id','desc'));
            $data['total_comment'] = $this->Common_model->get_total('comment', array('show' => 1,'type'=>1, 'idpost' => $pro->id));
            return $this->load->view('Comment/Comment_index', $data);
        }

    }
    function comment_post(){
        if(!empty($_POST['idpost'])){

            if(empty($_COOKIE['comment_pri']) || !empty($_COOKIE['comment_pri']) && $_COOKIE['comment_pri'] != $_POST['idpost']){
                $this->Common_model->insert_data('comment',$_POST);
                setcookie('comment_pri',$_POST['idpost'],time()+3600);
                $output = array('mess' => '1', 'views' => '<p class="alert alert-success">Bạn đã gửi bình luận thành công</p>');
                $output = json_encode($output);
                echo $output;
            }else{
                $output = array('mess' => '2', 'views' => '<p class="alert alert-danger">Bạn vừa bình luận sản phẩm này trước đó. Vui lòng bình luận lại sau 1h.</p>');
                $output = json_encode($output);
                echo $output;
            }

        }else{
            $output = array('mess' => '2', 'views' =>'<p class="alert alert-danger">Đã có lỗi xả ra. Vui lòng bình luận lại.</p>');
            $output = json_encode($output);
            echo $output;
        }
    }
    function add_rep_parent(){
        if(!empty($_POST)){
            $data['idpost'] = $_POST['idpost'];
            $data['idcom'] = $_POST['id'];
            $data['com_rep'] = $this->Common_model->get_one('comment',array('id'=>$_POST['id']));
            $output = array('mess' => '1', 'views' => $this->load->view('Comment/Comment_rep',$data,true));
            $output = json_encode($output);
            echo $output;
        }

    }
    function sub_comment($sub,$pro){
        if(!empty($sub)){
            $data['pro'] = $pro;
            $data['pa_sub'] = $sub;
            $data['comment_sub'] = $this->Common_model->get_data('comment', array('show' => 1, 'parentid' => $sub->id),array('id','desc'));
            return $this->load->view('Comment/Comment_sub', $data);
        }

    }
    function sub_comment1($sub,$pro){
        if(!empty($sub)){
            $data['pro'] = $pro;
            $data['pa_sub'] = $sub;
            $data['comment_sub'] = $this->Common_model->get_data('comment', array('show' => 1, 'parentid' => $sub->id),array('id','desc'));
            return $this->load->view('Comment/Comment_sub1', $data);
        }

    }
}
