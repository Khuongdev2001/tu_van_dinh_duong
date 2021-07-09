<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_slide extends MX_Controller {

    public function __construct()
    {
        parent::__construct();
    }
    public function index()
    {
        $data['slide'] = $this->Common_model->get_data('slide',array('show'=>1,'action'=>0));
        return $this->load->view('Slide/Slide_index',$data);
    }
}
