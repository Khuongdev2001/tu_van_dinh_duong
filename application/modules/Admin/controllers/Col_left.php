<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Col_left extends MX_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->library('session');
    }

    public function index()
    {
        $user = $this->session->userdata('loged');
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        //===GET HISTORY
        $now=date('Y-m-d h:i:s',time()-7*24*60*60);
        $this->Admin_model->delete_data('history',array('date_create <'=>$now));
        $data['history']=$this->Admin_model->get_data('history',array(),array('id','DESC'),10);
        //===GET HISTORY
        //===COUNT MENU VISIT
        $data['count_menu']=$this->Admin_model->get_data('count_menu',array('iduser'=>$user),array('views','DESC'),9);
        //===COUNT MENU VISIT
        //===COUNT VISIT
        $where_yesterday = array('date'=>(date('z')-1),'week'=>date('W'),'month'=>date('n'),'year'=>date('Y'));
        $where_day = array('date'=>date('z'),'week'=>date('W'),'month'=>date('n'),'year'=>date('Y'));
        $where_week = array('week'=>date('W'),'month'=>date('n'),'year'=>date('Y'));
        $where_month = array('month'=>date('n'),'year'=>date('Y'));
        $where_year = array('year'=>date('Y'));
        $data['counter_now'] = $this->Admin_model->get_number('counter_visit','');
        $data['counter_day'] = $this->Admin_model->get_sum('guests',$where_day,'counter_values');
        $data['counter_yesterday'] = $this->Admin_model->get_sum('guests',$where_yesterday,'counter_values');
        $data['counter_week'] = $this->Admin_model->get_sum('guests',$where_week,'counter_values');
        $data['counter_month'] = $this->Admin_model->get_sum('guests',$where_month,'counter_values');
        $data['counter_year'] = $this->Admin_model->get_sum('guests',$where_year,'counter_values');
        $data['counter_all'] = $this->Admin_model->get_sum('guests',array(),'counter_values');
        //===COUNT VISIT
         $this->load->view('Admin/col_left.php',$data);
    }

}
