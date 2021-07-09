<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once( 'HtmlDiff.php' );
class Edit extends MX_Controller
{
    private $perid = 2;
    private $table_per = '';
    private $iduser = '';
    private $act = "Sửa";
    private $tb_setting = 'setting';
    private $tb_users = 'users';
    private $sele = '';
    private $html = '';
    private $count = 1;
    function __construct()
    {
        parent::__construct();
        $this->table_per = $this->Admin_model->gettable_permission();
        $this->iduser = $this->session->userdata('loged');
        if ($this->auth()) {
        } else {
            redirect(base_url() . 'manager/notice');
        }
    }
    public function index()
    {
        $user = $this->session->userdata('loged');
        if(isset($_SERVER["HTTP_REFERER"])){
            if(isset($_POST['url_referer'])){
                $data['url_referer']=$_POST['url_referer'];
            }else{
                $data['url_referer']=$_SERVER["HTTP_REFERER"];
            }
        }
        if (!empty($user)) {
            $data['object_user'] = $this->Admin_model->get_one('users', array('id' => $user));
            $data['table'] = $this->input->get('table');
            $id_post = $this->input->get('id');
            $data['item_post'] = $this->Admin_model->get_one($data['table'], array('id' => $id_post));

            $data['check'] = 0;
            $data['cate'] = $this->categories($data['table']);
            $data['language']=$this->Admin_model->get_data('language',array('show'=>1));
            if ($data['table'] == 'product' || $data['table'] == 'article' || $data['table'] == 'categories') {
                $data['alias_meta'] = $this->Admin_model->get_one('alias', array('id_field' => $id_post, 'taxonomy' => $data['table']));
            }
//            if ($data['table'] == 'categories') {
//                $data['alias_meta'] = $this->Admin_model->get_one('alias', array('id_field' => $id_post, 'taxonomy' => $data['item_post']->taxonomy));
//            }
            if ($data['table'] == 'users') {
                $data['tb_permission'] = $this->Admin_model->gettable_permission();
            }
            if ($data['table'] == 'ads') {
                $categories = $this->Admin_model->get_data('categories');
                $data['catelog'] = '';
                if (!empty($categories)) {
                    foreach ($categories as $cte) {
                        $data['catelog'][$cte->id] = $cte->title;
                    }
                }
            }
            if($data['table'] != 'setting'){
                if($data['object_user']->idgroup !=1){
                    if($data['item_post'] ->iduser != $data['object_user'] -> id){
                        redirect(base_url() . 'manager/notice');
                    }
                }
            }
            if (!empty($_POST)) {

                $url_callback= $this->input->post('url_referer');
                $validate = $this->validate($this->input->post('reset_pass'));
                if ($validate == true) {
                    $item = $this->input->post();
                    unset($item['url_referer']);
                    unset($item['permission']);
                    $item = $this->createdata($item, $data['table'], $data['item_post']);
                    if ($data['table'] == 'users') {
                        if ($this->input->post('reset_pass') == 1) {
                            $item['old_password'] = sha1(md5($item['old_password']));
                            if ($item['old_password'] == $data['item_post']->password) {
                                $data['check'] = 0;
                                $item['password'] = sha1(md5($item['news_password']));
                            } else {
                                $data['check'] = 1;
                            }
                        }
                        unset($item['news_passconf']);
                        unset($item['news_password']);
                        unset($item['old_password']);
                        unset($item['reset_pass']);
                        if (!empty($_POST['permission'])) {
                            $permisstion = json_encode($this->input->post('permission'));
                            $item['permission'] = $permisstion;
                        } else {
                            $item['permission'] = '';
                        }
                        $this->Admin_model->update_data($data['table'], array('id' => $id_post), $item);
                        //==== INSERT HISTORY=====
                        $idrecord = $id_post;
                        $content_history = array(
                            'title' => $this->act . ' ' . $this->table_per[$data['table']][1] . ' "<b>' . $this->Admin_model->get_object($data['table'], array('id' => $idrecord), 'title') . '</b>"',
                            'iduser' => $this->iduser
                        );
//                        $this->Admin_model->insert_data('history', $content_history);
                        //==== INSERT HISTORY=====

                        if ($data['check'] == 0) {

                            redirect(base_url() . 'manager/edit?table=' . $data['table'].'&id='.$id_post.'&success=1');
                        }
                    } else {
                        $old_item =$this->Admin_model->get_one($data['table'], array('id' => $id_post));
                        if (!empty($item['alias'])) {
                            $alias = $item['alias'];
                        }
                        if (!empty($alias)) {

                            $item_alias=$this->Common_model->get_one('alias', array('id_field ' => $id_post,'taxonomy'=>$data['table']));
                            if(!empty($item_alias)){
                                $this->Common_model->update_data('alias', array('id_field ' => $id_post,'taxonomy'=>$data['table']), array('value' => $alias));

                            }else{
                                $this->Common_model->insert_data('alias', array('id_field ' => $id_post,'taxonomy'=>$data['table'],'value' => $alias));
                            }
                            $this->Common_model->update_data($data['table'],array('id'=>$id_post),array('alias'=>$alias));


                        }
                        if (!empty($data['language'])) {
                            foreach($data['language'] as $lang){
                                $ali='alias'.$lang->value;
                                $tit='title'.$lang->value;
                                $val='value'.$lang->value;
                                $int_value='int_value'.$lang->value;
                                if (!empty($item[$ali])) {
                                    $alias_lang[$lang->value] = $item[$ali];
                                    $this->Admin_model->update_data('alias',array('id_field ' => $id_post,'taxonomy'=>$data['table']), array($int_value => abs(crc32($alias_lang[$lang->value])),$val => $alias_lang[$lang->value]));
                                    $this->Admin_model->update_data($data['table'],array('id'=>$id_post),array($int_value => abs(crc32($alias_lang[$lang->value])),$ali => $alias_lang[$lang->value]));
                                }
                            }
                        }
                        $this->Admin_model->update_data($data['table'], array('id' => $id_post), $item);


                        if ($data['table'] == 'product' || $data['table'] == 'article') {


                            //==== INSERT HISTORY=====
                            $idrecord = $id_post;
                            $diff = new HtmlDiff($old_item->title, $item['title']  );
                            $diff->build();
                            $title_his= $diff->getDifference();

                            $diff1 = new HtmlDiff($old_item->content_text, $item['content_text']);
                            $diff1->build();
                            $content_his = $diff1->getDifference();
                            $content_history = array(
                                'title' => $this->act . ' ' . $this->table_per[$data['table']][1] . ' "<b>' . $this->Admin_model->get_object($data['table'], array('id' => $idrecord), 'title') . '</b>"',
                                'table_his' => $data['table'],
                                'title_his' => $title_his,
                                'content' => $content_his,
                                'iduser' => $this->iduser
                            );
                            $this->Admin_model->insert_data('history', $content_history);

                        }
                        //==== INSERT HISTORY=====
                        if ($data['table'] == 'product' || $data['table'] == 'article') {
                            if (!empty($item['tags'])) {
                                $tags = explode(',', $item['tags']);
                                $this->Admin_model->delete_data('tags', array('idpost'=>$idrecord));
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

                        redirect(base_url() . 'manager/edit?table=' . $data['table'].'&id='.$id_post.'&success=1');

                    }
                }
            }
            $this->load->view('Admin/' . $data['table'] . '/edit', $data);
        } else {
            redirect(base_url() . 'manager');
        }
    }
    public function createdata($data, $table, $post)
    {
        $language=$this->Admin_model->get_data('language',array('show'=>1));
        $user = $this->session->userdata('loged');
        $object_user = $this->Admin_model->get_one('users', array('id' => $user));
        if ($table == 'article' || $table == 'categories' || $table == 'product') {
            if($data['image']==''){
                $data['image']='skin/frontend/images/default.png';
            }
            // Xử lí Alias ----------------------------------------------
            if (empty($data['alias'])) {
                $data['alias'] = creat_alias($data['title']);
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
                        $id_lang = $this->input->get('id', true);
                        $nd_lang = array($val => $alias_lang, 'id_field !=' => $id_lang);
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
                $id = $this->input->get('id', true);
                $nd = array('value' => $alias, 'id_field !=' => $id);
                $check = $this->Admin_model->check_trung($nd, 'alias');
                if ($check) {
                    $dieukien = $dieukien + 1;
                    $alias = $alias2 . '-' . time();
                } else {
                    $dieukien = 0;
                }
            }
            $data['alias'] = $alias;
            //====CREATE ALIAS LANGUAGE
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
        if ($table == 'product' || $table == 'article') {
            $data['array_cate'] = ','.implode(',', $data['id_cate']).',';
            unset($data['category']);
            $data['category']=$data['id_cate'][0];
            unset($data['id_cate']);


        }
        if($table == 'product' ){
            if (!empty($data['img'])){
                $data['img'] = json_encode($data['img']);
            } else {
                $data['img'] = '';
            }
        }
        if($table == 'article' ){

            if (!empty($data['img'])){
                $data['img'] = json_encode($data['img']);
                if(!empty($data['link'])){
                    $data['link'] = json_encode($data['link']);
                }
                if(!empty($data['rel'])){
                    $data['rel'] = json_encode($data['rel']);
                }
            } else {
                $data['img'] = '';
                $data['link']= '';
                $data['rel']='';
            }
        }
        if ($table == 'categories') {
            if (isset($data['parentid'])) {
                $data['array_cate'] = implode(',', $data['parentid']);
                $data['array_cate'] = $data['array_cate'] . ',' . $post->id;
                $data['parentid'] = end($data['parentid']);
            } else {
                $data['parentid'] = 0;
                $data['array_cate'] = $post->id;
            }
            if(!empty($data['img'])){
                $data['img'] = json_encode($data['img']);
            }else{
                $data['img']='';
            }

        }
        if ($table == 'ads') {
            unset($data['taxonomy']);
            unset($data['parentid']);
            if (isset($data['category'])) {
                $data['number_order'] = ',' . implode(',', $data['number_order']) . ',';
                $data['array_cate'] = json_encode($data['array_cate']);
                $data['category'] = ',' . implode(',', $data['category']) . ',';
            }
        }
        return $data;
    }

    public function create_alias($title)
    {
        $alias = convert_accented_characters($title);
        return $alias;
    }
    public function categories($table = '')
    {
        $id_post = $this->input->get('id');
        $item_post = $this->Admin_model->get_one($table, array('id' => $id_post));
        switch ($table) {
            case 'categories':
                $cate = $this->create_seleted($table, $item_post, 'parentid');
                break;
            case 'ads':
                $cate = $this->Admin_model->get_data('categories',array('show'=>1,'parentid !='=>0,'type_categories'=>3));
                break;
            case 'article':
                $cate = $this->create_seleted($table, $item_post, 'category');
                break;
            case 'product':
                $cate = $this->create_seleted($table, $item_post, 'category');
                break;
            default:
                $cate = '';
                break;
        }
        return $cate;
    }
    public function create_seleted($table, $item_post = '', $name = '')
    {
        $this->sele = '';
        if (!empty($item_post)) {
            if ($table == 'categories') {
                $data['post_one'] = $item_post;
                if (!empty($data['post_one'])) {
                    $arr_cat = explode(',', $item_post->array_cate);
                    $data['post_child'] = $this->Admin_model->get_data('categories', array('show' => 1, 'taxonomy' => $data['post_one']->taxonomy, 'parentid' => $data['post_one']->parentid));
                    $data['post_all'] = $this->Admin_model->get_data('categories', array('show' => 1, 'taxonomy' => $item_post->taxonomy));
                    $data['post_array'] = '';
                    foreach ($arr_cat as $cat) {
                        $data['post_array'][] = $this->Admin_model->get_one('categories', array('show' => 1,'id'=>$cat));
                    }
                    $data['arr_child'] = '';
                    $data['name'] = $name;
                    foreach ($data['post_all'] as $obj) {
                        $data['arr_child'][$obj->parentid][] = $obj;
                    }
                    return $this->load->view('Admin/view_cate_edit', $data, true);
                }
            } else {
                if (!empty($item_post)) {
                    $arr_cat = explode(',', $item_post->array_cate);
                    $arr_cat = array_filter($arr_cat);
                    $data['post_all'] = $this->Admin_model->get_data('categories', array('show' => 1, 'parentid' => 0, 'taxonomy' => 'cate_' . $table));
                    $data['post_array'] = '';
                    foreach ($arr_cat as $cat) {
                        $data['post_array'][] = $this->Admin_model->get_one('categories', array('show' => 1,'id'=>$cat));
                    }
                    $data['name'] = $name;
                    return $this->load->view('Admin/view_cate_post', $data, true);
                } else {
                    if ($table == 'article' || $table == 'product') {
                        $data['cate_all'] = $this->Admin_model->get_data('categories', array('show' => 1, 'parentid' => 0, 'taxonomy' => 'cate_' . $table));
                        return $this->load->view('Admin/view_cate_default', $data, true);
                    }
                }

            }

        }
    }

    public function level_number($id, $count = 1)
    {
        $cate_one = $this->Admin_model->get_one('categories', array('id' => $id));
        if (!empty($cate_one) && $cate_one->parentid != 0) {
            $this->count = $count + 1;
            $this->level_number($cate_one->parentid, $this->count);
        }
        return $this->count;
    }
    public function validate($reset_pass = 0)
    {
        $table = $this->input->get('table');
        switch ($table) {
            case 'users':
                $this->form_validation->set_rules('username', 'Tài khoản', 'required');
                if ($reset_pass > 0) {
                    $this->form_validation->set_rules('old_password', 'Mật khẩu cũ', 'required');
                    $this->form_validation->set_rules('news_password', 'Mật khẩu mới', 'required');
                    $this->form_validation->set_rules('news_passconf', 'Nhập lại mật khẩu mới', 'required|matches[news_password]');
                }
                $this->form_validation->set_rules('email', 'Email', 'required|valid_email');
                break;
            case 'categories':
                $this->form_validation->set_rules('title', 'Tên chuyên mục', 'required');
                break;
            case 'article':
                $this->form_validation->set_rules('title', 'Tên chuyên mục', 'required');
                $this->form_validation->set_rules('id_cate[]', 'Tên danh mục', 'required');
                break;
            case 'product':
                $this->form_validation->set_rules('title', 'Tên chuyên mục', 'required');
                $this->form_validation->set_rules('id_cate[]', 'Tên danh mục', 'required');
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
    public function quick_edit(){
        $id=$this->input->post('id');
        $table=$this->input->post('table');
        $title=$this->input->post('title');
        $alias= creat_alias($title);
        $alias2= creat_alias($title);
        $dieukien = 1;
        while ($dieukien) {
            $nd = array('value' => $alias, 'id_field !=' => $id);
            $check = $this->Admin_model->check_trung($nd, 'alias');
            if ($check) {
                $dieukien = $dieukien + 1;
                $alias = $alias2 . '-' . $dieukien;
            } else {
                $dieukien = 0;
            }
        }
        $post=$this->Admin_model->get_one($table,array('id'=>$id));
        if(!empty($post) && $table !='slide'&& $table !='ads' ){
            if($post->alias !=$alias){
                $this->Admin_model->insert_data('redirect',array('url_old'=>$post->alias,'url_new'=>$alias,'id_post'=>$id,'type'=>$table));
            }
        }
        if($table !='slide' && $table !='ads'){
            $this->Admin_model->update_data($table, array('id' => $id), array('title'=>$title,'alias'=>$alias,'int_value' => abs(crc32($alias))));
        }else{
            $this->Admin_model->update_data($table, array('id' => $id), array('title'=>$title));
        }
        $this->Admin_model->update_data('alias', array('id_field' => $id,'taxonomy'=>$table), array('value'=>$alias,'int_value' => abs(crc32($alias))));
    }
    public function quick_update_time(){
        $id=$this->input->post('id');
        $table=$this->input->post('table');
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $time=date('Y-m-d H:i:s');
        $this->Admin_model->update_data($table, array('id' => $id), array('date_update'=>$time));
    }
    public function quick_duplicate(){
        $id=$this->input->post('id');
        $table=$this->input->post('table');
        date_default_timezone_set("Asia/Ho_Chi_Minh");
        $time=date('Y-m-d H:i:s');
        if($table=='article' || $table=='product'){
            $post = $this->Common_model->get_one($table,array('id'=>$id));
            if(!empty($post)){
                $alias_post =  $this->Common_model->get_one('alias', array('id_field'=>$post->id, 'value' => $post->alias));
                if(!empty($alias_post)){
                    $alias = $alias_post->value.'-'.time();
                    $post1 = '';
                    foreach ($post as $key => $value){
                        $post1[$key] =  $value;
                    }
                    if(!empty($post1)){
                        $post1['alias']=$alias;
                        unset($post1['id']);
                        unset($post1['date_create']);
                        $this->Admin_model->insert_data($table, $post1);
                        $insert_id = $this->db->insert_id();
                        $arr_alias = array(
                            'id_field'=>$insert_id,
                            'value' =>$alias,
                            'taxonomy'=>$table,
                            'int_value'=>abs(crc32($alias))
                        );
                        $this->Admin_model->insert_data('alias', $arr_alias);

                    }

                }
//                $this->Admin_model->update_data($table, array('id' => $id), array('date_update'=>$time));
            }
        }

    }
    private function auth()
    {
        $table = $this->input->get('table');
        $iduser = $this->session->userdata('loged');
        if (!empty($iduser)) {
            $user = $this->Admin_model->get_one('users', array('id' => $iduser));
            if (!empty($user)) {
                $value_per = json_decode($user->permission);
                if (array_key_exists($table, $value_per)) {
                    if (in_array($this->perid, $value_per->$table)) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
