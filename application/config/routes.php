<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'Home';
$route['language-vi']='Language/Module_lang/lang_vi';
$route['language-en']='Language/Module_lang/lang_en';
$route['upadte-image']='Home/update_img';
$route['register-download']='Products/Module_product/register';
//ACTION FRONTEND

//$route['post-comment']='Article/Module_article/comment';

//ACTION FRONTEND
//ACTION ALL
$route['admin/action_all']='Admin/action/action_all';
$route['admin/action_publish']='Admin/action/publish_ajax';
$route['admin/action_unpublish']='Admin/action/unpublish_ajax';
$route['admin/action_addorder']='Admin/action/addorder_ajax';
$route['admin/delete_ajax']='Admin/action/delete_ajax';
$route['admin/count_visit']='Admin/action/count_visit';
$route['admin/ajax_order_quick']='Admin/action/ajax_order_quick';

//ACTION ALL
$route['quick-edit']='Admin/Edit/quick_edit';
$route['quick-update-time']='Admin/Edit/quick_update_time';
$route['quick-duplicate']='Admin/Edit/quick_duplicate';
$route['manager'] = 'Admin/login';
$route['manager/logout'] = 'Admin/login/log_out';
$route['manager/dashboard'] = 'Admin/admin';
$route['manager/ajax-list'] = 'Admin/admin/permission';
$route['manager/get_categories'] = 'Admin/admin/get_cate';
$route['manager/get_cate_child'] = 'Admin/admin/get_child';
$route['manager/forgot-password'] = 'Admin/login/forgot';
$route['manager/create_language'] = 'Admin/admin/create_language';
$route['manager/notice'] = 'Admin/admin/notice';
$route['manager/library'] = 'Admin/admin/library';
$route['manager/(:any)'] = 'Admin/admin/check_permission';
$route['support/mail_test'] = 'Admin/support/send';
$route['post-city'] = 'Admin/admin/district';
$route['post-country'] = 'Admin/admin/country';
$route['admin-reply-comment'] = 'Admin/admin/rep_com';
//end router admin

$route['register'] = 'Contact/Module_contact/register';
$route['register-contact'] = 'Contact/Module_contact/register_contact';
$route['register-email'] = 'Contact/Module_contact/register_email';
$route['dang-ky-lam-dai-ly'] = 'Contact/Module_contact/index';
$route['dang-ky-lam-dai-ly.html'] = 'Contact/Module_contact/index';
$route['tag/(:any)'] = 'Article/Module_article/tag_art';
$route['tag/(:any)/(:num)'] = 'Article/Module_article/tag_art';

$route['gio-hang'] = 'Cart/Module_cart/display_cart';
$route['checkout'] = 'Cart/Module_cart/checkout';
$route['checkout-payment'] = 'Cart/Module_cart/checkout_register';
$route['cart/(:any)'] = 'Cart/Module_cart/index';
$route['cart/(:any)/(:any)'] = 'Cart/Module_cart/index';

$route['get-news-order'] = 'Cart/Module_cart/news_order';

$route['rpc'] = 'Products/Module_product/rpc';
$route['dbc'] = 'Products/Module_product/dbc';
$route['rpc1'] = 'Article/Module_article/rpc';
$route['dbc1'] = 'Article/Module_article/dbc';

$route['flash-sale'] = 'Products/Module_product/flashsale';
$route['flash-sale/(:any)'] = 'Products/Module_product/flashsale';

$route['khuyen-mai'] = 'Products/Module_product/dealsale';
$route['khuyen-mai/(:any)'] = 'Products/Module_product/dealsale';

$route['post-comment'] = 'Comment/Comment/comment_post';


$route['search'] = 'Search/Module_search/index';
$route['search/(:any)'] = 'Search/Module_search/index/$';
$route['tim-kiem/(:any)'] = 'Search/Module_search/index/$1';
$route['tim-kiem'] = 'Search/Module_search/index';
$route['sitemap.xml'] = 'Sitemap/Module_sitemap/site_map';

$route['(:any)'] = 'Rewrite/index';
$route['(:any)/(:any)'] = 'Rewrite/index';
$route['404_override'] = 'Rewrite/index';
$route['translate_uri_dashes'] = FALSE;
$route['test']='Test/TestController/index';
