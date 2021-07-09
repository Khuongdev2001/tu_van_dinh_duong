<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_left extends MX_Controller
{

    public function __construct()
    {
        parent::__construct();
        if ($_SESSION['rear'] == '_en') {
            $this->lang->load('atta_lang', 'en');
        } else {
            $this->lang->load('atta_lang', 'vn');
        }
    }

    public function index($cate = '')
    {
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = '';
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
            }
        }

        $data['cate_video'] = $this->Common_model->get_one('categories', array('show' => (int)1, 'taxonomy' => 'cate_article', 'type_categories' => 1), array('order_main', 'asc'));
        $data['video_hot'] = '';
        if (!empty($data['cate_video'])) {
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_video']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['video_hot'] = $this->Common_model->get_data('article', array('show' => 1, 'stick' => 1), array('id', 'desc'), 3);
        }
        $data['cate_left'] = '';
        $data['art_left'] = '';

        $data['cate_left'] = $this->Common_model->get_data('categories', array('show' => (int)1, 'show_left' => (int)1), array('order_left', 'asc'));
        if (!empty($data['cate_left'])) {
            foreach ($data['cate_left'] as $cat) {
                $arr_category = $this->Common_model->get_all_cat($arr_obj, $cat->id, array());
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $data['art_left'][$cat->id] = $this->Common_model->get_data('article', array('show' => (int)1), array('id', 'desc'), 7);
            }

        }

        $data['ads_left'] = $this->Common_model->get_data('ads', array('show' => (int)1, 'position' => 'left'), array('order', 'asc'));
        $data['product_hot'] = $this->Common_model->get_data('product', array('show' => (int)1, 'stick' => 1), array('id', 'desc'), 10);
        $data['sett'] = $GLOBALS['sett'];
        $data['catt'] = $cate;
        return $this->load->view('Left/Left_index', $data);
    }

    function left_pro($cate = '')
    {

        $arr_cate = $this->Common_model->get_data('categories', array('show' => 1));
        $arr_obj = '';
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
            }
        }
        $data['cate_rpo'] = $this->Common_model->get_one('categories', array('show' => (int)1, 'taxonomy' => 'cate_product', 'parentid' => 0), array('order', 'asc'));
        $data['cate_child'] = '';
        if (!empty($data['cate_rpo'])) {
            $data['cate_child'] = $this->Common_model->get_data('categories', array('show' => (int)1, 'taxonomy' => 'cate_product', 'parentid' => $data['cate_rpo']->id), array('order', 'asc'));;
        }
        $data['cate_video'] = $this->Common_model->get_one('categories', array('show' => (int)1, 'taxonomy' => 'cate_article', 'type_categories' => 1), array('order_main', 'asc'));
        $data['video_hot'] = '';
        if (!empty($data['cate_video'])) {
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_video']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['video_hot'] = $this->Common_model->get_data('article', array('show' => 1, 'stick' => 1), array('id', 'desc'), 3);
        }
        $data['cate_left'] = '';
        $data['art_left'] = '';
        if (!empty($cate->more_cate)) {
            $id_cate = json_decode($cate->more_cate);
            $data['cate_left'] = $this->Common_model->get_data_in('categories', array('id', $id_cate), array('show' => (int)1), array('order_left', 'asc'));
            if (!empty($data['cate_left'])) {
                foreach ($data['cate_left'] as $cat) {
                    $arr_category = $this->Common_model->get_all_cat($arr_obj, $cat->id, array());
                    $this->db->group_start();
                    foreach ($arr_category as $it) {
                        $this->db->or_like('array_cate', ',' . $it . ',');
                    }
                    $this->db->group_end();
                    $this->db->distinct();
                    $data['art_left'][$cat->id] = $this->Common_model->get_data('article', array('show' => (int)1), array('id', 'desc'), 5);
                }

            }
        }
        $data['product_hot'] = $this->Common_model->get_data('product', array('show' => (int)1, 'stick' => 1), array('id', 'desc'), 10);
        $data['sett'] = $GLOBALS['sett'];
        return $this->load->view('Left/Left_pro', $data);
    }

    public function category($obj, $active = 0)
    {
        if (!empty($obj)) {
            $child = $this->Common_model->get_data('categories', array('show' => (int)1, 'taxonomy' => 'cate_product', 'parentid' => $obj->id), array('order', 'asc'));
            if (!empty($child)) {
                echo '<ul class="sub-left">';
                foreach ($child as $chi) {
                    if ($active == $chi->id) {
                        $act = 'active';
                    } else {
                        $act = '';
                    }
                    if (!empty($child->hyperlink)) {
                        $link = $child->hyperlink;
                    } else {
                        $link = base_url() . $chi->$GLOBALS['alias'];
                    }
                    echo '<li class="baby-left ' . $act . '">';
                    echo '<a href="' . $link . '"';
                    echo 'title="' . show_meta($chi) . '" >' . $chi->title . '</a>';
                    echo '</li>';
                }
                echo '</ul>';
            }
        }
    }
}
