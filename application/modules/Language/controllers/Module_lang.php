<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_lang extends MX_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        return $this->load->view('Header/Header_index');
    }

    function lang_vi()
    {
        $_SESSION['rear'] ='';
        redirect(base_url());
    }

    function lang_en()
    {
        $_SESSION['rear'] ='_en';
        redirect(base_url());
    }
}
