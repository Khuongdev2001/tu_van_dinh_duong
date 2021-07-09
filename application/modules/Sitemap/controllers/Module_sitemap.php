<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_sitemap extends MX_Controller
{


    public function __construct()
    {
        parent::__construct();

    }
    public function site_map()
    {
        $data['cate'] = $this->Common_model->get_data('categories', array('show' => 1), array('id', 'asc'));
        $data['article'] = $this->Common_model->get_data('article', array('show' => 1), array('id', 'desc'));

        if(isset($_COOKIE['rear'])){
            $data['rear'] = $_COOKIE['rear'] ;
        }else{$data['rear'] = '' ;}
        header('Content-Type: text/xml;');
        return $this->load->view('Sitemap/Sitemap_index', $data);
    }
}
