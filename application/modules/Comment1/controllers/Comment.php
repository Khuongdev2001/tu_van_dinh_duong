<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Comment extends MX_Controller
{
    public $setting = '';

    public function __construct()
    {
        parent::__construct();
        if ($_SESSION['rear'] == '_en') {
            $this->lang->load('atta_lang', 'en');
        } else {
            $this->lang->load('atta_lang', 'vn');
        }
    }

    public function index($pro)
    {
        if(!empty($pro)){
            $data['pro'] =$pro;
            $data['comment'] = $this->Common_model->get_data('comment', array('show' => 1,'type'=>2,'parentid'=>0, 'idpost' => $pro->id),array('id','desc'));
            $data['total_comment'] = $this->Common_model->get_total('comment', array('show' => 1,'type'=>2, 'idpost' => $pro->id));
            return $this->load->view('Comment1/Comment_index', $data);
        }

    }
    function comment_post(){
        if(!empty($_POST['idpost'])){

            if(empty($_COOKIE['comment_poll']) || !empty($_COOKIE['comment_poll']) && $_COOKIE['comment_poll'] != $_POST['email']){
                $this->Common_model->insert_data('comment',$_POST);
                setcookie('comment_poll',$_POST['email'],time()+20);
                $output = array('mess' => '1', 'views' => rear('success_comment'));
                $output = json_encode($output);
                echo $output;
            }else{
                $output = array('mess' => '2', 'views' => rear('err_comment'));
                $output = json_encode($output);
                echo $output;
            }

        }else{
            $output = array('mess' => '2', 'views' =>rear('err_comment'));
            $output = json_encode($output);
            echo $output;
        }
    }
    function add_rep_parent(){
        if(!empty($_POST)){
            $data['idpost'] = $_POST['idpost'];
            $data['idcom'] = $_POST['id'];
            $data['com_rep'] = $this->Common_model->get_one('comment',array('id'=>$_POST['id'],'type'=>2));
            $output = array('mess' => '1', 'views' => $this->load->view('Comment1/Comment_rep',$data,true));
            $output = json_encode($output);
            echo $output;
        }

    }
    function sub_comment($sub,$pro){
        if(!empty($sub)){
            $data['pro'] = $pro;
            $data['pa_sub'] = $sub;
            $data['comment_sub'] = $this->Common_model->get_data('comment', array('show' => 1,'type'=>2, 'parentid' => $sub->id),array('id','desc'));
            return $this->load->view('Comment/Comment_sub', $data);
        }

    }
    function sub_comment1($sub,$pro){
        if(!empty($sub)){
            $data['pro'] = $pro;
            $data['pa_sub'] = $sub;
            $data['comment_sub'] = $this->Common_model->get_data('comment', array('show' => 1,'type'=>2, 'parentid' => $sub->id),array('id','desc'));
            return $this->load->view('Comment1/Comment_sub1', $data);
        }

    }
}
