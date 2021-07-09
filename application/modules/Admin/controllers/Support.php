<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Support extends MX_Controller
{
    private $tb_setting = 'setting';
    private $tb_users = 'users';
    private $sele = '';
    private $html = '';
    private $count = 1;
    function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $data['table'] = 'support';
        $user = $this->session->userdata('loged');
        $data['object_user'] = $this->Admin_model->get_one('users', array('id' => $user));
        $data['arr_support']=$this->Admin_model->get_one('support');
//        var_dump($this->input->post());
//        var_dump($data['arr_support']);
        if($this->input->post()){
            $this->form_validation->set_rules('email', 'Email nhận dịch vụ', 'required|valid_email');
            $this->form_validation->set_rules('email_send', 'Email gửi liên hệ', 'required|valid_email');
            $this->form_validation->set_rules('password', 'Password', 'required');
            if ($this->form_validation->run() == FALSE) {

            } else {
                $items = $this->input->post();
                if(!empty($items['support'])) {
                    foreach ($items['support'] as $id => $val) {
                        $check = 0;
                        foreach ($items['support'][$id] as $key => $value) {
                            if (empty($value)) {
                                $check++;
                            }
                        }
                        if ($check == 7) {
                            unset($items['support'][$id]);
                        }
                    }
                    $items['support'] = json_encode($items['support']);
                }
                if(!empty($data['arr_support'])){
                    $this->Admin_model->update_data('support',array('id'=>$data['arr_support']->id),$items);
                }else{
                    $this->Admin_model->insert_data('support',$items);
                }
                $data['arr_support']=$this->Admin_model->get_one('support');

            }
        }
        $this->load->view('Admin/view_support', $data);
    }
    public function send(){

        if ($this->input->post()) {
            $email = $this->input->post('email');
            $email_send = $this->input->post('email_send');
            $password = $this->input->post('password');
            $this->Admin_model->email_test($email,$email_send,$password);
        }
    }
}
