<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_error extends MX_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->lang->load('atta_lang', 'vn');
    }

    public function index()
    {
        $data['categories'] = $this->Common_model->get_data('categories', array('main_menu'=>1,'show'=>1,'parentid'=>0),array('order_main','asc'));
        $this->load->view('Module_404/Views_404',$data);
    }
}