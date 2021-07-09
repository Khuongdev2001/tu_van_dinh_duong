<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends MX_Controller
{
    private $tb_setting = 'setting';
    private $tb_users = 'users';
    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
//        if($this->session->userdata('loged'))
    }
    public function index()
    {
        $user = $this->session->userdata('loged');
        $object_user = $this->Admin_model->get_one('users', array('id' => $user));
        if ($object_user != '') {
            $data['contact']=$this->Admin_model->get_data('contact',array('show'=>0),array('id','DESC'),5);
            $data['backlink']=$this->Admin_model->get_data('backlinks',array(),array('id','DESC'),10);
            $data['page'] = $this->load->view('Admin/view_dashboard.php', $data, true);
            $this->load->view('Admin/index.php', $data);
        } else {
            redirect(base_url() . 'manager');
        }
    }
    public function check_permission()
    {
        $user = $this->session->userdata('loged');
        $object_user = $this->Admin_model->get_one('users', array('id' => $user));
        if(!empty($object_user)) {
            $action = $this->uri->segment(2);
            $table = $this->input->get('table');
            switch ($action) {
                case 'list':
                    $data['page'] =  Modules::run('Admin/lists/index');
                    break;
                case 'edit':
                    $data['page'] = Modules::run('Admin/edit/index');
                    break;
                case 'add':
                    $data['page'] = Modules::run('Admin/add/index');
                    break;
                case 'support':
                    $data['page'] = Modules::run('Admin/support/index');
                    break;
                case 'setting':
                    $data['page'] = Modules::run('Admin/setting/index');
                    break;
                default:
            }
            $this->load->view('Admin/index.php', $data);
        }else{
            redirect(base_url().'manager');
        }
    }
    function notice(){
        $data['notice']='<p class="notice_per"><span class="glyphicon glyphicon-ban-circle"></span>Bạn không có quyền truy cập chức năng này</p>';
        $data['page']=$this->load->view('Admin/notice', $data,true);
        $this->load->view('index',$data);

    }
    function library(){
        $data['page']=$this->load->view('Admin/library', '',true);
        $this->load->view('index',$data);
    }
    public function get_cate(){
        $valuexo = $this->input->post('valuexo');
        $data['level']=  $this->input->post('level') + 1;
        $data['name']=  $this->input->post('name');
        $data['id_post']=  $this->input->post('id_post');
        $data['obj_cate'] ='';
        if(!empty($valuexo)){
            $data['obj_cate'] = $this->Admin_model->get_data('categories',array('show'=>1,'taxonomy'=>$valuexo,'parentid'=>0),array('id','asc'),'',array('id','title'));
        }
        $this->load->view('Admin/view_categories.php', $data);
    }
    public function get_child(){
        $valuexo = $this->input->post('valuexo');
        $data['level']=  $this->input->post('level') + 1;
        $data['name']=  $this->input->post('name');
        $data['id_post']=  $this->input->post('id_post');
        $data['obj_cate'] ='';
        if(!empty($valuexo)){
            $data['obj_cate'] = $this->Admin_model->get_data('categories',array('show'=>1,'parentid'=>$valuexo),array('id','asc'),'',array('id','title'));
        }
        $this->load->view('Admin/view_categories.php', $data);
    }
    function create_cate($cate,$html,$select){

        if(!empty($cate)){
            $cate_child = $this->Common_model->get_data('categories', array('show' => 1,'parentid' => $cate->id));
            if(!empty($cate_child)){
                foreach ($cate_child as $child){
                    if($select == $child->id){
                        $sel='selected';
                    }else{
                        $sel='';
                    }
                    $s1 = $html.'--';
                    echo '<option value="'.$child->id.'" '.$sel.'>'.$s1.$child->title.'</option>';
                    $this->create_cate($child,$s1,$select);
                }
            }
        }
    }
    function district(){
        $html = '<option value="" selected="">--- Chọn Huyện ---</option>';
        if (!empty($_POST['id'])) {
            $district = $this->Common_model->get_data('district', array('show' => 1, 'id_city' => $_POST['id']));
            if (!empty($district)) {
                foreach ($district as $pro) {
                    $html .= '<option value="' . $pro->id . '">' . $pro->title . '</option>';
                }
            }
        }
        echo $html;
    }
    function rep_com(){
        $this->Common_model->insert_data('comment',$_POST);
    }

}
