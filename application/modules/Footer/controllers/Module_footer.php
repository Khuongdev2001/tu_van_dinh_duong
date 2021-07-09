<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_footer extends MX_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->lang->load('atta_lang', 'vn');
    }

    public function index()
    {
        $data['sett'] = $GLOBALS['sett'];
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = '';
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
            }
        }
        $data['cate_bottom'] = $this->Common_model->get_data('categories', array('main_menu' => 1, 'show' => 1, 'parentid' => 0), array('order_main', 'asc'));
        $cate_contact = $this->Common_model->get_one('categories',array('show'=>1,'taxonomy'=>'cate_article','type_categories'=>5),array('id','asc'));
        if(!empty($cate_contact)){
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $cate_contact->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['contact'] = $this->Common_model->get_data('article', array('show' => 1), array('order','asc'));
        }
        return $this->load->view('Footer/Footer_index', $data);
    }
    function register_course(){
        $this->load->library('form_validation');
        $this->form_validation->set_rules('name', 'Họ tên', 'trim|required');
        $this->form_validation->set_rules('phone', 'Điện thoại', 'trim|numeric|min_length[9]|max_length[15]|required');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
        $this->form_validation->set_error_delimiters('<span class="error">', '</span>');
        $api_url = 'https://www.google.com/recaptcha/api/siteverify';
        $secret_key = '6LdizqoUAAAAACzJ_Gb1rWYD8uT6a-qUNK5SYAIQ';
        if ($this->form_validation->run() == FALSE) {
            $output = array('mess' =>2,'views'=>'<div class="alert alert-danger">'.validation_errors().'</div>');
            $output = json_encode($output);
            echo $output;
        } else {
//            $site_key_post = $_POST['g-recaptcha-response'];
//
//            //lấy IP của khach
//            if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
//                $remoteip = $_SERVER['HTTP_CLIENT_IP'];
//            } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
//                $remoteip = $_SERVER['HTTP_X_FORWARDED_FOR'];
//            } else {
//                $remoteip = $_SERVER['REMOTE_ADDR'];
//            }
//
//            //tạo link kết nối
//            $api_url = $api_url . '?secret=' . $secret_key . '&response=' . $site_key_post . '&remoteip=' . $remoteip;
//            //lấy kết quả trả về từ google
//
//            $response = file_get_contents($api_url);
//            //dữ liệu trả về dạng json
//            $response = json_decode($response);
//            if (!isset($response->success)) {
//            }
//            if ($response->success == true) {

                    $array = array(
                        'name' => $this->input->post('name'),
                        'email' => $this->input->post('email'),
                        'phone' => $this->input->post('phone'),
                        'id_sp' => $this->input->post('pro'),
                        'child' => json_encode($this->input->post('child')),
                        'age' => json_encode($this->input->post('age'))
                    );
                    $this->db->insert('order', $array);
                    unset($_POST);
                    $output = array('mess' =>1,'views'=>$GLOBALS['sett']->address_contact);
                    $output = json_encode($output);
                    echo $output;

//            }else{
//                $output = array('mess' =>2,'views'=>'<div class="alert alert-danger">Vui lòng check robot</div>');
//                $output = json_encode($output);
//                echo $output;
//            }

        }
    }
}
