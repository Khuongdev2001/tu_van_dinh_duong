<?php
defined('BASEPATH');

class TestController extends MX_Controller{
    public function index(){
        $query=$this->db->get("bigweb_users");
        echo json_encode($query->result());
    }
}