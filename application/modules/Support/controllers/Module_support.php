<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_support extends MX_Controller {
    public $lang='vi';
    public function __construct()
    {
        parent::__construct();
        if($this->session->userdata('lang') !=''){
            $this->lang=$this->session->userdata('lang');
        }
    }
    public function index()
    {
        $data['supp'] = $this->Common_model->get_one('support');
        return $this->load->view('Support/Support_index',$data);
    }
}
