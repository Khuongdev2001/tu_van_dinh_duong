<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Common extends CI_Hooks
{
    private $rear = '';

    function __construct()
    {
        parent::__construct();
        $CI = get_instance();

    }

    public function Get_setting()
    {
        $CI = get_instance();
        $url = uri_string();

        /** get db url redirect **/
        if ($url != '' && $url != '' && ($row = $CI->Common_model->get_one('redirect', array('url' => $url))) != null) {
            $redirectUrl = $row->redirect_url;
            redirect($redirectUrl, 'location', 301);
        }
        $_SESSION['rear'] ='';
        $GLOBALS['sett'] = $CI->Common_model->get_one('setting');
        $GLOBALS['supp'] = $CI->Common_model->get_one('support');
        $GLOBALS['arr_cate'] = $CI->Common_model->get_data('categories', array('show' => 1));
        $GLOBALS['title'] = 'title' ;
        $GLOBALS['intro'] = 'introtext' ;
        $GLOBALS['value'] = 'value' ;
        $GLOBALS['in_value'] = 'in_value' ;
        $GLOBALS['alias'] = 'alias' ;
        $GLOBALS['content_text'] = 'content_text' ;
        $GLOBALS['address'] = 'address' ;
        $GLOBALS['footer'] = 'footer' ;
        $GLOBALS['address_contact'] = 'address_contact' ;
        $GLOBALS['excerpt'] = 'excerpt' ;
        $GLOBALS['customer'] = 'customer' ;
        $GLOBALS['title_other'] = 'title_other' ;
        $GLOBALS['hyperlink'] = 'hyperlink' ;
    }

}
