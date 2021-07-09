<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rewrite extends MX_Controller
{
    public $rear = '';
    public function __construct()
    {
        parent::__construct();
        $this->lang->load('atta_lang', 'vn');
    }
    public function index()
    {
        
        $alias = str_replace('.html','', $this->uri->segment(1));
        $int_alias=abs(crc32($alias));
        $obj_alias = $this->Common_model->get_one('alias', array('value' => $alias));
        $obj_alias_check = $this->Common_model->get_one('alias', array('value_en' => $alias));
        if (!empty($obj_alias)) {
            if ($obj_alias->taxonomy == 'categories'){

                $category = $this->Common_model->get_one('categories', array('id' => $obj_alias->id_field));
                if (!empty($category)){
                    if ($category->taxonomy == 'cate_product') {

                        echo Modules::run('Products/Module_product/category',$int_alias);
                    } else {
                        echo Modules::run('Article/Module_article/category',$int_alias);
                    }
                } else {
                    echo Modules::run('Module_404/Module_error/index');
                }
            } else if ($obj_alias->taxonomy == 'product') {
                echo Modules::run('Products/Module_product/detail');
            } else if ($obj_alias->taxonomy == 'article') {
                echo Modules::run('Article/Module_article/detail');
            } else {
                echo Modules::run('Module_404/Module_error/index');
            }
        }elseif(!empty($obj_alias_check)){
            $this->session->set_userdata('rear','_en');
            if ($obj_alias_check->taxonomy == 'categories'){
                $category = $this->Common_model->get_one('categories', array('id' => $obj_alias_check->id_field));
                if (!empty($category)){
                    if ($category->taxonomy == 'cate_product') {
                        echo Modules::run('Products/Module_product/category',$int_alias);
                    } else {
                        echo Modules::run('Article/Module_article/category',$int_alias);
                    }
                } else {
                    echo Modules::run('Module_404/Module_error/index');
                }
            } else if ($obj_alias_check->taxonomy == 'product') {
                echo Modules::run('Products/Module_product/detail');
            } else if ($obj_alias_check->taxonomy == 'article') {
                echo Modules::run('Article/Module_article/detail');
            } else {
                echo Modules::run('Module_404/Module_error/index');
            }
        }else{

            echo Modules::run('Module_404/Module_error/index');
        }
    }
}
