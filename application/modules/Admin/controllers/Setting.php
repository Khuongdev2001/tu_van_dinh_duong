<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Setting extends MX_Controller
{
    function __construct()
    {
        parent::__construct();
    }
    public function index()
    {
        $data['table'] = 'support';
        $user = $this->session->userdata('loged');
        $data['object_user'] = $this->Admin_model->get_one('users', array('id' => $user));
        $data['arr_setting']= $this->Admin_model->get_one('setting');
        $data['language']=$this->Admin_model->get_data('language',array('show'=>1));
        $data['note'] = '';
        if($this->input->post()){
            $this->form_validation->set_rules('favicon_icon', 'Favicon', 'required');
            $this->form_validation->set_rules('logo', 'Logo', 'required');
            if ($this->form_validation->run() == FALSE) {

            } else {

                $items = $this->input->post();
//                $items['notes'] = json_encode($items['notes']);
                if(!empty($data['arr_setting'])){
                    $this->Admin_model->update_data('setting',array('id'=>$data['arr_setting']->id),$items);
                    $data['note'] = 'Cập nhập thành công';
                }else{
                    $this->Admin_model->insert_data('setting',$items);
                    $data['note'] = 'Thêm mới thành công';
                }
                $data['arr_setting']=$this->Admin_model->get_one('setting',array());
            }
        }
        $this->load->view('Admin/view_setting', $data);
    }
}
