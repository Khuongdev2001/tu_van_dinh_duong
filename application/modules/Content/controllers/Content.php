<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Content extends MX_Controller
{
    public $setting = '';

    public function __construct()
    {
        parent::__construct();
        $this->lang->load('atta_lang', 'vn');
    }

    public function index()
    {
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = array();
        $arrCat = array();
        $cateProHome = array();
        $cateProChild = array();
        $productCate = array();
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $obj) {
                $arrCat[$obj->id] = $obj;
                $arr_obj[$obj->parentid][] = $obj;
                if($obj->show_home == 1 && $obj->taxonomy =='cate_product'){
                    $cateProHome[] = $obj;
                }
            }
        }
        if(!empty($cateProHome)){
            foreach ($cateProHome as $obj) {
                $arr_category = $this->Common_model->get_all_cat($arr_obj, $obj->id, array());
                if(!empty($arr_category)){
                    foreach ($arr_category as $item){
                        if($obj->id != $item && $arrCat[$item]->show_left==1){
                            $cateProChild[$obj->id][] = $arrCat[$item];
                        }
                    }
                }

                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $productCate[$obj->id] = $this->Common_model->get_data('product', array('show' => 1,'show_home'=>1), array('order','asc'),10);
            }
        }
        $product_trade =array();
        $flash_ads =array();
        $ads = $this->Common_model->get_data('ads',array('show'=>1),array('order','asc'));
        if(!empty($ads)){
            foreach ($ads as $objAds){
                if($objAds->type ==0 && $objAds->position==0){
                    $product_trade[]= $objAds;
                }
                if($objAds->type ==2 && $objAds->position==1){
                    $flash_ads[]= $objAds;
                }
            }
        }
        $data =array(
            'sett'=>$GLOBALS['sett'],
            'cateProHome'=>$cateProHome,
            'cateProChild'=>$cateProChild,
            'productCate'=>$productCate,
            'productTrade'=>$product_trade,
            'flashAds'=>$flash_ads
        );
        $data['proFlashSale'] = $this->Common_model->get_data('product', array('show' => 1,'flashsale'=>1), array('id', 'desc'), 10);
        return $this->load->view('Content/Content', $data, true);
    }
    function get_proStick(){

        $data['proStick'] = $this->Common_model->get_data('product', array('show' => 1,'stick'=>1), array('id', 'desc'), 8);

        return $this->load->view('Content/Content_pro', $data);
    }
    function get_customer(){
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = '';
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
            }
        }
        $data['cate_com'] = $this->Common_model->get_one('categories',array('show'=>1,'show_home'=>1,'taxonomy'=>'cate_article','type_home'=>5),array('id','asc'));
        if(!empty($data['cate_com'])){
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_com']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['customer'] = $this->Common_model->get_data('article', array('show' => 1,'show_home'=>1), array('order','asc'));
        }
        $this->load->view('Content/Content_cus', $data);
    }
    function get_article(){
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = '';
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
            }
        }
        $data['cate_blog'] = $this->Common_model->get_one('categories',array('show'=>1,'show_home'=>1,'taxonomy'=>'cate_article','type_home'=>3),array('id','asc'));
        if(!empty($data['cate_blog'])){
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_blog']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['blog'] = $this->Common_model->get_data('article', array('show' => 1), array('order','asc'),5);
        }
        $this->load->view('Content/Content_blog', $data);
    }
    function get_modal($id = 0){
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = array();
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
            }
        }
        $data['cate_contact'] = $this->Common_model->get_one('categories',array('show'=>1,'taxonomy'=>'cate_article','type_categories'=>5),array('id','asc'));
        if(!empty($data['cate_contact'])){
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_contact']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['contact'] = $this->Common_model->get_data('article', array('show' => 1), array('order','asc'));
        }
        if($id==0){
            $this->load->view('Content/Content_modal',$data);
        }else{
            $this->load->view('Content/Content_modal_all',$data);
        }

    }

    function get_banner(){
        $this->load->view('Content/Content_banner');
    }
}
