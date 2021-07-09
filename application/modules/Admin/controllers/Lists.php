<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Lists extends MX_Controller
{
    private $perid=5;
    private $tb_setting = 'setting';
    private $tb_users = 'users';
    private $perpage=50;
    private $total_rows=0;
    private $url='manager/list?';
    private $baseurl='';
    private $offset=0;
    private $cate_html='';

    // Lớp Kế thừa Phân quyền

    function __construct()
    {
        parent::__construct();
        if($this->auth()){

        }else{
            redirect(base_url().'manager/notice');
        }
    }
    public function index(){
        $data['iduser']=$this->session->userdata('loged');
        $data['table'] = $this->input->get('table');
        $data['keyword'] = $this->input->get('keyword');
        $data['cats']=$this->category($data['table']);
        $this->offset=$this->input->get('page');
        if(!empty($_GET['perpage'])){
            $this->perpage=$this->input->get('perpage');
        }
        if($this->offset>=2){
            $this->offset=($this->perpage*$this->offset)-$this->perpage;
        }
        $date_start=$this->input->get('date-start');
        $date_end=$this->input->get('date-end');
        $where=$this->input->get();
        unset($where['table']);
        unset($where['page']);
        unset($where['date-start']);
        unset($where['date-end']);
        //================GET URL CHO PHAN TRANG===============
        $this->url .='table='.$data['table'];
        foreach($where as $key=>$value){
            $this->url .='&'.$key.'='.$value;
        }
        $this->baseurl.=base_url().$this->url;
        //================GET URL CHO PHAN TRANG===============
        unset($where['keyword']);
        if($data['table']=='users'){
            if($data['keyword']!=''){
                $this->db->like('fullname',$data['keyword']);
            }
        }elseif($data['table']=='order'){
            if($data['keyword']!=''){
                $this->db->like('name',$data['keyword']);
            }
        }else{
            if($data['keyword']!=''){
                $this->db->like('title',$data['keyword']);
            }
        }
        if($date_start){
            $this->db->where('date_create >=',$date_start);
        }
        if($date_end){
            $this->db->where('date_create <=',$date_end);
        }
        unset($where['perpage']);
        $name_order = $data['table'].'_order';
        if($this->session->userdata($name_order)==''){
            $order = array('id','desc');
        }else{
            $order = $this->session->userdata($name_order);
        }
        $data['object_item'] = $this->Admin_model->get_data($data['table'],$where,$order,array($this->perpage,$this->offset));
        $this->total_rows =$this->Admin_model->get_number2($data['table'],$where);
        $this->phantrang($this->baseurl);

        //===================TINH SO BAI HIEN THI KHI PHAN TRANG===============
        if(!empty($this->offset)){
            $first=($this->input->get('page')*$this->perpage)-$this->perpage+1;
            $totalcur=$first+$this->perpage-1;
            if($totalcur>=$this->total_rows){
                $totalcur=$this->total_rows;
            }
        }else{
            $first=1;
            $totalcur=$first*$this->perpage;
            if($totalcur>=$this->total_rows){
                $totalcur=$this->total_rows;
            }
        }
        $data['notice_page']="Đang hiển thị từ<b> $first </b>tới <b>$totalcur</b> trong <b>$this->total_rows</b> kết quả";
        //===================TINH SO BAI HIEN THI KHI PHAN TRANG===============

        $this->load->view('Admin/'.$data['table'].'/list',$data );
    }
    function category($table,$where=''){
        switch ($table){
            case 'categories':
                $category=$this->Admin_model->get_data('categories',array('taxonomy'=>'cate_article','show'=>1));
                $this->getid($category,'parentid');
                return  $this->cate_html;
                break;
            case 'article':
                $category=$this->Admin_model->get_data('categories',array('taxonomy'=>'cate_article','show'=>1));
                $this->getid($category,'category');
                return  $this->cate_html;
                break;
            case 'product':
                $category=$this->Admin_model->get_data('categories',array('taxonomy'=>'cate_product','show'=>1));
                $this->getid($category,'category');
                return  $this->cate_html;
                break;
            default:
                return true;
                break;
        }

    }
    function getid($dat,$name=''){
        if($dat){
            foreach ( $dat as $v){
                $data[$v->parentid][]=$v;
            }
            $this->create_option($data,0,0,$name);
        }
        return $this->cate_html;
    }
    function create_option($data,$id=0,$num=0,$name=''){
        $name_id=$name;
        $num++;
        foreach ($data[$id] as $dulieu ){
            $this->cate_html .='<option id= "'.$name_id.'_'.$dulieu->id.'" value = "'.$dulieu->id.'">';
            if($id==0)
            {
                $this->cate_html  .=$this->add_rep($num).$dulieu->title;
            }
            else
            {
                $this->cate_html  .=$this->add_rep($num,1).$dulieu->title;
            }
            if(!empty($data[$dulieu->id])){
                $this->create_option($data,$dulieu->id,$num,$name_id);
            }
            $this->cate_html .='</option>';
        }
        $num--;
    }
    function add_rep($num,$parentid=0){
        $prep='';
        for($i=0;$i<=$num-1;$i++){
            if(($i==0 || $i!=$num-1) && $parentid !=0){
                $prep.='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }elseif($i==$num-1){
                $prep.='|---';
            }
        }
        return $prep;
    }
    function phantrang($url){
        $this->load->library('pagination');
        $config['base_url'] = $url;
        $config['total_rows'] = $this->total_rows;
        $config['per_page'] = $this->perpage;
        $config['query_string_segment'] = 'page';
        $config['use_page_numbers'] = TRUE;
        $config['page_query_string'] = TRUE;
        $config['num_links'] = 10;
        $config['full_tag_open']='<ul>';
        $config['full_tag_close']='</ul>';
        $config['first_link'] = '<<';
        $config['first_tag_open'] = '<li class="firt_pag">';
        $config['first_tag_close'] = '</li>';
        $config['last_link'] = '>>';
        $config['last_tag_open'] = '<li class="last_pag">';
        $config['last_tag_close'] = '</li>';
        $config['next_link'] = '&gt;';
        $config['next_tag_open'] = '<li>';
        $config['next_tag_close'] = '</li>';
        $config['prev_link'] = '&lt;';
        $config['prev_tag_open'] = '<li>';
        $config['prev_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li class="current"><a>';
        $config['cur_tag_close'] = '</a></li>';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $this->pagination->initialize($config);
    }
    private function auth(){
        $table=$this->input->get('table');
        $iduser=$this->session->userdata('loged');
        if(!empty($iduser)){
            $user=$this->Admin_model->get_one('users',array('id'=>$iduser));
            if(!empty($user)){
                $value_per=json_decode($user->permission);
                if(array_key_exists($table,$value_per)){
                    if(in_array($this->perid,$value_per->$table)){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}