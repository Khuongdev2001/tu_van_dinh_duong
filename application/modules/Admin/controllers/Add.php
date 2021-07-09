<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Add extends MX_Controller
{
    private $perid=1;
    private $table_per='';
    private $iduser='';
    private $act="Tạo";
    function __construct()
    {
        parent::__construct();
        $this->table_per=$this->Admin_model->gettable_permission();
        $this->iduser=$this->session->userdata('loged');
        if($this->auth()){
        }else{
            redirect(base_url().'manager/notice');
        }
    }
    public function index()
    {
        $data['table'] = $this->input->get('table');
        $user = $this->session->userdata('loged');    
        $data['object'] = $this->Admin_model->get_one($data['table'], array('id' => $user));
        $validate = $this->validate();
        $data['cate'] = $this->categories($data['table']);
        $data['language']=$this->Admin_model->get_data('language',array('show'=>1));
        $data['check'] = 0;
        if($data['table']=='users'){
            $data['tb_permission']=$this->Admin_model->gettable_permission();
        }
        if($validate==true){
            if($this->input->post()) {
                $item = $this->input->post();
                $item = $this->createdata($item, $data['table']);
                if ($data['table'] == 'users') {
                    $item_user = $this->Admin_model->get_one('users', array('username' => $item['username']));
                    if (!empty($item_user)) {
                        $data['check'] = 1;
                    } else {
                        $data['check'] = 0;
                        unset($item['passconf']);
                        unset($item['permission']);
                        $item['password'] = sha1(md5($item['password']));
                        $permisstion = '';
                        if (!empty($_POST['permission'])) {
                            $per=$this->input->post('permission');
                            $permisstion=json_encode($per);
                            $item['permission']=$permisstion;
                        }
                        $this->Admin_model->insert_data($data['table'], $item);
                        //==== INSERT HISTORY=====
                        $idrecord=$this->db->insert_id($data['table']);
                        $content_history=array(
                            'title'=>$this->act.' '.$this->table_per[$data['table']][1].' "<b>'.$this->Admin_model->get_object($data['table'],array('id'=>$idrecord),'title').'</b>"',
                            'iduser'=>$this->iduser
                        );
//                        $this->Admin_model->insert_data('history',$content_history);
                        //==== INSERT HISTORY=====
                        redirect(base_url() . 'manager/list?table=' . $data['table']);
                    }
                } else {
                    if (!empty($item['alias'])) {
                        $alias = $item['alias'];
                    }
                    $this->Admin_model->insert_data($data['table'], $item);

                    //==== INSERT HISTORY=====
                    $idrecord=$this->db->insert_id($data['table']);
                    $content_history=array(
                        'title'=>$this->act.' '.$this->table_per[$data['table']][1].' "<b>'.$this->Admin_model->get_object($data['table'],array('id'=>$idrecord),'title').'</b>"',
                        'iduser'=>$this->iduser
                    );
//                    $this->Admin_model->insert_data('history',$content_history);
                    //==== INSERT HISTORY=====
                    if ($data['table'] == 'product' || $data['table'] == 'article') {
                        if (!empty($item['tags'])) {
                            $tags = explode(',', $item['tags']);
                            foreach ($tags as $tag) {
                                $alitag = creat_alias($tag);
                                $arr = array(
                                    'title' => $tag,
                                    'alias' => $alitag,
                                    'idpost' => $idrecord,
                                    'taxo' => $data['table']
                                );
                                $this->Admin_model->insert_data('tags', $arr);
                            }
                        }
                    }
                    $id_insert_alias=0;
                    if (!empty($alias)) {
                        $item['taxonomy'] = $data['table'];
                        $this->Admin_model->insert_data('alias', array('id_field' => $idrecord, 'taxonomy' => $item['taxonomy'],'value' => $alias,'int_value' => abs(crc32($alias))));
                        $id_insert_alias=$this->db->insert_id('alias');
                        $this->Admin_model->update_data($data['table'],array('id'=>$idrecord),array('int_value' => abs(crc32($alias)),'alias' => $alias));
                        if($data['table'] =='categories'){
                            if(!empty($item['array_cate'])) {
                                $item['array_cate'] = $item['array_cate'] . ',' . $idrecord;
                            }else{
                                $item['array_cate'] = $idrecord;
                            }
                            $this->Admin_model->update_data($data['table'],array('id'=>$idrecord),array('array_cate'=>$item['array_cate']));
                        }
                    }
                    if (!empty($data['language']) && $id_insert_alias!=0) {
                        foreach($data['language'] as $lang){
                            $ali='alias'.$lang->value;
                            $tit='title'.$lang->value;
                            $val='value'.$lang->value;
                            $int_value='int_value'.$lang->value;
                            if (!empty($item[$ali])) {
                                $alias_lang[$lang->value] = $item[$ali];
                                $this->Admin_model->update_data('alias',array('id'=>$id_insert_alias), array($int_value => abs(crc32($alias_lang[$lang->value])),$val => $alias_lang[$lang->value]));
                                $this->Admin_model->update_data($data['table'],array('id'=>$idrecord),array($int_value => abs(crc32($alias_lang[$lang->value])),$ali => $alias_lang[$lang->value]));
                            }
                        }
                    }
                    redirect(base_url() . 'manager/list?table=' . $data['table']);
                }
            }
        }
        $this->load->view('Admin/'.$data['table'].'/add', $data);
    }
    public function createdata($data, $table)
    {
        $user = $this->session->userdata('loged');
        $object_user = $this->Admin_model->get_one('users', array('id' => $user));
        if ($table == 'article' || $table == 'categories' || $table == 'product') {
            date_default_timezone_set("Asia/Ho_Chi_Minh");
            $time=date('Y-m-d H:i:s');
            $data['date_update']=$time;
            if($data['meta_key']==''){
                $data['meta_key']=str_replace(" ", ",", $data['title']);
            }
            if($data['meta_des']==''){
                $data['meta_des']=$data['title'];
            }
            if($data['image']==''){
                $data['image']='skin/frontend/images/default.png';
            }
            // Xử lí Alias ----------------------------------------------
            if(empty($data['alias'])) {
                $data['alias']= creat_alias($data['title']);
                $data['alias'] = $this->create_alias($data['alias']);
            } else {
                $data['alias'] = $this->create_alias($data['alias']);
            }
            if(!empty($language)){
                foreach($language as $lang){
                    $ali='alias'.$lang->value;
                    $tit='title'.$lang->value;
                    $val='value'.$lang->value;
                    if(empty($data[$ali])) {
                        $data[$ali]= creat_alias($data[$tit]);
                        $data[$ali] = $this->create_alias($data[$ali]);
                    } else {
                        $data[$ali] = $this->create_alias($data[$ali]);
                    }
                    $alias_lang = $data[$ali];
                    $alias_lang2 = $data[$ali];
                    $dieukien_lang = 1;
                    while ($dieukien_lang) {
                        $nd_lang = array($val => $alias_lang);
                        $check_lang = $this->Admin_model->check_trung($nd_lang,'alias');
                        if (!empty($check_lang)) {
                            $dieukien_lang = $dieukien_lang + 1;
                            $alias_lang = $alias_lang2 . '-' . time();
                        } else {
                            $dieukien_lang = 0;
                        }
                    }
                    $data[$ali] = $alias_lang;
                }
            }

            $alias = $data['alias'];
            $alias2 = $data['alias'];
            $dieukien = 1;
            while ($dieukien) {
                $nd = array('value' => $alias);
                $check = $this->Admin_model->check_trung($nd, 'alias');
                if ($check) {
                    $dieukien = $dieukien + 1;
                    $alias = $alias2 . '-' . time();
                } else {
                    $dieukien = 0;
                }
            }
            $data['alias'] = $alias;
            // END XỬ LÝ ALIAS ------------------------------------------
            $data['iduser'] = $object_user->id;
        }
        if($table == 'product' || $table == 'article' || $table == 'categories'){
            if(empty($data['meta_title'])) {
                $data['meta_title']= $data['title'];
            }
            if(!empty($language)){
                foreach($language as $lang){
                    $ti='title'.$lang->value;
                    $meta='meta_title'.$lang->value;
                    if(empty($data[$meta])) {
                        $data[$meta] = $data[$ti];
                    }
                }
            }
//            end meta title
            if(empty($data['meta_des'])) {
                if(!empty($data['content_text'])){
                    $data['meta_des']= character_limiter(strip_tags($data['content_text']),255);
                }else{
                    $data['meta_des']= $data['title'];
                }
            }
            if(!empty($language)){
                foreach($language as $lang){
                    $fu='content_text'.$lang->value;
                    $ti='title'.$lang->value;
                    $meta_de='meta_des'.$lang->value;
                    if(empty($data[$meta_de]) ){
                        if (!empty($data[$fu])) {
                            $data[$meta_de] = character_limiter(strip_tags($data[$fu]), 255);
                        } else {
                            $data[$meta_de] = $data[$ti];
                        }
                    }

                }
            }
//            end meta key
            if(empty($data['meta_key'])) {
                if(!empty($data['content_text'])){
                    $data['meta_key']= character_limiter(strip_tags($data['content_text']),255);
                }else{
                    $data['meta_key']= $data['title'];
                }
            }
            if(!empty($language)){
                foreach($language as $lang){
                    $fu='content_text'.$lang->value;
                    $ti='title'.$lang->value;
                    $meta_key='meta_key'.$lang->value;
                    if(empty($data[$meta_key])) {
                        if (!empty($data[$fu])) {
                            $data[$meta_key] = character_limiter(strip_tags($data[$fu]), 255);
                        } else {
                            $data[$meta_key] = $data[$ti];
                        }
                    }
                }
            }
        }
        if($table == 'product' || $table == 'article'){
            $data['array_cate'] = ','.implode(',', $data['id_cate']).',';
            unset($data['category']);
            $data['category']=$data['id_cate'][0];
            unset($data['id_cate']);

        }
        if($table == 'product' ){
            if(!empty($data['idpr'])){
                $data['idpr'] = ','.implode(',',$data['idpr']).',';
            }
            if(!empty($data['img'])){
                $data['img'] = json_encode($data['img']);
//                $data['prices'] = json_encode($data['prices']);
//                $data['mili'] = json_encode($data['mili']);
            }
        }
        if($table == 'article' ){
            if(!empty($data['more_cate'])){
                $data['more_cate'] =json_encode($data['more_cate']);
            }
            if(!empty($data['img'])){
                $data['img'] = json_encode($data['img']);
                if(!empty($data['link'])){
                    $data['link'] = json_encode($data['link']);
                }
                if(!empty($data['rel'])){
                    $data['rel'] = json_encode($data['rel']);
                }
            }

        }
        if($table == 'internal' ){
            if(!empty($data['img'])){
                $data['img'] = json_encode($data['img']);
            }

        }
        if($table=='categories'){

            if(!empty($data['img'])){
                $data['img'] = json_encode($data['img']);
            }else{
                $data['img']='';
            }
            if(isset($data['parentid'])) {
                $data['array_cate'] = implode(',', $data['parentid']);
                $data['parentid'] = end($data['parentid']);
            }else{
                $data['parentid']=0;
                $data['array_cate'] ='';
            }
        }
        if($table=='ads'){
            unset($data['taxonomy']);
            unset($data['parentid']);
            if(isset($data['category'])){
                $data['number_order'] = ','.implode(',',$data['number_order']).',';
                $data['array_cate'] = json_encode($data['array_cate']);
                $data['category'] = ','.implode(',',$data['category']).',';
            }
        }
        return $data;
    }
    public function create_alias($title)
    {
        $alias = convert_accented_characters($title);
        return $alias;
    }
    public function categories($table=''){
        switch ($table) {
            case 'categories':
                $cate = $this->Admin_model->get_data($table,array('show'=>1,'parentid'=>0,'taxonomy'=>'cate_article'));
                break;
            case 'ads':
                $cate = $this->Admin_model->get_data('categories',array('show'=>1,'parentid !='=>0,'type_categories'=>3));
                break;
            case 'article':
                $cate = $this->Admin_model->get_data('categories',array('show'=>1,'parentid'=>0,'taxonomy'=>'cate_article'));
                break;
            case 'product':
                $cate = $this->Admin_model->get_data('categories',array('show'=>1,'parentid'=>0,'taxonomy'=>'cate_product'));
                break;
            default:
                $cate='';
                $cate_show='';
        }
        return $cate;
    }
    public function validate(){
        $table = $this->input->get('table');
        switch ($table) {
            case 'users':
                $this->form_validation->set_rules('username', 'Tài khoản', 'required');
                $this->form_validation->set_rules('password', 'Mật khẩu', 'required');
                $this->form_validation->set_rules('passconf', 'Nhập lại mật khẩu', 'required|matches[password]');
                // $this->form_validation->set_rules('email', 'Email', 'required|valid_email');
                break;
            case 'categories':
                $this->form_validation->set_rules('title', 'Tên chuyên mục', 'required');
                break;
            case 'article':
                $this->form_validation->set_rules('title', 'Tên bài viết', 'required');
                $this->form_validation->set_rules('id_cate[]', 'Tên danh mục', 'required');
                $this->form_validation->set_error_delimiters('', '');
                break;
            case 'product':
                $this->form_validation->set_rules('title', 'Tên sản phẩm', 'required');
                $this->form_validation->set_rules('id_cate[]', 'Tên danh mục', 'required');
                $this->form_validation->set_rules('category[]', 'Tên danh mục', 'required');
                break;
            case 'city':
                $this->form_validation->set_rules('title', 'Tên khu vực', 'required');
                break;
            case 'history':
                $this->form_validation->set_rules('title', 'Tên khu vực', 'required');
                break;
            case 'price':
                $this->form_validation->set_rules('title', 'Tên khoảng giá', 'required');
                break;
            case 'ads':
                $this->form_validation->set_rules('title', 'Tên quảng cáo', 'required');
                break;
            default:
                    return true;
                break;
        }
        if ($this->form_validation->run() == FALSE) {
            return false;
        } else {
            return true;
        }
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
