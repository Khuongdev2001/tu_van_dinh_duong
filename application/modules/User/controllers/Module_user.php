<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_user extends MX_Controller
{
    private $per_page = 12;
    private $total_rows = 6;

    public function __construct()
    {
        parent::__construct();
        if ($_SESSION['rear'] == '_en') {
            $this->lang->load('atta_lang', 'en');
        } else {
            $this->lang->load('atta_lang', 'vn');
        }
    }

    public function index()
    {
        if (!empty($_SESSION['member'])) {
            redirect(base_url() . rear('account_info_url'));
        }
        $data['supp'] = $GLOBALS['supp'];
        $data['sett'] = $GLOBALS['sett'];
        $data['content'] = $this->load->view('User/User_login', $data, true);
        $data['meta_key'] = '';
        $data['meta_des'] = '';
        $data['title'] = '';
        $this->load->view('index', $data);
    }

    function logout()
    {
        $_SESSION['member'] = '';
        redirect(base_url());
    }

    function account()
    {
        $data['sett'] = $GLOBALS['sett'];
        if (!empty($_SESSION['member'])) {
            $data['cus'] = json_decode($_SESSION['member']);
            $data['content'] = $this->load->view('User/Account', $data, true);
            $data['meta_key'] = '';
            $data['meta_des'] = '';
            $data['title'] = '';
            $this->load->view('index', $data);
        } else {
            redirect(base_url(rear('link_login')));
        }
    }

    function register_office()
    {
        if (!empty($_SESSION['member'])) {
            redirect(base_url() . rear('account_info_url'));
        } else {
            $data['sett'] = $GLOBALS['sett'];
            $data['content'] = $this->load->view('User/Register_office', $data, true);
            $data['meta_key'] = '';
            $data['meta_des'] = '';
            $data['title'] = '';
            $this->load->view('index', $data);
        }
    }

    function register_dl()
    {
        if (!empty($_POST)) {
            $password = $this->input->post('pass');
            $email = $this->input->post('email');
            $loged = $this->Common_model->get_one('customer', array('email' => $email, 'password' => $password));
            if (!empty($loged)) {
                $value = array('mess_num' => 1, 'html' => rear('account_exit'));
                $output = json_encode($value);
                echo $output;
            } else {
                $fullname = $this->input->post('fullname');
                $address = $this->input->post('address');
                $phone = $this->input->post('phone');
                $password = sha1(md5($password));
                $arr = array(
                    'password' => $password,
                    'fullname' => $fullname,
                    'address' => $address,
                    'phone' => $phone,
                    'email' => $email,
                );
                $this->Common_model->insert_data('customer', $arr);
                $value = array('mess_num' => 3, 'html' => base_url() . rear('link_login'));
                $output = json_encode($value);
                echo $output;
            }
        }
    }

function district()
{
    $html = '';
    if (!empty($_POST['idval'])) {
        $district = $this->Common_model->get_data('district', array('show' => 1, 'id_city' => $_POST['idval']));
        if (!empty($district)) {
            foreach ($district as $pro) {
                $html .= '<option value="' . $pro->id . '">' . $pro->title . '</option>';
            }
        } else {
            $html .= '<option value="">' . rear('office_district_option') . '</option>';
        }
        echo $html;
    }
}

function login_office()
{
    if (!empty($_COOKIE['account'])) {
        redirect(base_url(rear('info_account')));
    } else {
        if (isset($_POST)) {
            $username = $this->input->post('username');
            $password = $this->input->post('password');
            $password = sha1(md5($password));
            $loged = $this->Common_model->get_one('customer', array('username' => $username, 'password' => $password));
            if (!empty($loged)) {
                setcookie('account_id', $loged->id, time() + 8400);
                setcookie('account', json_encode($loged), time() + 8400);
                $value = array('mess_num' => 0, 'html' => base_url(rear('info_account')));
                $output = json_encode($value);
                echo $output;
            } else {
                $value = array('mess_num' => 1, 'html' => rear('err_username'));
                $output = json_encode($value);
                echo $output;
            }
        }
    }

}

function login_cart()
{
    if (isset($_POST)) {
        $username = $this->input->post('username');
        $password = $this->input->post('password');
        $password = sha1(md5($password));
        $loged = $this->Common_model->get_one('customer', array('email' => $username, 'password' => $password));
        if (!empty($loged)) {
            $_SESSION['member'] = json_encode($loged);
            $value = array('mes' => 1);
            $output = json_encode($value);
            echo $output;
        } else {
            $value = array('mes' => 0, 'html' => rear('err_login'));
            $output = json_encode($value);
            echo $output;
        }
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
function paging1()
{
    $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $actual_link = $this->removeqsvar($actual_link, 'per_page');
    if (isset($_COOKIE['rear'])) {
        $next = '>';
        $prev = '<';
    } else {
        $next = '>';
        $prev = '<';
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
