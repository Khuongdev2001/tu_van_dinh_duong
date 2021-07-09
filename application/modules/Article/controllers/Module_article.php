<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_article extends MX_Controller
{

    private $per_page = 9;
    private $total_rows = 6;

    public function __construct()
    {
        parent::__construct();

        $this->lang->load('atta_lang', 'vn');
    }

    public function index()
    {

    }

    public function category()
    {
        $alias = str_replace('.html','', $this->uri->segment(1));
        $obj_alias = $this->Common_model->get_one('alias', array($GLOBALS['value'] => $alias));
        $arr_cate = $GLOBALS['arr_cate'];
        $arr_obj = array();
        $arrCat = array();
        $cateChildPro = array();
        $cateChildArt = array();
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
        if(!empty($cateParentPro)){
            foreach ($cateParentPro as $objCat){
                foreach ($arr_cate as $obj) {
                    if($obj->parentid == $objCat->id){
                        $cateChildPro[$objCat->id][] = $obj;
                    }
                }
            }

        }

        $data['cateParentPro'] = $cateParentPro;
        $data['cateChildPro'] = $cateChildPro;
        $data['cateChildArt'] = $cateChildArt;
        $category = $arrCat[$obj_alias->id_field];
        if (!empty($category)) {
            $arr = explode(',', $category->array_cate);
            if(!empty($arr_obj[$category->id])){
                $data['cateSon'] = $arr_obj[$category->id];
            }else{
                $data['cateSon'] = $arr_obj[$category->parentid];
            }

            foreach ($arr as $objCatePro){
                $breadPro[]= $arrCat[$objCatePro];
            }
            $data['breadPro'] = $breadPro;
            $data['sett'] = $GLOBALS['sett'];
            $data['proStick'] = $this->Common_model->get_data('product', array('show' => 1,'stick'=>1), array('id', 'desc'), 8);
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $category->id, array());
            $data['cate'] = $category;
            if ($category->number_post > 0) {
                $this->per_page = $category->number_post;
            }
            $orderby = array('id', 'desc');
            $page = '';
            if (isset($_GET['per_page']) && !empty($_GET['per_page'])) {
                $offset = ($_GET['per_page'] - 1) * $category->number_post;
                $page = rear('page') . $_GET['per_page'];
            } else {
                $offset = 0;
            }
            $data['news_art'] = $this->Common_model->get_data('article', array('show' => 1), array('id','desc'),10);
            if ($category->type_categories == 0) {
                $data['content'] = $this->load->view('Article/Article_category_one', $data, true);
            }else {
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $data['article'] = $this->Common_model->get_data('article', array('show' => 1), $orderby, array($this->per_page, $offset));
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $this->total_rows = $this->Common_model->get_total('article', array('show' => 1));
                $this->paging1();
                $data['total'] = $this->total_rows;
                $data['content'] = $this->load->view('Article/Article_category', $data, true);
            }


            $data['fb_image'] = $category->image;
            $data['meta_key'] = meta_site($category, 'meta_key') . $page;
            $data['meta_des'] = meta_site($category, 'meta_des') . $page;
            $data['title'] = show_meta($category) . $page;
            $data['banner'] = $category->banner;
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }

    public function detail()
    {
        $alias = str_replace('.html','', $this->uri->segment(1));
        $obj_alias = $this->Common_model->get_one('alias', array('value' => $alias));
        $article = $this->Common_model->get_one('article', array('id' => $obj_alias->id_field));
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
        if(!empty($cateParentPro)){
            foreach ($cateParentPro as $objCat){
                foreach ($arr_cate as $obj) {
                    if($obj->parentid == $objCat->id){
                        $cateChildPro[$objCat->id][] = $obj;
                    }
                }
            }

        }

        $data['cateParentPro'] = $cateParentPro;
        $data['cateChildPro'] = $cateChildPro;
        if (!empty($article)) {
            $view = (int)$article->views + 1;
            $this->Common_model->update_data('article', array('id' => $article->id), array('views' => $view));
            $category = $arrCat[$article->category];
            $arr = explode(',', $category->array_cate);
            foreach ($arr as $objCatePro){
                $breadPro[]= $arrCat[$objCatePro];
            }
            $data['breadPro'] = $breadPro;
            $data['sett'] = $GLOBALS['sett'];
            $data['news_art'] = $this->Common_model->get_data('article', array('show' => 1), array('id','desc'),10);
            $data['proStick'] = $this->Common_model->get_data('product', array('show' => 1,'stick'=>1), array('id', 'desc'), 8);
            $data['article'] = $article;
            $data['tags'] = $this->Common_model->get_data('tags', array('show' => 1, 'idpost' => $article->id), array('id', 'desc'));
            $data['cate'] = $category;
            if(!empty($arr_obj[$category->id])){
                $data['cateSon'] = $arr_obj[$category->id];
            }else{
                $data['cateSon'] = $arr_obj[$category->parentid];
            }
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $category->id, array());

            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['more_art'] = $this->Common_model->get_data('article', array('id !=' => $article->id), array('id', 'desc'),20);
            $data['content'] = $this->load->view('Article/Article_detail', $data, true);
            if(!empty($article->img_f)){
                $data['fb_image'] = base_url().$article->img_f;
            }else{
                $data['fb_image'] = base_url().$article->image;
            }
            $data['meta_key'] = meta_site($article, 'meta_key');
            $data['meta_des'] = meta_site($article, 'meta_des');
            $data['title'] = show_meta($article);
            $data['banner'] = $category->banner;
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }
    function rating_bar($id, $units='',$static='') {

        $rating_unitwidth     = 20;
// require('_config-rating.php');  get the db connection info

//set some variables
        $ip = $_SERVER['REMOTE_ADDR'];
        if (!$units) {$units = 5;}
        if (!$static) {$static = FALSE;}

// get votes, values, ips for the current rating bar
//@$query=mysqli_query($rating_conn,"SELECT total_votes, total_value, used_ips FROM $rating_dbname.$rating_tableName WHERE id='$id' ");
        $query=$this->Common_model->get_total('ratings1',array('id'=>$id));
// insert the id in the DB if it doesn't exist already
// see: http://www.masugadesign.com/the-lab/scripts/unobtrusive-ajax-star-rating-bar/#comment-121
        if ($query == 0) {

//$sql = "INSERT INTO $rating_dbname.$rating_tableName (`id`,`total_votes`, `total_value`, `used_ips`) VALUES ('$id', '0', '0', '')";
            $arr =array(
                'id'=>$id,
                'total_votes'=>0,
                'total_value'=>0,
                'used_ips'=>''
            );
            $this->Common_model->insert_data('ratings1',$arr);
        }

        $numbers=$this->Common_model->get_one('ratings1',array('id'=>$id));

        if ($numbers->total_votes < 1) {
            $count = 0;
        } else {
            $count=$numbers->total_votes; //how many votes total
        }
        $current_rating=$numbers->total_value; //total number of rating added together and stored
        $tense=($count==1) ? "vote" : "votes"; //plural form votes/vote

// determine whether the user has voted, so we know how to draw the ul/li
        $this->db->like('used_ips',$ip);
        @$voted=$this->Common_model->get_total('ratings1',array('id'=>$id));

// now draw the rating bar
        if($current_rating > 0){
            $rating_width = @number_format($current_rating/$count,0)*$rating_unitwidth;
            $rating1 = @number_format($current_rating/$count,0);
            $rating2 = @number_format($current_rating/$count,0);
        }else{
            $rating_width =0;
            $rating1 = 0;
            $rating2 = 0;
        }
        if ($static == 'static') {
            $static_rater = array();
            $static_rater[] .= "\n".'<div class="ratingblock">';
            $static_rater[] .= '<div id="unit_long'.$id.'">';
            $static_rater[] .= '<ul id="unit_ul'.$id.'" class="unit-rating" style="width:'.$rating_unitwidth*$units.'px;">';
            $static_rater[] .= '<li class="current-rating" style="width:'.$rating_width.'px;">Currently '.$rating2.'/'.$units.'</li>';
            $static_rater[] .= '</ul>';
            $static_rater[] .= '<p class="static">'.$id.'. Xếp hạng: <strong> '.number_format($rating1,0).'</strong>/'.$units.' ('.$count.' '.$tense.' cast) <em>This is \'static\'.</em></p>';
            $static_rater[] .= '</div>';
            $static_rater[] .= '</div>'."\n\n";

            return join("\n", $static_rater);


        } else {

            $rater ='';
            $rater.='<div class="ratingblock">';

            $rater.='<div id="unit_long'.$id.'">';
            $rater.='  <ul id="unit_ul'.$id.'" class="unit-rating" style="width:'.$rating_unitwidth*$units.'px;">';
            $rater.='     <li class="current-rating" style="width:100px;">Currently '.$rating2.'/'.$units.'</li>';

            for ($ncount = 1; $ncount <= $units; $ncount++) { // loop from 1 to the number of units
                if(!$voted) { // if the user hasn't yet voted, draw the voting stars
                    $rater.='<li><a href="dbc1?j='.$ncount.'&amp;q='.$id.'&amp;t='.$ip.'&amp;c='.$units.'" title="'.$ncount.' out of '.$units.'" class="r'.$ncount.'-unit rater" rel="nofollow">'.$ncount.'</a></li>';
                }
            }
            $ncount=0; // resets the count

            $rater.='  </ul>';
            $rater.='  <span class="hreview-aggregate"><span class="item"><span class="fn"><p';
            if($voted){ $rater.=' class="voted"'; }
            $rater.='>Kết quả: </span></span><span class="rating"><span class="average"><strong> 5</span>/<span class="best">'.$units.' </span> </strong>- (<span class="votes">'.number_format($count,0).'</span> phiếu bầu)<span class="summary"></span></span></span>';
            $rater.='  </p>';
            $rater.='</div>';
            $rater.='</div>';
            return $rater;
        }
    }
    function rpc(){

        header("Cache-Control: no-cache");
        header("Pragma: nocache");

        $rating_unitwidth     = 20;
        $vote_sent =$_GET['j'];
        $id_sent = $_GET['q'];
        $ip_num = $_GET['t'];
        $units = $_GET['c'];
        $ip = $_SERVER['REMOTE_ADDR'];

        if ($vote_sent > $units) die("Sorry, vote appears to be invalid."); // kill the script because normal users will never see this.

        @$numbers =$this->Common_model->get_one('ratings1',array('id'=>$id_sent));
        $checkIP = unserialize($numbers->used_ips);
        $count = $numbers->total_votes; //how many votes total
        $current_rating = $numbers->total_value; //total number of rating added together and stored
        $sum = $vote_sent+$current_rating; // add together the current vote value and the total vote value
        $tense = ($count==1) ? "vote" : "votes"; //plural form votes/vote
        ($sum==0 ? $added=0 : $added=$count+1);

// if it is an array i.e. already has entries the push in another value
        ((is_array($checkIP)) ? array_push($checkIP,$ip_num) : $checkIP=array($ip_num));
        $insertip=serialize($checkIP);

//IP check when voting
        $this->db->like('used_ips',$ip);
        @$voted=$this->Common_model->get_total('ratings1',array('id'=>$id_sent));
        if(!$voted) {     //if the user hasn't yet voted, then vote normally...

            if (($vote_sent >= 1 && $vote_sent <= $units) && ($ip == $ip_num)) { // keep votes within range, make sure IP matches - no monkey business!
                $arr =array(
                    'total_votes'=>$added,
                    'total_value'=>$sum,
                    'used_ips'=>$insertip
                );
                $this->Common_model->update_data('ratings1',array('id'=>$id_sent),$arr);
            }
        } //end for the "if(!$voted)"
// these are new queries to get the new values!
        @$numbers =$this->Common_model->get_one('ratings1',array('id'=>$id_sent));
        $count = $numbers->total_votes;//how many votes total
        $current_rating = $numbers->total_value;//total number of rating added together and stored
        $tense = ($count==1) ? "phiếu" : "votes"; //plural form votes/vote

// $new_back is what gets 'drawn' on your page after a successful 'AJAX/Javascript' vote

        $new_back = array();

        $new_back[] .= '<ul class="unit-rating" style="width:'.$units*$rating_unitwidth.'px;">';
        $new_back[] .= '<li class="current-rating" style="width:'.@number_format($current_rating/$count,0)*$rating_unitwidth.'px;">Current rating.</li>';
        $new_back[] .= '<li class="r1-unit">1</li>';
        $new_back[] .= '<li class="r2-unit">2</li>';
        $new_back[] .= '<li class="r3-unit">3</li>';
        $new_back[] .= '<li class="r4-unit">4</li>';
        $new_back[] .= '<li class="r5-unit">5</li>';
        $new_back[] .= '<li class="r6-unit">6</li>';
        $new_back[] .= '<li class="r7-unit">7</li>';
        $new_back[] .= '<li class="r8-unit">8</li>';
        $new_back[] .= '<li class="r9-unit">9</li>';
        $new_back[] .= '<li class="r10-unit">10</li>';
        $new_back[] .= '</ul>';
        $new_back[] .= '<p class="voted">'.$id_sent.'. Xếp hạng: <strong>'.@number_format($sum/$added,0).'</strong>/'.$units.' ('.$count.' '.$tense.' bầu) ';
        $new_back[] .= '<span class="thanks">Xin cám ơn!</span></p>';

        $allnewback = join("\n", $new_back);

// ========================

//name of the div id to be updated | the html that needs to be changed
        $output = "unit_long$id_sent|$allnewback";
        echo $output;
    }
    function dbc(){
        header("Cache-Control: no-cache");
        header("Pragma: nocache");
        $vote_sent =$_GET['j'];
        $id_sent = $_GET['q'];
        $ip_num = $_GET['t'];
        $units = $_GET['c'];
        $ip = $_SERVER['REMOTE_ADDR'];
        $referer  = $_SERVER['HTTP_REFERER'];

        if ($vote_sent > $units) die("Sorry, vote appears to be invalid."); // kill the script because normal users will never see this.
        @$numbers =$this->Common_model->get_one('ratings1',array('id'=>$id_sent));
        $checkIP = unserialize($numbers->used_ips);
        $count = $numbers->total_votes; //how many votes total
        $current_rating = $numbers->total_value; //total number of rating added together and stored
        $sum = $vote_sent+$current_rating; // add together the current vote value and the total vote value
        $tense = ($count==1) ? "vote" : "votes"; //plural form votes/vote

        ($sum==0 ? $added=0 : $added=$count+1);

        ((is_array($checkIP)) ? array_push($checkIP,$ip_num) : $checkIP=array($ip_num));
        $insertip=serialize($checkIP);


        $this->db->like('used_ips',$ip);
        @$voted=$this->Common_model->get_total('ratings1',array('id'=>$id_sent));
        if(!$voted) {


            if (($vote_sent >= 1 && $vote_sent <= $units) && ($ip == $ip_num)) { // keep votes within range
//	$update = "UPDATE $rating_dbname.$rating_tableName SET total_votes='".$added."', total_value='".$sum."', used_ips='".$insertip."' WHERE id='$id_sent'";
//	@$result = mysqli_query($rating_conn,$update);
                $arr =array(
                    'total_votes'=>$added,
                    'total_value'=>$sum,
                    'used_ips'=>$insertip
                );
                $this->Common_model->update_data('ratings1',array('id'=>$id_sent),$arr);
            }
            header("Location: $referer"); // go back to the page we came from
            exit;
        } //end for the "if(!$voted)"
    }
    function tag_art(){
        $alias = str_replace('.html','', $this->uri->segment(2));
        $tags = $this->Common_model->get_data('tags',array('show'=>1,'alias'=>$alias));
        if(!empty($tags)) {
            $arr_cate = $GLOBALS['arr_cate'];
            $arr_obj = '';
            $data['cat_obj']= '';
            if (!empty($arr_cate)) {
                foreach ($arr_cate as $cat) {
                    $arr_obj[$cat->parentid][] = $cat;
                    $data['cat_obj'][$cat->id] = $cat;
                }
            }
            $idtags = '';
            foreach ($tags as $tag){
                $idtags[] = $tag->idpost;
            }

            $offset = $this->uri->segment(3);
            $this->per_page = 21;
            $this->db->distinct();
            $this->db->group_by('title');
            $data['article'] = $this->Common_model->get_data_in('article',array('id',$idtags), array('show' => 1 ), array('id', 'desc'), array($this->per_page, $offset));

            $this->db->distinct();
            $this->db->group_by('title');
            $this->total_rows = $this->Common_model->get_total_array('article',array('id',$idtags), array('show' => 1));
            $this->paging1();
            $data['total'] = $this->total_rows;
            $data['cate']='';
            $data['tag'] = $tags[0];
            if(!empty($tags[0]) ){
                $article = $this->Common_model->get_one('article', array('id' => $tags[0]->idpost));
                if(!empty($article))
                    $data['cate'] = $this->Common_model->get_one('categories', array('id' => $article->category));
            }
            $data['news_art'] = $this->Common_model->get_data('article', array('show'=>1),array('id', 'desc'),3);

            $data['content'] = $this->load->view('Article/Article_tag', $data, true);
            $data['meta_key'] = 'Tags: '.$tags[0]->title;
            $data['meta_des'] = 'Tags: '.$tags[0]->title;
            $data['title'] = 'Tags: '.$tags[0]->title;
            $this->load->view('index', $data);
        }
    }
    function list_poll()
    {
        $alias = str_replace('.html','', $this->uri->segment(1));
        $alias1 = $this->uri->segment(2);
        $obj_alias = $this->Common_model->get_one('alias', array($GLOBALS['value'] => $alias));
        $category = $this->Common_model->get_one('categories', array('id' => $obj_alias->id_field));
        if (!empty($category)) {
            $arr = explode(',', $category->array_cate);
            $data['arr_cate'] = $this->Common_model->get_data_in('categories', array('id', $arr), array('show' => 1), array('parentid', 'asc'));

            if ($category->number_post > 0) {
                $this->per_page = $category->number_post;
            }
            $orderby = array('id', 'desc');
            $page = '';
            if (isset($_GET['per_page']) && !empty($_GET['per_page'])) {
                $offset = ($_GET['per_page'] - 1) * $category->number_post;
                $page = rear('page') . $_GET['per_page'];
            } else {
                $offset = 0;
            }
            $data['polls'] = $this->Common_model->get_data('internal', array('show' => 1), array('id', 'desc'), 15);
            $data['poll'] = $this->Common_model->get_data('internal', array('show' => 1), $orderby, array($this->per_page, $offset));
            $this->total_rows = $this->Common_model->get_total('internal', array('show' => 1));
            $data['cate'] = $category;
            $data['content'] = $this->load->view('Article/Article_category_poll', $data, true);
            $data['fb_image'] = $category->image;
            $data['meta_key'] = meta_site($category, 'meta_key') . $page;
            $data['meta_des'] = meta_site($category, 'meta_des') . $page;
            $data['title'] = show_meta($category) . $page;
            $this->load->view('index', $data);


        }
    }

    function poll()
    {
        $alias = str_replace('.html','', $this->uri->segment(1));
        $obj_alias = $this->Common_model->get_one('alias', array($GLOBALS['value'] => $alias));
        $category = $this->Common_model->get_one('categories', array('id' => $obj_alias->id_field));
        if (!empty($category)) {
            $data['poll'] = $this->Common_model->get_data('internal', array('show' => 1), array('id', 'desc'), 15);
            $data['cate'] = $category;
            $arr = explode(',', $category->array_cate);
            $data['arr_cate'] = $this->Common_model->get_data_in('categories', array('id', $arr), array('show' => 1), array('parentid', 'asc'));
            $data['content'] = $this->load->view('Article/Article_category_sp', $data, true);
            $data['fb_image'] = $category->image;
            $data['meta_key'] = meta_site($category, 'meta_key');
            $data['meta_des'] = meta_site($category, 'meta_des');
            $data['title'] = show_meta($category);
            $data['banner'] = $category->banner;
            $this->load->view('index', $data);
        }
    }

    function poll_send()
    {
        if (!empty($_POST)) {
            $this->Common_model->insert_data('internal', $_POST);
            $id = $this->db->insert_id();
            $alias = creat_alias($_POST['title']);
            $this->Common_model->update_data('internal', array('id' => $id), array('alias' => $alias));
            $output = array('mes' => 1, 'html' => $this->load->view('Article/Article_poll_success', '', true));

        } else {
            $output = array('mes' => 2);
        }
        $output = json_encode($output);
        echo $output;
    }

    public
    function paging()
    {
        if ($this->session->userdata('lang') == 'en') {
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
        $config['first_link'] = '<';
        $config['last_link'] = '>';
        $config['prev_link'] = $prev;
        $config['next_link'] = $next;
        $config['next_tag_open'] = '<li class="pagination-next">';
        $config['next_tag_close'] = '</li>';
        $this->pagination->initialize($config);
    }

    function removeqsvar($url, $varname)
    {
        list($urlpart, $qspart) = array_pad(explode('?', $url), 2, '');
        parse_str($qspart, $qsvars);
        unset($qsvars[$varname]);
        $newqs = http_build_query($qsvars);
        if (!empty($newqs)) {
            return $urlpart . '?' . $newqs;
        } else {
            return $urlpart;
        }

    }

    public
    function paging1()
    {
        $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $actual_link = $this->removeqsvar($actual_link, 'per_page');
        $next = '<i class="fa fa-caret-right"></i>';
        $prev = '<i class="fa fa-caret-left"></i>';
        $this->load->library('pagination');
        $config['base_url'] = $actual_link;
        $config['total_rows'] = $this->total_rows;
        $config['per_page'] = $this->per_page;
        $config['page_query_string'] = TRUE;
        $config['uri_segment'] = 2;
        $config['num_links'] = 10;
        $config['use_page_numbers'] = TRUE;
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $config['full_tag_open'] = '<ul>';
        $config['full_tag_close'] = '</ul>';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li><a class="active" >';
        $config['cur_tag_close'] = '</a></li>';
        $config['prev_tag_open'] = '<li class="pagination-prev">';
        $config['prev_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li class="pagination-next">';
        $config['last_tag_close'] = '</li>';
        $config['first_tag_open'] = '<li class="pagination-next">';
        $config['first_tag_close'] = '</li>';
        $config['first_link'] = '|<';
        $config['last_link'] = '>|';
        $config['prev_link'] = '<i class="fa fa-angle-left"></i>';
        $config['next_link'] = '<i class="fa fa-angle-right"></i>';
        $config['next_tag_open'] = '<li class="pagination-next">';
        $config['next_tag_close'] = '</li>';
        $this->pagination->initialize($config);
    }
}
