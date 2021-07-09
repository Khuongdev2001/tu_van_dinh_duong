<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_right extends MX_Controller
{

    public function __construct()
    {
        parent::__construct();

    }

    public function index($object='')
    {
        $data['video'] = $this->Common_model->get_data('ads',array('show'=>(int)1,'type'=>(int)1), array('id','desc'));
        $data['ads_home'] = $this->Common_model->get_data('ads',array('show'=>(int)1,'type'=>(int)0), array('id','desc'));
        $data['views_top'] = $this->Common_model->get_data('article',array('show'=>1),array('views','desc'),6);
        return $this->load->view('Right/Right_index', $data);
    }
    public function about($obj = '', $type = '', $supp = 0)
    {
        $data['cate_home'] = $this->Common_model->get_data('categories', array('show' => (int)1, 'taxonomy' => 'cate_product', 'show_right' => (int)1, 'type_right' => (int)0), array('id', 'asc'), array('id', 'title', 'image', 'title_en', 'excerpt', 'excerpt_en', 'fulltext', 'fulltext_en', 'meta_title'));
        $data['sett'] = $this->Common_model->get_one('setting');
        if (isset($_COOKIE['rear'])) {
            $data['rear'] = $_COOKIE['rear'];
        } else {
            $data['rear'] = '';
        }
        return $this->load->view('Right/Right_about', $data);
    }
    public function design($pro='')
    {

        if(!empty($pro)){
            $data['pro_right'] = $pro;
        }else{
            $data['pro_right'] = '';
        }
        $data['cate_home'] = $this->Common_model->get_data('categories', array('show' => (int)1, 'taxonomy' => 'cate_product', 'show_right' => (int)1, 'type_right' => (int)0), array('id', 'asc'), array('id', 'title', 'image', 'title_en', 'excerpt', 'excerpt_en', 'fulltext', 'fulltext_en', 'meta_title'));
        $data['cate_pro_right'] = $this->Common_model->get_data('categories', array('show' => (int)1, 'taxonomy' => 'cate_product', 'show_right' => (int)1, 'type_right' => (int)1), array('id', 'asc'), array('id', 'title', 'image', 'title_en', 'excerpt', 'excerpt_en', 'fulltext', 'fulltext_en', 'meta_title'));
        $data['art_child_right'] ='';
        if(!empty($data['cate_pro_right'])){
            foreach ($data['cate_pro_right'] as $cat){
                $data['art_child_right'][$cat->id] =$this->Common_model->get_data('product', array('show' => (int)1, 'category' => (int)$cat->id,'show_right'=>(int)1), array('id', 'asc'), array('id', 'title', 'image', 'title_en', 'excerpt', 'excerpt_en', 'fulltext', 'fulltext_en', 'meta_title'));
            }
        }
        $data['pro_stick'] =  $this->Common_model->get_data('product',array('show'=>(int)1,'stick'=>(int)1),array('id','desc'));
        $data['sett'] = $this->Common_model->get_one('setting');
        if (isset($_COOKIE['rear'])) {
            $data['rear'] = $_COOKIE['rear'];
        } else {
            $data['rear'] = '';
        }
        return $this->load->view('Right/Right_design', $data);
    }
    public function right_video($pro='')
    {
        if(!empty($pro)){
            $data['pro_right'] = $pro;
        }else{
            $data['pro_right'] = '';
        }
        $data['cate_home'] = $this->Common_model->get_data('categories', array('show' => (int)1, 'taxonomy' => 'cate_product', 'show_right' => (int)1, 'type_right' => (int)0), array('id', 'asc'), array('id', 'title', 'image', 'title_en', 'excerpt', 'excerpt_en', 'fulltext', 'fulltext_en', 'meta_title'));
        $data['cate_pro_right'] = $this->Common_model->get_data('categories', array('show' => (int)1, 'taxonomy' => 'cate_product', 'show_right' => (int)1, 'type_right' => (int)1), array('id', 'asc'), array('id', 'title', 'image', 'title_en', 'excerpt', 'excerpt_en', 'fulltext', 'fulltext_en', 'meta_title'));
        $data['art_child_right'] ='';
        if(!empty($data['cate_pro_right'])){
            foreach ($data['cate_pro_right'] as $cat){
                $data['art_child_right'][$cat->id] =$this->Common_model->get_data('product', array('show' => (int)1, 'category' => (int)$cat->id,'show_right'=>(int)1), array('id', 'asc'), array('id', 'title', 'image', 'title_en', 'excerpt', 'excerpt_en', 'fulltext', 'fulltext_en', 'meta_title'));
            }
        }
        $data['pro_stick'] =  $this->Common_model->get_data('product',array('show'=>(int)1,'stick'=>(int)1),array('id','desc'));
        $data['sett'] = $this->Common_model->get_one('setting');
        if (isset($_COOKIE['rear'])) {
            $data['rear'] = $_COOKIE['rear'];
        } else {
            $data['rear'] = '';
        }
        return $this->load->view('Right/Right_video', $data);
    }
}
