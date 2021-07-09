<?php
if (!function_exists('VndDot')) {
    function VndDot($strNum)
    {
        $result = number_format($strNum,0,'','.');
        return $result;
    }
}
if (!function_exists('show_meta')) {
    function show_meta($data)
    {
        $CI = get_instance();
        if (!empty($data->meta_title)) {
            if (!empty($CI->session->userdata('rear'))) {
                $meta = $data->title_en;
            } else {
                $meta = $data->meta_title;
            }
        } else {
            if (!empty($CI->session->userdata('rear'))) {
                $meta = $data->title_en;
            } else {
                $meta = $data->title;
            }
        }
        return $meta;
    }
}
if (!function_exists('meta_site')) {
    function meta_site($data, $item)
    {
        $CI = get_instance();
        if (!empty($CI->session->userdata('rear'))) {
            $item = $item . '_en';
            $meta = $data->$item;
        } else {
            $meta = $data->$item;
        }
        return $meta;
    }
}
if (!function_exists('rear')) {
    function rear($data)
    {
        $CI = get_instance();
        return $CI->lang->line($data);
    }
}
if (!function_exists('addOrUpdateUrlParam')) {
    function addOrUpdateUrlParam($href,$name, $value){
        $regex = '/[&\\?]' . $name . "=/";
        if(preg_match($regex, $href)){
            $regex = '([&\\?])'.$name.'=\\d+';
            $link = preg_replace($regex, "$1" . $name . "=" . $value, $href);
        }else{
            if(strpos($href, '?')!=false){
                $link = $href . "&" . $name . "=" . $value;
            }else{
                $link = $href . "?" . $name . "=" . $value;
            }
        }
        return $link;
    }
}

if (!function_exists('rebuild_date')) {
    function rebuild_date($format, $time = 0)
    {
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        if (!$time) $time = time();

        $lang = array();
        $lang['sun'] = 'CN';
        $lang['mon'] = 'T2';
        $lang['tue'] = 'T3';
        $lang['wed'] = 'T4';
        $lang['thu'] = 'T5';
        $lang['fri'] = 'T6';
        $lang['sat'] = 'T7';
        $lang['sunday'] = 'Chủ nhật';
        $lang['monday'] = 'Thứ hai';
        $lang['tuesday'] = 'Thứ ba';
        $lang['wednesday'] = 'Thứ tư';
        $lang['thursday'] = 'Thứ năm';
        $lang['friday'] = 'Thứ sáu';
        $lang['saturday'] = 'Thứ bảy';
        $lang['january'] = 'Tháng Một';
        $lang['february'] = 'Tháng Hai';
        $lang['march'] = 'Tháng Ba';
        $lang['april'] = 'Tháng Tư';
        $lang['may'] = 'Tháng Năm';
        $lang['june'] = 'Tháng Sáu';
        $lang['july'] = 'Tháng Bảy';
        $lang['august'] = 'Tháng Tám';
        $lang['september'] = 'Tháng Chín';
        $lang['october'] = 'Tháng Mười';
        $lang['november'] = 'Tháng M. một';
        $lang['december'] = 'Tháng M. hai';
        $lang['jan'] = 'T01';
        $lang['feb'] = 'T02';
        $lang['mar'] = 'T03';
        $lang['apr'] = 'T04';
        $lang['may2'] = 'T05';
        $lang['jun'] = 'T06';
        $lang['jul'] = 'T07';
        $lang['aug'] = 'T08';
        $lang['sep'] = 'T09';
        $lang['oct'] = 'T10';
        $lang['nov'] = 'T11';
        $lang['dec'] = 'T12';

        $format = str_replace("r", "D, d M Y H:i:s O", $format);
        $format = str_replace(array("D", "M"), array("[D]", "[M]"), $format);
        $return = date($format, $time);

        $replaces = array(
            '/\[Sun\](\W|$)/' => $lang['sun'] . "$1",
            '/\[Mon\](\W|$)/' => $lang['mon'] . "$1",
            '/\[Tue\](\W|$)/' => $lang['tue'] . "$1",
            '/\[Wed\](\W|$)/' => $lang['wed'] . "$1",
            '/\[Thu\](\W|$)/' => $lang['thu'] . "$1",
            '/\[Fri\](\W|$)/' => $lang['fri'] . "$1",
            '/\[Sat\](\W|$)/' => $lang['sat'] . "$1",
            '/\[Jan\](\W|$)/' => $lang['jan'] . "$1",
            '/\[Feb\](\W|$)/' => $lang['feb'] . "$1",
            '/\[Mar\](\W|$)/' => $lang['mar'] . "$1",
            '/\[Apr\](\W|$)/' => $lang['apr'] . "$1",
            '/\[May\](\W|$)/' => $lang['may2'] . "$1",
            '/\[Jun\](\W|$)/' => $lang['jun'] . "$1",
            '/\[Jul\](\W|$)/' => $lang['jul'] . "$1",
            '/\[Aug\](\W|$)/' => $lang['aug'] . "$1",
            '/\[Sep\](\W|$)/' => $lang['sep'] . "$1",
            '/\[Oct\](\W|$)/' => $lang['oct'] . "$1",
            '/\[Nov\](\W|$)/' => $lang['nov'] . "$1",
            '/\[Dec\](\W|$)/' => $lang['dec'] . "$1",
            '/Sunday(\W|$)/' => $lang['sunday'] . "$1",
            '/Monday(\W|$)/' => $lang['monday'] . "$1",
            '/Tuesday(\W|$)/' => $lang['tuesday'] . "$1",
            '/Wednesday(\W|$)/' => $lang['wednesday'] . "$1",
            '/Thursday(\W|$)/' => $lang['thursday'] . "$1",
            '/Friday(\W|$)/' => $lang['friday'] . "$1",
            '/Saturday(\W|$)/' => $lang['saturday'] . "$1",
            '/January(\W|$)/' => $lang['january'] . "$1",
            '/February(\W|$)/' => $lang['february'] . "$1",
            '/March(\W|$)/' => $lang['march'] . "$1",
            '/April(\W|$)/' => $lang['april'] . "$1",
            '/May(\W|$)/' => $lang['may'] . "$1",
            '/June(\W|$)/' => $lang['june'] . "$1",
            '/July(\W|$)/' => $lang['july'] . "$1",
            '/August(\W|$)/' => $lang['august'] . "$1",
            '/September(\W|$)/' => $lang['september'] . "$1",
            '/October(\W|$)/' => $lang['october'] . "$1",
            '/November(\W|$)/' => $lang['november'] . "$1",
            '/December(\W|$)/' => $lang['december'] . "$1");

        return preg_replace(array_keys($replaces), array_values($replaces), $return);
    }
}
