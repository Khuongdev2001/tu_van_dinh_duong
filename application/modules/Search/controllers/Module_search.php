<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_search extends MX_Controller
{
    public $setting = '';
    private $per_page = 24;
    private $total_rows = 6;
    public function __construct()
    {
        parent::__construct();
        $this->setting = $GLOBALS['sett'];
    }

    public function index()
    {
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = array();
        $arrCat = array();
        $cateChildPro = array();
        $cateParentPro = '';
        $breadPro = array();
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $obj) {
                $arrCat[$obj->id] = $obj;
                $arr_obj[$obj->parentid][] = $obj;
                if ($obj->parentid == 0 && $obj->taxonomy == "cate_product") {
                    $cateParentPro[] = $obj;
                }
            }
        }
        if (!empty($cateParentPro)) {
            foreach ($cateParentPro as $objCat) {
                foreach ($arr_cate as $obj) {
                    if ($obj->parentid == $objCat->id) {
                        $cateChildPro[$objCat->id][] = $obj;
                    }
                }
            }

        }
        $data['cateParentPro'] = $cateParentPro;
        $data['cateChildPro'] = $cateChildPro;

        if (isset($_GET['sortby'])) {
            $val = $_GET['sortby'];
            if ($val == 'default') {
                $orderby = array('id', 'desc');
            } else {
                $val = explode('-', $val);
                $orderby = array($val[0], $val[1]);
            }
        } else {
            $orderby = array('id', 'desc');
        }
        if (isset($_GET['per_page'])) {
            $offset = $_GET['per_page'];
        } else {
            $offset = 0;
        }
//        if (isset($_GET['key'])) {
//            $this->db->like($GLOBALS['title'],$_GET['key']);
//        }
        $select = array();
        $data['product'] = $this->Common_model->get_data_union('product', array('show' => 1),$orderby, array($this->per_page, $offset),$select,$_GET['key']);

        $this->total_rows = $this->Common_model->get_total_union_like('product',array('show' => 1),$select,$_GET['key']);
        $this->paging();
        $data['total'] = $this->total_rows ;
        $data['sett'] = $this->setting;
        $data['content'] = $this->load->view('Search/Search_index', $data, true);
        $data['meta_key'] = $this->setting->meta_key;
        $data['meta_des'] = $this->setting->meta_des;
        $data['title'] = $this->setting->title;
        $this->load->view('index', $data);
    }
    function get_medicine_details($keyword)
    {

        $query = "SELECT * FROM (
  SELECT medicine_id, medicine_name,medicine_package,medical_id,'g' FROM tbl_general_medicine
    UNION
  SELECT medicine_id, medicine_name,medicine_package,medical_id,'c' FROM tbl_medicine
  ) AS t
WHERE  medicine_name LIKE '%" . $keyword . "%' limit 20;";

        $result_medicine = $this->db->query($query);


        if ($result_medicine->num_rows() > 0) {
            return $result_medicine->result_array();
        } else {
            return array();
        }
    }
    function removeqsvar($url, $varname)
    {
        list($urlpart, $qspart) = array_pad(explode('?', $url), 2, '');
        parse_str($qspart, $qsvars);
        unset($qsvars[$varname]);
        $newqs = http_build_query($qsvars);
        return $urlpart . '?' . $newqs;
    }

    public
    function paging()
    {
        $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $actual_link = $this->removeqsvar($actual_link, 'per_page');
        if (isset($_COOKIE['rear'])) {
            $next = 'Next';
            $prev = 'Prev';
        } else {
            $next = 'Sau';
            $prev = 'Trước';
        }
        $this->load->library('pagination');
        $config['base_url'] = $actual_link;
        $config['total_rows'] = $this->total_rows;
        $config['per_page'] = $this->per_page;
        $config['page_query_string'] = TRUE;
        $config['uri_segment'] = 2;
        $config['num_links'] = 10;
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $config['full_tag_open'] = '<ul>';
        $config['full_tag_close'] = '</ul>';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li><a class="activepage" >';
        $config['cur_tag_close'] = '</a></li>';
        $config['prev_tag_open'] = '<li class="pagination-prev">';
        $config['prev_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li class="pagination-next">';
        $config['last_tag_close'] = '</li>';
        $config['first_tag_open'] = '<li class="pagination-next">';
        $config['first_tag_close'] = '</li>';
        $config['first_link'] = '|<';
        $config['last_link'] = '>|';
        $config['prev_link'] = $prev;
        $config['next_link'] = $next;
        $config['next_tag_open'] = '<li class="pagination-next">';
        $config['next_tag_close'] = '</li>';
        $this->pagination->initialize($config);
    }
}