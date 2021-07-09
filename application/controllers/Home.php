<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class Home extends MX_Controller {

    public function __construct()

    {

        parent::__construct();

    }

    public function index()

    {

        $data['content'] =  Modules::run('Content/Content/index');

        $data['show_sl'] = 1;

        $data['fb_image'] = base_url().$GLOBALS['sett']->logo;

        $this->load->view('index',$data);

    }

    function update_img(){

        $article = $this->Common_model->get_data('article');

        $i = 1;

        $context = 'content_text';

        foreach ($article as $art) {

            $full = str_replace('https://websitefile.ghmsoft.vn/uploads/', 'upload/images/', $art->$context);

            $this->Common_model->update_data('article', array('id' => $art->id), array($context => $full));

            $i++;

        }

        echo $i . $context . '/' . time();

    }

}

