<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class Module_header extends MX_Controller

{

    public function __construct()

    {
        parent::__construct();
        $this->lang->load('atta_lang', 'vn');
    }

    public function index()

    {

        $data['setting'] = $GLOBALS['sett'];

        return $this->load->view('Header/Header_index', $data);

    }

    public function shop_index()

    {

        $data['setting'] = $GLOBALS['sett'];

        return $this->load->view('Header/Header_index1', $data);

    }

    public function main_menu()

    {

        $arr_cate = $GLOBALS['arr_cate'];

        $cateParentPro = '';

        $cateParentArt = array();

        $cateChildPro = array();

        $cateChildPro2 = array();

        $cateCheck = array();

        $cateChildArt = array();

        $cateChild = array();

        if(!empty($arr_cate)) {

            foreach ($arr_cate as $obj) {

                if ($obj->parentid == 0 && $obj->taxonomy == "cate_article" && $obj->main_menu==1) {

                    $cateParentArt[] = $obj;

                }

                if ($obj->parentid == 0 && $obj->taxonomy == "cate_product") {

                    $cateParentPro[] = $obj;

                }

                $cateChild[$obj->parentid][] = $obj;

            }

            if(!empty($cateParentPro)){

                foreach ($cateParentPro as $objCat){

                    foreach ($arr_cate as $obj) {

                        if($obj->parentid == $objCat->id){

                            $cateChildPro[$objCat->id][] = $obj;

                        }

                    }

                    if(!empty($cateChildPro)){

                        foreach ($cateChildPro[$objCat->id] as $objChild){

                            foreach ($arr_cate as $obj) {

                                if ($obj->parentid == $objChild->id) {

                                    $cateChildPro2[$objChild->id][] = $obj;

                                    $cateCheck[$objCat->id][]= $obj;

                                }

                            }

                        }

                    }



                }

            }



            $data['cateParentPro'] = $cateParentPro;

            $data['cateChildPro'] = $cateChildPro;

            $data['cateChildPro2'] = $cateChildPro2;

            $data['cateCheck'] = $cateCheck;

            $data['cateChild'] = $cateChild;

            $data['categories'] = $cateParentArt;

            $data['cate_child'] = '';

            if (!empty($data['categories'])) {

                foreach ($data['categories'] as $cate) {

                    $data['cate_child'][$cate->id] = $this->Common_model->get_data('categories', array('show' => 1, 'parentid' => $cate->id), array('order', 'asc'));

                }

            }

            $data['sett'] = $GLOBALS['sett'];

            $slide = $this->Common_model->get_data('slide',array('show'=>1));

            $slideTop = array();

            $slideBot = array();

            $slideRig = array();

            if(!empty($slide)){

                foreach ($slide as $objSlide){

                    if($objSlide->action==0){

                        $slideTop[] = $objSlide;

                    }elseif($objSlide->action==1){

                        $slideBot[] = $objSlide;

                    }elseif($objSlide->action==2){

                        $slideRig[] = $objSlide;

                    }

                }

            }

            $data['slideTop'] = $slideTop;

            $data['slideBot'] = $slideBot;

            $data['slideRig'] = $slideRig;

            return $this->load->view('Header/Header_main_menu', $data);

        }

    }

    public function create_pro($catid = '', $html = '')

    {

        if (!empty($catid)) {

            $arr_cate = $GLOBALS['arr_cate'];

            $arr_obj = '';

            if (!empty($arr_cate)) {

                foreach ($arr_cate as $cat) {

                    $arr_obj[$cat->parentid][] = $cat;

                }

            }

            $arr_category = $this->Common_model->get_all_cat($arr_obj, $catid, array());

            $this->db->group_start();

            foreach ($arr_category as $it) {

                $this->db->or_like('array_cate', ',' . $it . ',');

            }

            $this->db->group_end();

            $this->db->distinct();

            $product = $this->Common_model->get_data('product', array('show' => 1), array('order', 'asc'));



            if (!empty($product)) {

                $html .= '<ul class="sub-cate">';

                foreach ($product as $pro) {

                    $html .= '<li>';

                    $html .= '<a href="' . base_url() . $pro->alias . '.html"';

                    $html .= 'title="' . show_meta($pro) . '">' . $pro->title . '</a>';

                    $this->create_child($pro->id);

                    $html .= '</li>';

                }

                $html .= '</ul>';

            }



        }

        echo $html;

    }



    public function menu_bottom()

    {

        $data['categories'] = $this->Common_model->get_data('categories', array('taxonomy' => 'cate_article', 'bottom_menu' => 1, 'show' => 1, 'parentid' => 0), array('order_bottom', 'asc'));

        $alias = $this->Common_model->get_data('alias', array('taxonomy' => 'categories'));

        $data['link'] = '';

        if (!empty($alias)) {

            foreach ($alias as $al) {

                $data['link'][$al->id_field] = $al->value;

            }

        }

        return $this->load->view('Header/Header_menu_bottom', $data);

    }



    public function main_child()

    {

        $data['slide'] = $this->Common_model->get_data('slide', array('show' => 1));

        $data['menu_course'] = $this->Common_model->get_data('categories', array('main_menu' => 1, 'show' => 1, 'parentid' => 0, 'taxonomy' => 'cate_product'), array('order_main', 'asc'));

        if (isset($_COOKIE['rear'])) {

            $data['rear'] = $_COOKIE['rear'];

        } else {

            $data['rear'] = '';

        }

        $this->load->view('Header/Header_menu_child', $data);

    }



    public function create_child($catid = '', $html = '')

    {

        if (isset($_COOKIE['rear'])) {

            $rear = $_COOKIE['rear'];

        } else {

            $rear = '';

        }

        $title = 'title' . $rear;

        if (!empty($catid)) {

            $child = $this->Common_model->get_data('categories', array('show' => 1, 'parentid' => $catid), array('order_main', 'asc'));

            if (!empty($child)) {

                $html .= '<ul class="sub-menu">';

                foreach ($child as $cd) {

                    $html .= '<li>';

                    $html .= '<a href="' . base_url() . $cd->alias . '.html"';

                    $html .= 'title="' . $cd->$title . '">' . $cd->$title . '</a>';

                    $this->create_child($cd->id);

                    $html .= '</li>';

                }

                $html .= '</ul>';

            }

        }

        echo $html;

    }





    public function create_sub($id = 0)

    {

        $cate_sub = $this->Common_model->get_data('categories', array('show' => 1, 'parentid' => $id), array('order', 'asc'));

        $html = '';

        if ($cate_sub) {

            $html .= '<ul class="sub-menu">';

            foreach ($cate_sub as $cat) {

                $html .= '<li>';

                $html .= '<a href="' . base_url() . $cat->alias . '.html" title="' . $cat->title . '">' . $cat->title . '</a>';

                $html .= '</li>';

            }

            $html .= '</ul>';



        }

        return $html;

    }

}

