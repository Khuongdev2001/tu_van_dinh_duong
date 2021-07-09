<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_counter extends MX_Controller
{
    private $counter_expire = 600; // Time expire in one visit

    public function __construct()
    {
        parent::__construct();

    }

    public function index()
    {

        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $datenow = date('Y-m-d H:i:s');
        $wheredate = array(
            'date' => date('z'),
            'week' => date('W'),
            'month' => date('n'),
            'year' => date('Y')
        );
        //
        $counter_agent = (isset($_SERVER['HTTP_USER_AGENT'])) ? addslashes(trim($_SERVER['HTTP_USER_AGENT'])) : "";
        $counter_ip = trim(addslashes($_SERVER['REMOTE_ADDR']));

        // ignorore some bots
        //if (substr_count($counter_agent, "bot") > 0)
        //   $ignore = true;
        // delete free counter_ips
        $where = "unix_timestamp(NOW())-unix_timestamp(timevisit) > $this->counter_expire";
        $this->Common_model->delete_data('counter_visit', $where);

        // check for entry
        $res = $this->Common_model->get_total('counter_visit', array('guestip' => $counter_ip));
        if ($res == 0) {
            $this->Common_model->insert_data('counter_visit', array('guestip' => $counter_ip, 'timevisit' => $datenow));
        } else {
            $this->Common_model->update_data('counter_visit', array('guestip' => $counter_ip), array('timevisit' => $datenow));
        }
        $dataday = $this->Common_model->getone('counter_values', $wheredate);
        if ($dataday) {
            if (empty($_COOKIE['counter'])) {
                $dataday->guests++;
                $this->Common_model->update_data('counter_values', $wheredate, $dataday);
                setcookie("counter", "OK", time() + 86400);
            }
        } else { // Neu day la lan truy cap dau tien cua ngay thi tao mot bang
            $dataday = $wheredate;
            $this->Common_model->insert_data('counter_values', $dataday);
        }
        $where_yesterday = array('date' => (date('z') - 1));
        $where_day = array('date' => date('z'), 'week' => date('W'), 'month' => date('n'), 'year' => date('Y'));
        $where_week = array('week' => date('W'), 'month' => date('n'), 'year' => date('Y'));
        $where_month = array('month' => date('n'), 'year' => date('Y'));
        $where_year = array('year' => date('Y'));
        if (isset($_COOKIE['rear'])) {
            $data['rear'] = $_COOKIE['rear'];
        } else {
            $data['rear'] = '';
        }
        $data['counter_now'] = $this->Common_model->get_total('counter_visit', '');
        $data['counter_day'] = $this->Common_model->get_sum('guests', $where_day, 'counter_values');
        $data['counter_yesterday'] = $this->Common_model->get_sum('guests', $where_yesterday, 'counter_values');
        $data['counter_week'] = $this->Common_model->get_sum('guests', $where_week, 'counter_values');
        $data['counter_month'] = $this->Common_model->get_sum('guests', $where_month, 'counter_values');
        $data['counter_year'] = $this->Common_model->get_sum('guests', $where_year, 'counter_values');
        $data['counter_all'] = $this->Common_model->get_sum('guests', array(), 'counter_values');
        if(isset($_COOKIE['rear'])){
            $data['rear'] = $_COOKIE['rear'] ;
        }else{$data['rear'] = '' ;}
        $this->load->view('Counter/Counter_index', $data);
    }

}