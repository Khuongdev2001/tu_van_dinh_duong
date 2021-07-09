<?php

if (!function_exists('links')) {
    function links($id = 0, $type = '', $selec = '')
    {
        $id_field = $id;
        $CI = get_instance();
        if ($CI->session->userdata('rear') != '') {
            $rear = $CI->session->userdata('rear');
        } else {
            $rear = '';
        }
        $value='value'.$rear;
        if ($type == 'art') {
            $tax = 'article';
        } elseif ($type == 'cate') {
            $tax = 'categories';
        } elseif ($type == 'pro') {
            $tax = 'product';
        } elseif ($type == 'trade') {
            $tax = 'trade';
        }
        $obj = $CI->Common_model->get_one('alias', array('id_field' => $id_field, 'taxonomy' => $tax));
        $link = '';
        if (!empty($obj)) {
            if ($selec == '') {
                $link = base_url() . $obj->$value;
            } else {
                $link = $obj->$value;
            }
        } else {
            $link = '';
        }
        return $link;

    }
}
