<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Action extends MX_Controller
{
    private $table_per='';
    private $iduser='';
    function __construct()
    {
        parent::__construct();
        $this->table_per=$this->Admin_model->gettable_permission();
        $this->iduser=$this->session->userdata('loged');
        if($this->iduser!=''){

        }else{
            redirect(base_url().'manager');
        }
    }
    public function action_all(){
        $arrayid=$this->input->post('s_array');
        $action=$this->input->post('action');
        $table=$this->input->post('table');
        if(!empty($arrayid) && !empty($action)){
            $this->$action($arrayid,$table);
        }
    }
    public function ajax_order_quick(){
        $id=$this->input->post('id_obj');
        $table=$this->input->post('table_obj');
        $val=$this->input->post('val_obj');
        $this->Admin_model->update_data($table, array('id' => $id), array('order'=>$val));
    }
    private function publish($array=array(),$table=''){
        $action='Xuất bản';
        if($table=='users'){
            $action='Mở khóa';
        }
        foreach($array as $id){
            $this->db->where('id', $id);
            $this->db->update($table,array('show'=>1));
            $content=array(
                'title'=>$action.' '.$this->table_per[$table][1].' "<b>'.$this->Admin_model->get_object($table,array('id'=>$id),'title').'</b>"',
                'iduser'=>$this->iduser
            );
            $this->Admin_model->insert_data('history',$content);
        }
    }
    private function unpublish($array=array(),$table=''){
        $action='Gỡ';
        if($table=='users'){
            $action='Khóa';
        }
        foreach($array as $id){
            $this->db->where('id', $id);
            $this->db->update($table,array('show'=>0));
            $content=array(
                'title'=>$action.' '.$this->table_per[$table][1].' "<b>'.$this->Admin_model->get_object($table,array('id'=>$id),'title').'</b>"',
                'iduser'=>$this->iduser
            );
            $this->Admin_model->insert_data('history',$content);
        }
    }
    private function republish($array=array(),$table=''){
        foreach($array as $id){
            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $time=date('Y-m-d H:i:s',time());
            echo $time;
            $this->db->where('id', $id);
            $this->db->update($table,array('date_update'=>$time,'show'=>1));
            $content=array(
                'title'=>'Tái xuất bản '.$this->table_per[$table][1].' "<b>'.$this->Admin_model->get_object($table,array('id'=>$id),'title').'</b>"',
                'iduser'=>$this->iduser
            );
            $this->Admin_model->insert_data('history',$content);
        }
    }
    private function delete($array=array(),$table=''){
        foreach($array as $id){
            $content=array(
                'title'=>'Xóa '.$this->table_per[$table][1].' "<b>'.$this->Admin_model->get_object($table,array('id'=>$id),'title').'</b>"',
                'iduser'=>$this->iduser
            );
            $this->Admin_model->insert_data('history',$content);
            if($table=='article'){
                $this->db->where('taxonomy','article');
                $this->db->where('id_field',$id);
                $this->db->delete('alias');
            }elseif($table=='product'){
                $this->db->where('taxonomy','product');
                $this->db->where('id_field',$id);
                $this->db->delete('alias');
            }elseif($table=='categories'){
                $this->db->where('taxonomy','categories');
                $this->db->where('id_field',$id);
                $this->db->delete('alias');
            }
            $this->db->where('id', $id);
            $this->db->delete($table);
        }
    }
    public function publish_ajax(){
        $id=$this->input->post('id');
        $table=$this->input->post('table');
        $this->db->where('id', $id);
        $this->db->update($table,array('show'=>1));
        $content=array(
            'title'=>'Xuất bản '.$this->table_per[$table][1].' "<b>'.$this->Admin_model->get_object($table,array('id'=>$id),'title').'</b>"',
            'iduser'=>$this->iduser
        );
        $this->Admin_model->insert_data('history',$content);
    }
    public function unpublish_ajax(){
        $id=$this->input->post('id');
        $table=$this->input->post('table');
        $this->db->where('id', $id);
        $this->db->update($table,array('show'=>0));
        $content=array(
            'title'=>'Gỡ '.$this->table_per[$table][1].' "<b>'.$this->Admin_model->get_object($table,array('id'=>$id),'title').'</b>"',
            'iduser'=>$this->iduser
        );
        $this->Admin_model->insert_data('history',$content);
    }
    public function addorder_ajax(){
        $id=$this->input->post('key');
        $value=$this->input->post('value');
        $table=$this->input->post('table');
        $name = $table.'_order';
        $this->session->set_userdata($name,array($id,$value));
    }
    public function delete_ajax(){
        $id=$this->input->post('id');
        $table=$this->input->post('table');
        $content=array(
            'title'=>'Xóa '.$this->table_per[$table][1].' "<b>'.$this->Admin_model->get_object($table,array('id'=>$id),'title').'</b>"',
            'iduser'=>$this->iduser
        );
        $this->Admin_model->insert_data('history',$content);
        if($table=='article'){
            $this->db->where('taxonomy','article');
            $this->db->where('id_field',$id);
            $this->db->delete('alias');
        }elseif($table=='product'){
            $this->db->where('taxonomy','product');
            $this->db->where('id_field',$id);
            $this->db->delete('alias');
        }elseif($table=='categories'){
            $this->db->where('taxonomy','categories');
            $this->db->where('id_field',$id);
            $this->db->delete('alias');
        }
        $this->db->where('id', $id);
        $this->db->delete($table);
    }
    public function count_visit()
    {
        $table=$this->input->post('table');
        $check=$this->Admin_model->getone('count_menu',array('title'=>$table,'iduser'=>$this->iduser));
        if(!empty($check)){
            $view=$check->views;
            $up=$view+1;
            $this->Admin_model->update_data('count_menu',array('id'=>$check->id),array('views'=>$up));
        }else{
            $this->Admin_model->insert_data('count_menu',array('title'=>$table,'views'=>1,'iduser'=>$this->iduser));
        }
    }
}
