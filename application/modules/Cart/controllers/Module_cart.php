<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_cart extends MX_Controller
{
    public $rear = 'vi';
    private $per_page = 9;
    private $total_rows = 6;

    public function __construct()
    {
        parent::__construct();
        if ($this->session->userdata('lang') != '') {
            $this->rear = $this->session->userdata('lang');
        }
        $this->load->library(array('security', 'cart'));
        if ($_SESSION['rear'] == '_en') {
            $this->lang->load('atta_lang', 'en');
        } else {
            $this->lang->load('atta_lang', 'vn');
        }
    }

    public function index()
    {
        $action = str_replace('.html','', $this->uri->segment(2));
        switch ($action) {
            case 'add':
                $this->add_cart();
                break;
            case 'add-pro':
                $this->add_cart_ajax();
                break;
            case 'update-cart':
                $this->update_cart_j();
                break;
            case 'delete-cart':
                $this->delete_cart_j();
                break;
            case 'update':
                $this->update_cart();
                break;

            case 'delete':
                $this->delete_cart();
                break;

            case 'gio-hang':
                $this->display_cart();
                break;
            default:
                break;
        }
    }

    function add_cart_ajax()
    {
        if (isset($_POST)) {
            $id = $_POST['proId'];
            if(isset($_POST['quantity']) && is_numeric($_POST['quantity'])){
                $number = $_POST['quantity'];
            }else{
                $number = 1;
            }

            $this->cart->product_name_rules = '\.\:\-_ a-z0-9áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọơớờởỡợôốồổỗộúùủũụưứừửữựíìỉĩịýỳỷỹỵđÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌƠỚỜỞỠỢÔỐỒỔỖỘÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴĐ()';
            $product = $this->Common_model->get_one('product', array('id' => $id, 'show' => 1));
            if (!empty($product)) {
                $arr = array(
                    'id' => $product->id,
                    'qty' => $number,
                    'price' => $product->price,
                    'size' => $product->price,
                    'name' => $product->code,
                    'image' => $product->image,
                    'total' => $product->price * $number
                );

                $this->cart->insert($arr);

                $output = array('mes' =>1,'total'=>$this->cart->total_items(),'views'=> $this->load->view('Cart/Cart_ajax_index',array('product'=>$product),true));
                $output = json_encode($output);
                echo $output;
            }else{
                $output = array('mes' =>0,'total'=>$this->cart->total_items(),'views'=>'<div class="alert alert-danger">Sản phẩm không tồn tại</div>');
                $output = json_encode($output);
                echo $output;
            }
        }
    }
    public function update_cart_j()
    {
        if (!empty($_POST)) {
            $qty = $_POST['qty'];
            $rowid = $_POST['rowid'];
            if (count($this->cart->contents()) > 0) {
                foreach ($this->cart->contents() as $item) {
                    if ($item['rowid'] == $rowid && $qty > 0) {
                        $arr = array(
                            'qty' => $qty,
                            'rowid' => $item['rowid'],
                        );
                        $this->cart->update($arr);
                    }
                }
            }
            $output = array('mes' =>1,'total'=>$this->cart->total_items(),'views'=> $this->load->view('Cart/Cart_ajax_update',array(),true));
            $output = json_encode($output);
            echo $output;
        }
    }
    public function delete_cart_j()
    {
        if (!empty($_POST)) {
            $rowid = $_POST['rowid'];
            if (count($this->cart->contents()) > 0) {
                foreach ($this->cart->contents() as $item) {
                    if ($item['rowid'] == $rowid) {
                        $arr = array(
                            'qty' => 0,
                            'rowid' => $item['rowid'],
                        );
                        $this->cart->update($arr);
                    }
                }
            }
            $output = array('mes' =>1,'total'=>$this->cart->total_items(),'views'=> $this->load->view('Cart/Cart_ajax_update',array(),true));
            $output = json_encode($output);
            echo $output;
        }
    }
    function load_cart()
    {
        $this->load->view('Cart/Cart_load');
    }

    function display_cart()
    {
        $data['sett'] = $GLOBALS['sett'];
        if ($this->cart->contents() != '') {
            $data['cat_pro'] = $this->Common_model->get_one('categories',array('show'=>1,'parentid'=>0,'taxonomy'=>'cate_product'));
            $data['cate_child']  ='';
            $data['cate_baby'] = '';
            if(!empty($data['cat_pro'])){

                $data['cate_child'] = $this->Common_model->get_data('categories',array('show'=>1,'parentid'=>$data['cat_pro']->id));
                $data['cate_baby'] ='';
                if(!empty($data['cate_child'])){
                    foreach ($data['cate_child'] as $cat){
                        $data['cate_baby'][$cat->id] = $this->Common_model->get_data('categories',array('show'=>1,'parentid'=>$cat->id));
                    }
                }
            }
            $data['pro_hot'] = $this->Common_model->get_data('product',array('show'=>1 ),array('id','desc'),5);
//            $data['art_hot'] = $this->Common_model->get_data('article',array('show'=>1,'stick '=>1),array('id','desc'),5);
            $data['content'] = $this->load->view('Cart/Cart_index', $data, true);
            $data['meta_key'] = 'Giỏ hàng';
            $data['meta_des'] = 'Giỏ hàng';
            $data['title'] = 'Giỏ hàng';
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }

    public function add_cart()
    {
        if (isset($_POST)) {
            $id = $_POST['id'];
            $number = 1;
            $this->cart->product_name_rules = '\.\:\-_ a-z0-9áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọơớờởỡợôốồổỗộúùủũụưứừửữựíìỉĩịýỳỷỹỵđÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌƠỚỜỞỠỢÔỐỒỔỖỘÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴĐ()';
            $product = $this->Common_model->get_one('product', array('id' => $id, 'show' => 1));

            if (!empty($product)) {
                if(!empty($product->prices)){
                    $price = json_decode($product->prices);
                    $price =array_pop($price);
                }else{
                    $price = $product->price ;
                }
                $arr = array(
                    'id' => $product->id,
                    'qty' => $number,
                    'price' => $price,
                    'size' => $price,
                    'name' => $product->title,
                    'image' => $product->image,
                    'total' => $product->price * $number
                );
                $this->cart->insert($arr);

                $output = array('mess' =>'success','views'=>base_url($GLOBALS['alias_cart'] ));
                $output = json_encode($output);
                echo $output;
            }
        }
    }



    public function update_cart()
    {
        if (!empty($_POST)) {
            $qty = $_POST['qty'];
            $rowid = $_POST['rowid'];
            if (count($this->cart->contents()) > 0) {
                foreach ($this->cart->contents() as $item) {
                    if ($item['rowid'] == $rowid && $qty > 0) {
                        $arr = array(
                            'qty' => $qty,
                            'rowid' => $item['rowid'],
                        );
                        $this->cart->update($arr);
                    }
                }
            }
            $output = array('mes' =>1,'total'=>$this->cart->total_items(),'views'=> $this->load->view('Cart/Cart_update',array(),true));
            $output = json_encode($output);
            echo $output;
        }
    }
    public function delete_cart()
    {
        $qty = $_POST['qty'];
        $rowid = $_POST['rowid'];
        if ($this->cart->total_items()) {
            foreach ($this->cart->contents() as $item) {
                if ( $item['rowid'] == $rowid) {
                    $data['rowid'] = $item['rowid'];
                    $data['qty'] = 0;
                    $this->cart->update($data);
                    break;
                }
            }
        }
        $output = array('mes' =>1,'total'=>$this->cart->total_items(),'views'=> $this->load->view('Cart/Cart_update',array(),true));
        $output = json_encode($output);
        echo $output;
    }

    function checkout_load()
    {
        $data['setting'] = $this->Common_model->get_one('setting', array('language' => $this->rear));
        if ($this->cart->contents()) {
            $this->load->view('Cart/Cart_check_load', $data);
        } else {
            redirect(base_url());
        }
    }
    function RandomString()
    {
        $characters = '0123456789';
        $randstring = '';
        for ($i = 0; $i<10; $i++)
        {
            $randstring .= mt_rand(0,9);
        }
        return '#ID'.$randstring;
    }
    public function checkout()
    {
        if ($this->cart->total_items()) {
            $dat['cart_item'] = $this->cart->contents();
            $dat['setting'] = $GLOBALS['sett'];
            $data['content'] = $this->load->view('Cart/Checkout', $dat, true);
            $this->load->view('index1', $data);
        } else {
            redirect(base_url());
        }
    }
    function checkout_info(){
        if ($this->cart->total_items()) {
            $dat['cart_item'] = $this->cart->contents();
            $dat['post'] = $_POST;
            $dat['setting'] = $GLOBALS['sett'];
            $data['content'] = $this->load->view('Cart/Cart_check_load', $dat, true);
            $this->load->view('index', $data);
        } else {
            redirect(base_url());
        }
    }
    function checkout_register(){
        $dat['setting'] = $GLOBALS['sett'];
        if ($this->cart->total_items()) {
            $dat['cart_item'] = $this->cart->contents();
            $this->load->library('form_validation');
            $this->form_validation->set_rules('email', 'email', 'required');
            $this->form_validation->set_rules('phone', 'phone', 'required');
            if ($this->form_validation->run() == FALSE) {
                redirect(base_url('checkout'));
            } else {
                if(!empty($_COOKIE['done_order'])){
                    redirect(base_url('gio-hang'));
                }else{
                    $hoten = $this->input->post('name');
                    $content = $this->input->post('content');
                    $add = $this->input->post('address');
                    $phone = $this->input->post('phone');
                    $pay_bank = $this->input->post('pay_bank');
                    $ship = $this->input->post('ship');
                    $email = $this->input->post('email');
                    if ($this->cart->contents()) {
                        $totalMoney = $this->cart->total()+$ship;
                        $this->db->insert('order', array('name' => $hoten, 'address' => $add, 'content' => $content, 'email' => $email, 'phone' => $phone,'pay_bank'=>$pay_bank,'ship'=>$ship,'total' => $totalMoney));
                    }
                    $id_order = $this->db->insert_id('order', 'id');
                    if ($this->cart->contents()) {
                        $ip = $this->input->ip_address();
                        foreach ($this->cart->contents() as $item) {
                            $id_sp = $item['id'];
                            $price = $item['price'];
                            $qty = $item['qty'];
                            $data = array(
                                'id_order' => $id_order,
                                'ip' => $ip,
                                'qty' => $qty,
                                'id_sp' => $id_sp,
                                'price' => $price
                            );
                            $this->db->insert('order_details', $data);
                        }
                    }
                    $dat['order'] = $this->Common_model->get_one('order', array('id' => $id_order));
                    $dat['order_detail'] = $this->Common_model->get_data('order_details', array('id_order' => $id_order));
                    $dat['post_item'] = $_POST;
                    setcookie('done_order','done',time()+60);
                    $dat['success'] =1;
                    $data['content'] = $this->load->view('Cart/Checkout_success', $dat, true);
                    $this->load->view('index1', $data);
                }
            }

        }else {
            redirect(base_url('gio-hang'));
        }

    }
    function order_detail()
    {
        $id = $this->uri->segment(2);
        $order = $this->Common_model->get_one('order', array('id' => $id));
        if (!empty($order)) {
            $dat['sett'] = $this->Common_model->get_one('setting', array('language' => $this->rear));
            $dat['order'] = $order;
            $dat['order_detail'] = $this->Common_model->get_data('order_details', array('id_order' => $id));
            $data['content'] = $this->load->view('Cart/Cart_order_detail', $dat, true);
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }

    }
    function news_order(){
        $customer = explode(',',$GLOBALS['sett']->customer);
        $objCus = $customer[array_Rand($customer)];
        $itemCus = explode('|',$objCus);
        $html = '<p class="name-cus">'.$itemCus[0].'</p><p class="orderby-cus">'.$itemCus[1].'</p><p class="time-order-cus">'.$itemCus[2].'</p>';
        $output = array('view' => $html);
        $output = json_encode($output);
        echo $output;
    }
}