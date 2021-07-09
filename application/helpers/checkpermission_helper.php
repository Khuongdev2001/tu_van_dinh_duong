<?php

if ( ! function_exists('Check_per_table')){

    function Check_per_table($table='',$id=0){
        $CI = get_instance();
        $CI->load->model('Admin_model');
        $user=$CI->Admin_model->getone('users',array('show'=>1,'id'=>$id));
        if(!empty($user)){
            $permission=json_decode($user->permission);
            if(array_key_exists($table,$permission)){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

}
if ( ! function_exists('Check_per_action')){
    function Check_per_action($table='',$id,$value){
        $CI = get_instance();
        $CI->load->model('Admin_model');
        $user=$CI->Admin_model->getone('users',array('show'=>1,'id'=>$id));
        if(!empty($user)){
            $permission=json_decode($user->permission);
            if(in_array($value,$permission->$table)){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

}
