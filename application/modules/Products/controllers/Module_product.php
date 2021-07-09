<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_product extends MX_Controller
{
    private $per_page = 12;
    private $total_rows = 6;

    public function __construct()
    {
        parent::__construct();

    }

    public function index($cate = '')
    {
        $data['sett'] = $GLOBALS['sett'];
        $data['cate_product'] = $this->Common_model->get_data('categories', array('show' => 1, 'show_home' => 1, 'taxonomy' => 'cate_product'), array('order', 'asc'));
        $data['cates'] = $cate;
        $arr_cate = $GLOBALS['arr_cate'];
        $data['cat_obj'] = '';
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $data['cat_obj'][$cat->id] = $cat;
                $arr_obj[$cat->parentid][] = $cat;
            }
        }
        if (!empty($cate)) {

            $arr_category = $this->Common_model->get_all_cat($arr_obj, $cate->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['product'] = $this->Common_model->get_data('product', array('show' => 1), array('order', 'asc'));
        } else {

            $data['product'] = $this->Common_model->get_data('product', array('show' => 1), array('order', 'asc'));
        }

        $this->load->view('Products/Product_index', $data);
    }

    public function category()
    {
        $alias = str_replace('.html', '', $this->uri->segment(1));
        $obj_alias = $this->Common_model->get_one('alias', array('value' => $alias));
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
        $category = $arrCat[$obj_alias->id_field];
        if (!empty($category)) {


            $arr = explode(',', $category->array_cate);
            foreach ($arr as $objCatePro) {
                $breadPro[] = $arrCat[$objCatePro];
            }
            if(!empty($cateChildPro[$category->id])){
                $data['cateSon'] = $cateChildPro[$category->id];
            }else{
                $data['cateSon'] = $cateChildPro[$category->parentid];
            }
            $data['breadPro'] = $breadPro;
            $data['sett'] = $GLOBALS['sett'];
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $category->id, array());
            $data['cate'] = $category;
            if (isset($_GET['total']) && $_GET['total'] != '' && is_numeric($_GET['total'])) {
                $this->per_page = $_GET['total'];
            } else {
                if ($category->number_post > 0) {
                    $this->per_page = $category->number_post;
                }
            }
            if (isset($_GET['per_page'])) {
                $offset = $_GET['per_page'];
            } else {
                $offset = 0;
            }
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['product'] = $this->Common_model->get_data('product', array('show' => 1), array('id', 'desc'), array($this->per_page, $offset));
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $this->total_rows = $this->Common_model->get_total('product', array('show' => 1));
            $this->paging1();

            $data['content'] = $this->load->view('Products/Product_category', $data, true);

            $data['meta_key'] = meta_site($category, 'meta_key');
            $data['meta_des'] = meta_site($category, 'meta_des');
            $data['title'] = show_meta($category);
            $data['banner'] = $category->banner;
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }
    public function flashsale()
    {
        $alias = str_replace('.html', '', $this->uri->segment(1));
        $obj_alias = $this->Common_model->get_one('alias', array('value' => $alias));
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
        $category = $arrCat[$obj_alias->id_field];
        if (!empty($category)) {
            $arr = explode(',', $category->array_cate);
            foreach ($arr as $objCatePro) {
                $breadPro[] = $arrCat[$objCatePro];
            }
            $data['breadPro'] = $breadPro;
            $data['sett'] = $GLOBALS['sett'];
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $category->id, array());
            $data['cate'] = $category;
            if (isset($_GET['total']) && $_GET['total'] != '' && is_numeric($_GET['total'])) {
                $this->per_page = $_GET['total'];
            } else {
                if ($category->number_post > 0) {
                    $this->per_page = $category->number_post;
                }
            }
            if (isset($_GET['per_page'])) {
                $offset = $_GET['per_page'];
            } else {
                $offset = 0;
            }
            $this->db->distinct();
            $data['product'] = $this->Common_model->get_data('product', array('show' => 1,'flashsale'=>1), array('id', 'desc'), array($this->per_page, $offset));
            $this->db->distinct();
            $this->total_rows = $this->Common_model->get_total('product', array('show' => 1,'flashsale'=>1));
            $this->paging1();

            $data['content'] = $this->load->view('Products/Product_category', $data, true);

            $data['meta_key'] = meta_site($category, 'meta_key');
            $data['meta_des'] = meta_site($category, 'meta_des');
            $data['title'] = show_meta($category);
            $data['banner'] = $category->banner;
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }
    public function dealsale()
    {
        $alias = str_replace('.html', '', $this->uri->segment(1));
        $obj_alias = $this->Common_model->get_one('alias', array('value' => $alias));
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
        $category = $arrCat[$obj_alias->id_field];
        if (!empty($category)) {
            $arr = explode(',', $category->array_cate);
            foreach ($arr as $objCatePro) {
                $breadPro[] = $arrCat[$objCatePro];
            }
            $data['breadPro'] = $breadPro;
            $data['sett'] = $GLOBALS['sett'];
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $category->id, array());
            $data['cate'] = $category;
            if (isset($_GET['total']) && $_GET['total'] != '' && is_numeric($_GET['total'])) {
                $this->per_page = $_GET['total'];
            } else {
                if ($category->number_post > 0) {
                    $this->per_page = $category->number_post;
                }
            }
            if (isset($_GET['per_page'])) {
                $offset = $_GET['per_page'];
            } else {
                $offset = 0;
            }
            $this->db->distinct();
            $data['product'] = $this->Common_model->get_data('product', array('show' => 1,'dealsale'=>1), array('id', 'desc'), array($this->per_page, $offset));
            $this->db->distinct();
            $this->total_rows = $this->Common_model->get_total('product', array('show' => 1,'dealsale'=>1));
            $this->paging1();

            $data['content'] = $this->load->view('Products/Product_category', $data, true);

            $data['meta_key'] = meta_site($category, 'meta_key');
            $data['meta_des'] = meta_site($category, 'meta_des');
            $data['title'] = show_meta($category);
            $data['banner'] = $category->banner;
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }
    public function detail()
    {
        $alias = str_replace('.html', '', $this->uri->segment(1));
        $obj_alias = $this->Common_model->get_one('alias', array($GLOBALS['value'] => $alias));
        $product = $this->Common_model->get_one('product', array('id' => $obj_alias->id_field));
        if (!empty($product)) {
            $data['sett'] = $GLOBALS['sett'];
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
            $category = $arrCat[$product->category];


            $data['img_fb'] = $product->image;
            $data['tit_fb'] = $product->title;
            $data['product'] = $product;
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $product->category, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['morePro'] = $this->Common_model->get_data('product', array('show' => 1, 'category' => $product->category, 'id !=' => $product->id), array('id', 'desc'), 8);
            $arr = explode(',', $category->array_cate);
            foreach ($arr as $objCatePro) {
                $breadPro[] = $arrCat[$objCatePro];
            }
            $data['breadPro'] = $breadPro;
            $data['cate'] = $category;
            $data['proStick'] = $this->Common_model->get_data('product', array('show' => 1, 'stick' => 1, 'id !=' => $product->id), array('id', 'desc'), 8);
            if (isset($_GET['per_page'])) {
                $offset = $_GET['per_page'];
            } else {
                $offset = 0;
            }
            $data['comment'] = $this->Common_model->get_data('comment', array('show' => 1,'idpost'=>$product->id), array('id', 'desc'), array($this->per_page, $offset));
            $this->total_rows = $this->Common_model->get_total('comment', array('show' => 1,'idpost'=>$product->id));
            $this->paging1();
            $data['content'] = $this->load->view('Products/Product_detail', $data, true);
            if (!empty($product->img_f)) {
                $data['fb_image'] = base_url() . $product->img_f;
            } else {
                $data['fb_image'] = base_url() . $product->image;
            }
            $data['meta_key'] = meta_site($product, 'meta_key');
            $data['meta_des'] = meta_site($product, 'meta_des');
            $data['title'] = show_meta($product);
            $data['banner'] = $category->banner;
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }

    public function search()
    {
        if (isset($_GET['per_page'])) {
            $offset = $_GET['per_page'];
        } else {
            $offset = 0;
        }
        $this->per_page = 20;
        if (isset($_GET['price'])) {
            $val = $_GET['price'];
            if ($val == '') {

            } else {
                $val = explode('-', $val);
                $this->db->where('price >=', $val[0]);
                $this->db->where('price <=', $val[1]);
            }
        }
        if (isset($_GET['city'])) {
            $val = $_GET['city'];
            if ($val == '') {

            } else {
                $val = '"' . $val . '"';
                $this->db->like('id_city', $val);
            }
        }
        $this->db->distinct();
        $data['product'] = $this->Common_model->get_data('product', array('show' => 1), array('id', 'desc'), array($this->per_page, $offset));
        if (isset($_GET['price'])) {
            $val = $_GET['price'];
            if ($val == '') {

            } else {
                $val = explode('-', $val);
                $this->db->where('price >=', $val[0]);
                $this->db->where('price <=', $val[1]);
            }
        }
        if (isset($_GET['city'])) {
            $val = $_GET['city'];
            if ($val == '') {

            } else {
                $val = '"' . $val . '"';
                $this->db->like('id_city', $val);
            }
        }
        $this->db->distinct();
        $this->total_rows = $this->Common_model->get_total('product', array('show' => 1));
        $this->paging1();
        $data['content'] = $this->load->view('Products/Product_index', $data, true);
        $data['sett'] = $GLOBALS['sett'];
        $data['meta_key'] = '';
        $data['meta_des'] = '';
        $data['title'] = '';

        $this->load->view('index', $data);
    }


    public function checkout()
    {
        if (!isset($_COOKIE['buynow'])) {
            if (!empty($_POST)) {
                $hoten = $this->input->post('name');
                $add = $this->input->post('address');
                $phone = $this->input->post('phone');
                $content = $this->input->post('content');
                $email = $this->input->post('email');
                $id_sp = $this->input->post('id');
                $total = $this->input->post('total');
                $type = $this->input->post('type');
                $this->db->insert('order', array('id_sp' => $id_sp, 'name' => $hoten, 'address' => $add, 'content' => $content, 'email' => $email, 'phone' => $phone, 'type' => $type, 'total' => $total));
                setcookie('buynow', 'ok', time() + 60);
                $value = array('mess_num' => 1, 'htm' => $this->load->view('Products/Product_success', '', true));
                $output = json_encode($value);
            } else {
                $value = array('mess_num' => 2);
                $output = json_encode($value);
            }
        } else {
            $value = array('mess_num' => 3);
            $output = json_encode($value);
        }
        echo $output;
    }

    function post_db()
    {
        /*
Page:           db.php
Created:        Aug 2006
Last Mod:       Mar 18 2007
This page handles the database update if the user
does NOT have Javascript enabled.
---------------------------------------------------------
ryan masuga, masugadesign.com
ryan@masugadesign.com
Licensed under a Creative Commons Attribution 3.0 License.
http://creativecommons.org/licenses/by/3.0/
See readme.txt for full credit details.
--------------------------------------------------------- */
        header("Cache-Control: no-cache");
        header("Pragma: nocache");
//require('_config-rating.php'); // get the db connection info

//getting the values
        $vote_sent = preg_replace("/[^0-9]/", "", $_REQUEST['j']);
        $id_sent = preg_replace("/[^0-9a-zA-Z]/", "", $_REQUEST['q']);
        $ip_num = preg_replace("/[^0-9\.]/", "", $_REQUEST['t']);
        $units = preg_replace("/[^0-9]/", "", $_REQUEST['c']);
        $ip = $_SERVER['REMOTE_ADDR'];
        $referer = $_SERVER['HTTP_REFERER'];

        if ($vote_sent > $units) die("Sorry, vote appears to be invalid."); // kill the script because normal users will never see this.

//connecting to the database to get some information
//        $query = mysql_query("SELECT total_votes, total_value, used_ips FROM $rating_dbname.$rating_tableName WHERE id='$id_sent' ")or die(" Error: ".mysql_error());
        $query = $this->Common_model->get_data('ratings', array('id' => $id_sent));
        $numbers = $query;
        $checkIP = unserialize($numbers['used_ips']);
        $count = $numbers['total_votes']; //how many votes total
        $current_rating = $numbers['total_value']; //total number of rating added together and stored
        $sum = $vote_sent + $current_rating; // add together the current vote value and the total vote value
        $tense = ($count == 1) ? "vote" : "votes"; //plural form votes/vote

// checking to see if the first vote has been tallied
// or increment the current number of votes
        ($sum == 0 ? $added = 0 : $added = $count + 1);

// if it is an array i.e. already has entries the push in another value
        ((is_array($checkIP)) ? array_push($checkIP, $ip_num) : $checkIP = array($ip_num));
        $insertip = serialize($checkIP);

//IP check when voting
//        $voted=mysql_num_rows(mysql_query("SELECT used_ips FROM $rating_dbname.$rating_tableName WHERE used_ips LIKE '%".$ip."%' AND id='".$id_sent."' "));
        $voted = $this->Common_model->get_num_like('ratings', array('id' => $id_sent), array('used_ips', $ip), array('used_ips'));
        if (!$voted) {     //if the user hasn't yet voted, then vote normally...


            if (($vote_sent >= 1 && $vote_sent <= $units) && ($ip == $ip_num)) { // keep votes within range
                $arr = array(
                    'total_votes' => $added,
                    'total_value' => $sum,
                    'used_ips' => $insertip
                );
                $this->Common_model->update_data('ratings', array('id', $id_sent), $arr);
//                $update = "UPDATE $rating_dbname.$rating_tableName SET total_votes='".$added."', total_value='".$sum."', used_ips='".$insertip."' WHERE id='$id_sent'";
//                $result = mysql_query($update);
            }
            header("Location: $referer"); // go back to the page we came from
            exit;
        } //end for the "if(!$voted)"
    }

    function rating_bar($id, $units = '', $static = '')
    {

        $product = $this->Common_model->get_one('product', array('show' => 1, 'id' => $id));
        $rating_unitwidth = 20;
// require('_config-rating.php');  get the db connection info

//set some variables
        $ip = $_SERVER['REMOTE_ADDR'];
        if (!$units) {
            $units = 5;
        }
        if (!$static) {
            $static = FALSE;
        }

// get votes, values, ips for the current rating bar
//@$query=mysqli_query($rating_conn,"SELECT total_votes, total_value, used_ips FROM $rating_dbname.$rating_tableName WHERE id='$id' ");
        $query = $this->Common_model->get_total('ratings', array('id' => $id));
// insert the id in the DB if it doesn't exist already
// see: http://www.masugadesign.com/the-lab/scripts/unobtrusive-ajax-star-rating-bar/#comment-121
        if ($query == 0) {

//$sql = "INSERT INTO $rating_dbname.$rating_tableName (`id`,`total_votes`, `total_value`, `used_ips`) VALUES ('$id', '0', '0', '')";
            $arr = array(
                'id' => $id,
                'total_votes' => 0,
                'total_value' => 0,
                'used_ips' => ''
            );
            $this->Common_model->insert_data('ratings', $arr);
        }

        $numbers = $this->Common_model->get_one('ratings', array('id' => $id));

        if ($numbers->total_votes < 1) {
            $count = 0;
        } else {
            $count = $numbers->total_votes; //how many votes total
        }
        $current_rating = $numbers->total_value; //total number of rating added together and stored
        $tense = ($count == 1) ? "vote" : "votes"; //plural form votes/vote

// determine whether the user has voted, so we know how to draw the ul/li
        $this->db->like('used_ips', $ip);
        @$voted = $this->Common_model->get_total('ratings', array('id' => $id));

// now draw the rating bar
        if ($current_rating > 0) {
            $rating_width = @number_format($current_rating / $count, 0) * $rating_unitwidth;
            $rating1 = @number_format($current_rating / $count, 0);
            $rating2 = @number_format($current_rating / $count, 0);
        } else {
            $rating_width = 0;
            $rating1 = 0;
            $rating2 = 0;
        }
        if ($static == 'static') {
            $static_rater = array();
            $static_rater[] .= "\n" . '<div class="ratingblock">';
            $static_rater[] .= '<div id="unit_long' . $id . '">';
            $static_rater[] .= '<ul id="unit_ul' . $id . '" class="unit-rating" style="width:' . $rating_unitwidth * $units . 'px;">';
            $static_rater[] .= '<li class="current-rating" style="width:' . $rating_width . 'px;">Currently ' . $rating2 . '/' . $units . '</li>';
            $static_rater[] .= '</ul>';
            $static_rater[] .= '<p class="static">' . $id . '. Xếp hạng: <strong> ' . number_format($rating1, 0) . '</strong>/' . $units . ' (' . $count . ' ' . $tense . ' cast) <em>This is \'static\'.</em></p>';
            $static_rater[] .= '</div>';
            $static_rater[] .= '</div>' . "\n\n";

            return join("\n", $static_rater);


        } else {

            $rater = '';
            $rater .= '<div class="ratingblock">';

            $rater .= '<div id="unit_long' . $id . '">';
            $rater .= '  <ul id="unit_ul' . $id . '" class="unit-rating" style="width:' . $rating_unitwidth * $units . 'px;">';
            $rater .= '     <li class="current-rating" style="width:100px;">Currently ' . $rating2 . '/' . $units . '</li>';

            for ($ncount = 1; $ncount <= $units; $ncount++) { // loop from 1 to the number of units
                if (!$voted) { // if the user hasn't yet voted, draw the voting stars
                    $rater .= '<li><a href="dbc?j=' . $ncount . '&amp;q=' . $id . '&amp;t=' . $ip . '&amp;c=' . $units . '" title="' . $ncount . ' out of ' . $units . '" class="r' . $ncount . '-unit rater" rel="nofollow">' . $ncount . '</a></li>';
                }
            }
            $ncount = 0; // resets the count

            $rater .= '  </ul>';
            $rater .= '  <span class="hreview-aggregate"><span class="item"><span class="fn"><p';
            if ($voted) {
                $rater .= ' class="voted"';
            }
            $rater .= '>Kết quả: </span></span><span class="rating"><span class="average"><strong> 5</span>/<span class="best">' . $units . ' </span> </strong>- (<span class="votes">' . number_format($product->views_star, 0) . '</span> phiếu bầu)<span class="summary"></span></span></span>';
            $rater .= '  </p>';
            $rater .= '</div>';
            $rater .= '</div>';
            return $rater;
        }
    }

    function rpc()
    {

        header("Cache-Control: no-cache");
        header("Pragma: nocache");

        $rating_unitwidth = 20;
        $vote_sent = $_GET['j'];
        $id_sent = $_GET['q'];
        $ip_num = $_GET['t'];
        $units = $_GET['c'];
        $ip = $_SERVER['REMOTE_ADDR'];

        if ($vote_sent > $units) die("Sorry, vote appears to be invalid."); // kill the script because normal users will never see this.

        @$numbers = $this->Common_model->get_one('ratings', array('id' => $id_sent));
        $checkIP = unserialize($numbers->used_ips);
        $count = $numbers->total_votes; //how many votes total
        $current_rating = $numbers->total_value; //total number of rating added together and stored
        $sum = $vote_sent + $current_rating; // add together the current vote value and the total vote value
        $tense = ($count == 1) ? "vote" : "votes"; //plural form votes/vote
        ($sum == 0 ? $added = 0 : $added = $count + 1);

// if it is an array i.e. already has entries the push in another value
        ((is_array($checkIP)) ? array_push($checkIP, $ip_num) : $checkIP = array($ip_num));
        $insertip = serialize($checkIP);

//IP check when voting
        $this->db->like('used_ips', $ip);
        @$voted = $this->Common_model->get_total('ratings', array('id' => $id_sent));
        if (!$voted) {     //if the user hasn't yet voted, then vote normally...

            if (($vote_sent >= 1 && $vote_sent <= $units) && ($ip == $ip_num)) { // keep votes within range, make sure IP matches - no monkey business!
                $arr = array(
                    'total_votes' => $added,
                    'total_value' => $sum,
                    'used_ips' => $insertip
                );
                $this->Common_model->update_data('ratings', array('id' => $id_sent), $arr);
            }
        } //end for the "if(!$voted)"
// these are new queries to get the new values!
        @$numbers = $this->Common_model->get_one('ratings', array('id' => $id_sent));
        $count = $numbers->total_votes;//how many votes total
        $current_rating = $numbers->total_value;//total number of rating added together and stored
        $tense = ($count == 1) ? "phiếu" : "votes"; //plural form votes/vote

// $new_back is what gets 'drawn' on your page after a successful 'AJAX/Javascript' vote

        $new_back = array();

        $new_back[] .= '<ul class="unit-rating" style="width:' . $units * $rating_unitwidth . 'px;">';
        $new_back[] .= '<li class="current-rating" style="width:' . @number_format($current_rating / $count, 0) * $rating_unitwidth . 'px;">Current rating.</li>';
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
        $new_back[] .= '<p class="voted">' . $id_sent . '. Xếp hạng: <strong>' . @number_format($sum / $added, 0) . '</strong>/' . $units . ' (' . $count . ' ' . $tense . ' bầu) ';
        $new_back[] .= '<span class="thanks">Xin cám ơn!</span></p>';

        $allnewback = join("\n", $new_back);

// ========================

//name of the div id to be updated | the html that needs to be changed
        $output = "unit_long$id_sent|$allnewback";
        echo $output;
    }

    function dbc()
    {
        header("Cache-Control: no-cache");
        header("Pragma: nocache");
        $vote_sent = $_GET['j'];
        $id_sent = $_GET['q'];
        $ip_num = $_GET['t'];
        $units = $_GET['c'];
        $ip = $_SERVER['REMOTE_ADDR'];
        $referer = $_SERVER['HTTP_REFERER'];

        if ($vote_sent > $units) die("Sorry, vote appears to be invalid."); // kill the script because normal users will never see this.
        @$numbers = $this->Common_model->get_one('ratings', array('id' => $id_sent));
        $checkIP = unserialize($numbers->used_ips);
        $count = $numbers->total_votes; //how many votes total
        $current_rating = $numbers->total_value; //total number of rating added together and stored
        $sum = $vote_sent + $current_rating; // add together the current vote value and the total vote value
        $tense = ($count == 1) ? "vote" : "votes"; //plural form votes/vote

        ($sum == 0 ? $added = 0 : $added = $count + 1);

        ((is_array($checkIP)) ? array_push($checkIP, $ip_num) : $checkIP = array($ip_num));
        $insertip = serialize($checkIP);


        $this->db->like('used_ips', $ip);
        @$voted = $this->Common_model->get_total('ratings', array('id' => $id_sent));
        if (!$voted) {


            if (($vote_sent >= 1 && $vote_sent <= $units) && ($ip == $ip_num)) { // keep votes within range
//	$update = "UPDATE $rating_dbname.$rating_tableName SET total_votes='".$added."', total_value='".$sum."', used_ips='".$insertip."' WHERE id='$id_sent'";
//	@$result = mysqli_query($rating_conn,$update);
                $arr = array(
                    'total_votes' => $added,
                    'total_value' => $sum,
                    'used_ips' => $insertip
                );
                $this->Common_model->update_data('ratings', array('id' => $id_sent), $arr);
            }
            header("Location: $referer"); // go back to the page we came from
            exit;
        } //end for the "if(!$voted)"
    }
    function rating_bar_top($id, $units = '', $static = '')
    {

        $product = $this->Common_model->get_one('product', array('show' => 1, 'id' => $id));
        $rating_unitwidth = 20;
// require('_config-rating.php');  get the db connection info

//set some variables
        $ip = $_SERVER['REMOTE_ADDR'];
        if (!$units) {
            $units = 5;
        }
        if (!$static) {
            $static = FALSE;
        }

// get votes, values, ips for the current rating bar
//@$query=mysqli_query($rating_conn,"SELECT total_votes, total_value, used_ips FROM $rating_dbname.$rating_tableName WHERE id='$id' ");
        $query = $this->Common_model->get_total('ratings', array('id' => $id));
// insert the id in the DB if it doesn't exist already
// see: http://www.masugadesign.com/the-lab/scripts/unobtrusive-ajax-star-rating-bar/#comment-121
        if ($query == 0) {

//$sql = "INSERT INTO $rating_dbname.$rating_tableName (`id`,`total_votes`, `total_value`, `used_ips`) VALUES ('$id', '0', '0', '')";
            $arr = array(
                'id' => $id,
                'total_votes' => 0,
                'total_value' => 0,
                'used_ips' => ''
            );
            $this->Common_model->insert_data('ratings', $arr);
        }

        $numbers = $this->Common_model->get_one('ratings', array('id' => $id));

        if ($numbers->total_votes < 1) {
            $count = 0;
        } else {
            $count = $numbers->total_votes; //how many votes total
        }
        $current_rating = $numbers->total_value; //total number of rating added together and stored
        $tense = ($count == 1) ? "vote" : "votes"; //plural form votes/vote

// determine whether the user has voted, so we know how to draw the ul/li
        $this->db->like('used_ips', $ip);
        @$voted = $this->Common_model->get_total('ratings', array('id' => $id));

// now draw the rating bar
        if ($current_rating > 0) {
            $rating_width = @number_format($current_rating / $count, 0) * $rating_unitwidth;
            $rating1 = @number_format($current_rating / $count, 0);
            $rating2 = @number_format($current_rating / $count, 0);
        } else {
            $rating_width = 0;
            $rating1 = 0;
            $rating2 = 0;
        }
        if ($static == 'static') {
            $static_rater = array();
            $static_rater[] .= "\n" . '<div class="ratingblock">';
            $static_rater[] .= '<div id="unit_long1' . $id . '">';
            $static_rater[] .= '<ul id="unit_ul1' . $id . '" class="unit-rating" style="width:' . $rating_unitwidth * $units . 'px;">';
            $static_rater[] .= '<li class="current-rating" style="width:' . $rating_width . 'px;">Currently ' . $rating2 . '/' . $units . '</li>';
            $static_rater[] .= '</ul>';
            $static_rater[] .= '<p class="static">' . $id . '. Xếp hạng: <strong> ' . number_format($rating1, 0) . '</strong>/' . $units . ' (' . $count . ' ' . $tense . ' cast) <em>This is \'static\'.</em></p>';
            $static_rater[] .= '</div>';
            $static_rater[] .= '</div>' . "\n\n";

            return join("\n", $static_rater);


        } else {

            $rater = '';
            $rater .= '<div class="ratingblock">';

            $rater .= '<div id="unit_long1' . $id . '">';
            $rater .= '  <ul id="unit_ul1' . $id . '" class="unit-rating" style="float:left;width:' . $rating_unitwidth * $units . 'px;">';
            $rater .= '     <li class="current-rating" style="width:100px;">Currently ' . $rating2 . '/' . $units . '</li>';

            for ($ncount = 1; $ncount <= $units; $ncount++) { // loop from 1 to the number of units
                if (!$voted) { // if the user hasn't yet voted, draw the voting stars
                    $rater .= '<li><a  class="r' . $ncount . '-unit rater" rel="nofollow">' . $ncount . '</a></li>';
                }
            }
            $ncount = 0; // resets the count

            $rater .= '  </ul>(' . number_format($product->views_star, 0).')' ;
            $rater .= '</div>';
            $rater .= '</div>';
            return $rater;
        }
    }
    function rating_bar_bottom($id, $units = '', $static = '')
    {

        $article = $this->Common_model->get_one('product', array('show' => 1, 'id' => $id));
        $rating_unitwidth = 20;
// require('_config-rating.php');  get the db connection info

//set some variables
        $ip = $_SERVER['REMOTE_ADDR'];
        if (!$units) {
            $units = 5;
        }
        if (!$static) {
            $static = FALSE;
        }

// get votes, values, ips for the current rating bar
//@$query=mysqli_query($rating_conn,"SELECT total_votes, total_value, used_ips FROM $rating_dbname.$rating_tableName WHERE id='$id' ");
        $query = $this->Common_model->get_total('ratings', array('id' => $id));
// insert the id in the DB if it doesn't exist already
// see: http://www.masugadesign.com/the-lab/scripts/unobtrusive-ajax-star-rating-bar/#comment-121
        if ($query == 0) {

//$sql = "INSERT INTO $rating_dbname.$rating_tableName (`id`,`total_votes`, `total_value`, `used_ips`) VALUES ('$id', '0', '0', '')";
            $arr = array(
                'id' => $id,
                'total_votes' => 0,
                'total_value' => 0,
                'used_ips' => ''
            );
            $this->Common_model->insert_data('ratings', $arr);
        }

        $numbers = $this->Common_model->get_one('ratings', array('id' => $id));

        if ($numbers->total_votes < 1) {
            $count = 0;
        } else {
            $count = $numbers->total_votes; //how many votes total
        }
        $current_rating = $numbers->total_value; //total number of rating added together and stored
        $tense = ($count == 1) ? "vote" : "votes"; //plural form votes/vote

// determine whether the user has voted, so we know how to draw the ul/li
        $this->db->like('used_ips', $ip);
        @$voted = $this->Common_model->get_total('ratings', array('id' => $id));

// now draw the rating bar
        if ($current_rating > 0) {
            $rating_width = @number_format($current_rating / $count, 0) * $rating_unitwidth;
            $rating1 = @number_format($current_rating / $count, 0);
            $rating2 = @number_format($current_rating / $count, 0);
        } else {
            $rating_width = 0;
            $rating1 = 0;
            $rating2 = 0;
        }
        if ($static == 'static') {
            $static_rater = array();
            $static_rater[] .= "\n" . '<div class="star-average">' . number_format($rating1, 0) . '/5</div>';
            $static_rater .= ' <div class="reviews">';
            $static_rater .= '<div class="star-rating">';
            $static_rater .= '<div class="voting" >';
            $static_rater .= '  <div class="ratingblock">';
            $static_rater[] .= '<div id="unitlong' . $id . '">';
            $static_rater[] .= '<ul id="unitul' . $id . '" class="unit-rating" style="width:' . $rating_unitwidth * $units . 'px;">';
            $static_rater[] .= '<li class="current-rating" style="width:' . $rating_width . 'px;">Currently ' . $rating2 . '/' . $units . '</li>';
            $static_rater[] .= '</ul>';
            $static_rater[] .= '<p class="static">' . $id . '. Xếp hạng: <strong> ' . number_format($rating1, 0) . '</strong>/' . $units . ' (' . $count . ' ' . $tense . ' cast) <em>This is \'static\'.</em></p>';
            $static_rater[] .= '</div>';
            $static_rater[] .= '</div>';
            $static_rater[] .= '</div>';
            $static_rater[] .= '</div>';
            $static_rater[] .= '</div>' . "\n\n";
            return join("\n", $static_rater);
        } else {
            $rater = '';
            $rater .= '<div class="star-average">' . number_format($rating1, 0) . '/5</div>';
            $rater .= ' <div class="reviews">';
             $rater .= '<div class="star-rating">';
              $rater .= '<div class="voting" >';
            $rater .= '<div class="ratingblock">';

            $rater .= '<div id="unitlong' . $id . '">';
            $rater .= '<ul id="unitul' . $id . '" class="unit-rating" style="width:' . $rating_unitwidth * $units . 'px;">';
            $rater .= '<li class="current-rating" style="width:100px;">Currently ' . $rating2 . '/' . $units . '</li>';

            for ($ncount = 1; $ncount <= $units; $ncount++) { // loop from 1 to the number of units
                if (!$voted) { // if the user hasn't yet voted, draw the voting stars
                    $rater .= '<li><a rel="nofollow">' . $ncount . '</a></li>';
                }
            }
            $ncount = 0; // resets the count

            $rater .= '</ul>';
            $rater .= '<span class="hreview-aggregate"><span class="item"><span class="fn"><p';
            if ($voted) {
                $rater .= ' class="voted"';
            }
            $rater .= '></span></span><span class="rating">(<span class="votes">' . number_format($count, 0) . '</span> phiếu bầu)<span class="summary"></span></span></span>';
            $rater .= '  </p>';
            $rater .= '</div>';
            $rater .= '</div>';
            $rater .= '</div>';
            $rater .= '</div>';
            $rater .= '</div>';
            return $rater;
        }
    }

    public function booking()
    {
        $alias = $this->uri->segment(2);
        $obj_alias = $this->Common_model->get_one('alias', array('value' => $alias));
        $product = $this->Common_model->get_one('product', array('id' => $obj_alias->id_field));
        if (!empty($product)) {
            if (isset($_COOKIE['rear'])) {
                $data['rear'] = $_COOKIE['rear'];
            } else {
                $data['rear'] = '';
            }
            if (!empty($_POST)) {
                if (!isset($_COOKIE['tour_done' . $product->id])) {
                    $_POST['id_course'] = $product->id;
                    $this->Common_model->insert_data('order_course', $_POST);
//                    $content =  $this->load->view('Article/Article_tour',array('post'=>$_POST,'art'=>$article),true);
//                    $subject = 'Thông tin đặt tour';
//                    $this->Common_model->send_mail($subject, $this->input->post('name'), $this->input->post('email'),$GLOBALS['supp']->email , $content, $GLOBALS['supp']->email_send , $GLOBALS['supp']->password );
//                    $this->Common_model->send_mail($subject, $this->input->post('name'), $this->input->post('email'),$GLOBALS['supp']->email_home , $content, $GLOBALS['supp']->email_send , $GLOBALS['supp']->password );
                    setcookie('tour_done' . $product->id, 'done', time() + 300, '/');
                    $_COOKIE['tour_done' . $product->id] = 'done';
                    echo 1;
                } else {
                    echo 0;
                }
            }
        } else {
            echo 0;
        }
    }

    public function opening()
    {
        if (isset($_COOKIE['rear'])) {
            $data['rear'] = $_COOKIE['rear'];
        } else {
            $data['rear'] = '';
        }
        $data['off_tab'] = $this->Common_model->get_data('office', array('show' => 1));
        $data['off_course'] = '';
        if (!empty($data['off_tab'])) {
            foreach ($data['off_tab'] as $off) {
                $data['off_course'][$off->id] = $this->Common_model->get_data('course', array('show' => 1, 'id_office' => $off->id), array('id', 'desc'));
            }
        }
        $data['content'] = $this->load->view('Products/Product_opening', $data, true);
        $this->load->view('index', $data);
    }

    public function reg_opening()
    {
        if (isset($_COOKIE['rear'])) {
            $data['rear'] = $_COOKIE['rear'];
        } else {
            $data['rear'] = '';
        }
        $alias = $this->uri->segment(2);
        $data['course'] = $this->Common_model->get_one('course', array('show' => 1, 'alias' => $alias));
        if (!empty($data['course'])) {
            $data['sett'] = $this->Common_model->get_one('setting', array());
            $data['content'] = $this->load->view('Products/Product_reg', $data, true);
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }

    }

    public function reg_course()
    {
        if (isset($_POST)) {
            $arr = array(
                'name' => $_POST['name'],
                'phone' => $_POST['phone'],
                'email' => $_POST['email'],
                'day' => $_POST['day'],
                'address' => $_POST['address'],
                'id_course' => $_POST['id_course'],

            );
            $this->Common_model->insert_data('order_course', $arr);
            if (isset($_COOKIE['rear'])) {
                echo 'You have successfully registered,we will respond in the shortest time. Thank you!';
            } else {
                echo 'Bạn đã đăng ký thành công , chúng tôi sẽ phản hồi trong thời gian sớm nhất. Xin cảm ơn!';
            }
        }

    }

    function add_like()
    {
        if (!empty($_POST['id'])) {
            $ip = $this->input->ip_address();
            $product = $this->Common_model->get_one('product', array('id' => $_POST['id']));
            if (!empty($product)) {
                $arr_like = $product->idpr;
                if (!empty($product->idpr)) {
                    $arr_likes = explode(',', $product->idpr);
                    if (in_array($ip, $arr_likes) == true) {
                        $output = array('mes' => 0, 'view' => '<i class="fa fa-heart-o"></i>');
                        $output = json_encode($output);
                        echo $output;
                    } else {
                        $arr_like = $product->idpr . ',' . $ip;
                        $output = array('mes' => 1, 'view' => '<i class="fa fa-heart"></i>');
                        $output = json_encode($output);
                        echo $output;
                    }
                } else {
                    $arr_like = $ip;
                    $output = array('mes' => 1, 'view' => '<i class="fa fa-heart"></i>');
                    $output = json_encode($output);
                    echo $output;
                }
                $this->Common_model->update_data('product', array('id' => $_POST['id']), array('idpr' => $arr_like));
            }
        }
    }

    public function add_download()
    {
        if (isset($_POST['id'])) {
            $pro = $this->Common_model->get_one('product', array('id' => $_POST['id']));
            if (!empty($pro)) {
                $view = $pro->views_download + 1;
                $this->Common_model->update_data('product', array('id' => $_POST['id']), array('views_download' => $view));
            }
        }
    }

    public function paging()
    {
        if ($this->session->userdata('lang') == 'en') {
            $next = 'Next';
            $prev = 'Prev';
        } else {
            $next = 'Sau';
            $prev = 'Trước';
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

    function removeqsvar($url, $varname)
    {
        list($urlpart, $qspart) = array_pad(explode('?', $url), 2, '');
        parse_str($qspart, $qsvars);
        unset($qsvars[$varname]);
        $newqs = http_build_query($qsvars);
        return $urlpart . '?' . $newqs;
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
