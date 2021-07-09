<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_ads extends MX_Controller
{
    public $lang = 'vi';
    public $setting = '';
    public $total_rows = 10;
    public $per_page = 6;

    public function __construct()
    {
        parent::__construct();
        if ($this->session->userdata('lang') != '') {
            $this->lang = $this->session->userdata('lang');
        }
        $this->setting = $this->Common_model->get_one('setting', array('language' => $this->lang));
    }

    public function index()
    {
        $data['partner'] = $this->Common_model->get_data('ads',array('show'=>(int)1, 'type'=>(int)1 ,'position'=>'middle'));
        $data['danhhieu'] = $this->Common_model->get_data('ads',array('show'=>1,'type'=>3));

        if(isset($_COOKIE['rear'])){
            $data['rear'] = $_COOKIE['rear'] ;
        }else{$data['rear'] = '' ;}

        return $this->load->view('Ads/Ads_center', $data);
    }

    public function center()
    {
        $data['ads_left'] = $this->Common_model->get_one('ads',array('show'=>(int)1,'type'=>(int)1 ,'position'=>'left'),array('id','desc'));
        $data['ads_right'] = $this->Common_model->get_one('ads',array('show'=>(int)1,'type'=>(int)1 ,'position'=>'right'),array('id','desc'));
        return $this->load->view('Ads/Ads_home',$data);
    }
    public function list_video(){
        if(isset($_COOKIE['rear'])){
            $data['rear'] = $_COOKIE['rear'] ;
        }else{$data['rear'] = '' ;}
        $data['sett'] = $this->setting;

        $offset = $this->uri->segment(2);
        $data['video'] = $this->Common_model->get_data('ads',array('show'=>(int)1,'type'=>(int)2), array('id','desc'), array($this->per_page, $offset));
        $this->total_rows = $this->Common_model->get_total('ads', array('show'=>(int)1,'type'=>(int)2));
        $this->paging();
        if(isset($_GET['id'])){
            $data['video_stick'] = $this->Common_model->get_one('ads', array('show'=>(int)1,'type'=>(int)2,'id'=>(int)$_GET['id']));
        }else{
            $data['video_stick'] = $this->Common_model->get_one('ads', array('show'=>(int)1,'type'=>(int)2,'stick'=>(int)1));
        }

        $data['content'] = $this->load->view('Ads/Ads_video', $data,true);
        $data['meta_key'] = 'Video';
        $data['meta_des'] = 'Video';
        $data['title'] ='Video';
        $this->load->view('index', $data);
    }
    public function paging()
    {
        if(isset($_COOKIE['rear'])){
            $next = '>>';
            $prev = '<<';
        } else {
            $next = '>>';
            $prev = '<<';
        }
        $this->load->library('pagination');
        $config['base_url'] = base_url() . $this->uri->segment(1);
        $config['total_rows'] = $this->total_rows;
        $config['per_page'] = $this->per_page;
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