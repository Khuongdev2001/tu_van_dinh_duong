<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_contact extends MX_Controller
{
    public $setting = '';
    private $success = 0;

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->helper(array('form', 'url'));
        $this->setting = $GLOBALS['sett'];
    }

    public function index()
    {

        $data['show_sl'] = 1;
        $data['capt2'] = 0;
        $data['sett'] = $GLOBALS['sett'];
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = '';
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
            }
        }
        $data['cate_contact'] = $this->Common_model->get_one('categories',array('show'=>1,'taxonomy'=>'cate_article','type_categories'=>5),array('id','asc'));
        if(!empty($data['cate_contact'])){
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_contact']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['contact'] = $this->Common_model->get_data('article', array('show' => 1), array('order','asc'));
        }
        $data['content'] = $this->load->view('Contact/Contact_index', $data, true);
        $data['meta_key'] = $this->setting->meta_key;
        $data['meta_des'] = $this->setting->meta_des;
        $data['title'] = $this->setting->title;
        $this->load->view('index', $data);
    }
    public function register_contact()
    {
        $this->load->library('form_validation');
        $this->form_validation->set_rules('name', 'Họ tên', 'trim|required');
        $this->form_validation->set_rules('phone', 'Điện thoại', 'trim|numeric|min_length[9]|max_length[15]|required');
        $this->form_validation->set_rules('address', 'Nơi sống', 'trim|required');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
        $this->form_validation->set_error_delimiters('<span class="error">', '</span>');
        if ($this->form_validation->run() == FALSE) {
            $output = array('mes'=>3, 'view' => $this->load->view('Contact/Contact_err1','',true));
            $output = json_encode($output);
            echo $output;
        } else {
            if (!isset($_COOKIE['doctor_done'])) {
                $array = array(
                    'name' => $this->input->post('name'),
                    'email' => $this->input->post('email'),
                    'phone' => $this->input->post('phone'),
                    'address' => $this->input->post('address'),
                    'ip' => $this->input->post('curl'),
                    'content' => $this->input->post('content')
                );
                $this->db->insert('contact', $array);
                setcookie('doctor_done', 'success', time() + 300);
                $output = array('mes'=>1, 'view' => $this->load->view('Contact/Contact_success','',true));
                $output = json_encode($output);
                echo $output;
            }else{
                $output = array('mes'=>2, 'view' => $this->load->view('Contact/Contact_err','',true));
                $output = json_encode($output);
                echo $output;
            }

        }
    }
    function show_form(){
        $data['sett'] = $GLOBALS['sett'];
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = '';
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
            }
        }
        $data['cate_contact'] = $this->Common_model->get_one('categories',array('show'=>1,'taxonomy'=>'cate_article','type_categories'=>5),array('id','asc'));
        if(!empty($data['cate_contact'])){
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_contact']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['contact'] = $this->Common_model->get_data('article', array('show' => 1), array('order','asc'));
        }
        $this->load->view('Contact/Contact_register',$data);
    }
    public function register()
    {
        $data['sett'] = $GLOBALS['sett'];
        $this->load->library('form_validation');
        $this->form_validation->set_rules('name', 'Họ tên', 'trim|required');
        $this->form_validation->set_rules('phone', 'Điện thoại', 'trim|numeric|min_length[9]|max_length[15]|required');
        $this->form_validation->set_rules('address', 'Địa chỉ', 'trim|required');
        $this->form_validation->set_error_delimiters('<span class="error">', '</span>');
        if ($this->form_validation->run() == FALSE) {
                $output = array('mes'=>3, 'view' => $this->load->view('Contact/Contact_err1','',true));
                $output = json_encode($output);
                echo $output;
        } else {
            $data['capt2'] = 0;
            if (!isset($_COOKIE['doctor_done'])) {
                $array = array(
                    'name' => $this->input->post('name'),
                    'phone' => $this->input->post('phone'),
                    'ip' => $this->input->post('curl'),
                    'address' => $this->input->post('address'),
                );
                $this->db->insert('contact', $array);
                setcookie('doctor_done', 'success', time() + 300);
                $output = array('mes'=>1, 'view' => $this->load->view('Contact/Contact_success',$data,true));
                $output = json_encode($output);
                echo $output;
            }else{
                $output = array('mes'=>2, 'view' => $this->load->view('Contact/Contact_err',$data,true));
                $output = json_encode($output);
                echo $output;
            }

        }
    }

    function register_email(){
        $this->load->library('form_validation');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
        $this->form_validation->set_error_delimiters('<span class="error">', '</span>');
        if ($this->form_validation->run() == FALSE) {
            $output = array('mes'=>3, 'view' => $this->load->view('Contact/Contact_err1','',true));
            $output = json_encode($output);
            echo $output;
        } else {
            $data['capt2'] = 0;
            if (!isset($_COOKIE['doctor_done'])) {
                $array = array(
                    'email' => $this->input->post('email'),
                    'ip' => $this->input->post('curl')
                );
                $this->db->insert('email', $array);
                setcookie('doctor_done', 'success', time() + 300);
                $output = array('mes'=>1, 'view' => 'Đăng ký thành công');
                $output = json_encode($output);
                echo $output;
            }else{
                $output = array('mes'=>2, 'view' =>'Có lỗi xả ra');
                $output = json_encode($output);
                echo $output;
            }

        }
    }
}
