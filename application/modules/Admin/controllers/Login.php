<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MX_Controller
{
    private $tb_setting = 'setting';
    private $tb_users = 'users';

    function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $data=array();
        $loged = $this->session->userdata('loged');
        if (empty($loged)) {
            $data['capt2'] = 0;
            $this->load->helper('captcha');
            $expiration = time() - 7200; // Two hour limit

            // Specify the target directory and add forward slash
            $path = "captcha/";
            // Loop over all of the files in the folder
            foreach (glob($path . "*.*") as $file) {
                unlink($file); // Delete each file through the loop
            }
            $ip = $this->input->ip_address();
            $vals = array(
                'img_path'      => './captcha/',
                'img_url'       => base_url().'captcha/',
                'img_width'     => '150',
                'img_height'    => 40,
                'expiration'    => 7200,
                'word_length'   => 5,
                'font_size'     => 16,
                'img_id'        => 'Imageid',
                'pool'          => '0123456789',

                // White background and border, black text and red grid
                'colors'        => array(
                    'background' => array(42, 21, 170),
                    'border' => array(255, 255, 255),
                    'text' => array(251, 251, 253),
                    'grid' => array(255, 40, 40)
                ));
            $cap = create_captcha($vals);
            $data1 = array(
                'captcha_time' => $cap['time'],
                'ip_address' => $this->input->ip_address(),
                'word' => $cap['word']
            );

            $this->db->insert('captcha', $data1);
            $this->db->query("DELETE FROM bigweb_captcha WHERE captcha_time < " . $expiration);

// Then see if a captcha exists:
            if (!empty($_POST['capt'])) {
                $postcapt = $this->input->post('capt');
            } else {
                $postcapt = '';
            }
            $sql = "SELECT COUNT(*) AS count FROM bigweb_captcha WHERE word = ? AND ip_address = ? AND captcha_time > ?";
            $binds = array($postcapt, $this->input->ip_address(), $expiration);
            $query = $this->db->query($sql, $binds);
            $row = $query->row();
            $data['cap'] = $cap;
            if($_POST) {
                $this->form_validation->set_rules('username', 'Tên đăng nhập', 'trim|required');
                $this->form_validation->set_rules('password', 'Mật khẩu', 'trim|required');
                $this->form_validation->set_rules('capt', 'Mã kiểm tra', 'trim|required');
                if ($this->form_validation->run() == TRUE ) {
                    if ($row->count == 0) {
                        $data['capt2'] = 1;
                        if(isset($_COOKIE['number_cap'])){
                            setcookie('number_cap',$_COOKIE['number_cap']+1,time()+3600);
                        }else{
                            setcookie('number_cap',1,time()+3600);
                        }
                    } else {
                        $data['capt2'] = 0;
                        $data['error'] = '';
                        $username = $this->security->xss_clean($_POST['username']);
                        $password = $this->security->xss_clean($_POST['password']);
                        $password = sha1(md5($password));
                        //AUTO LOGIN
                        $autologin = ($this->input->post('remember') == 1) ? 1 : 0;
                        if ($autologin == 1) {
                            $cookie_name = 'cook';
                            $cookie_time = 3600 * 24 * 30; // 30 days.
                            setcookie($cookie_name, 'username=' . "", time() - 3600);    // Unset cookie of user
                            setcookie('cook', 'username=' . $username . '&password=' . $password, time() + $cookie_time);
                        }
                        //AUTO LOGIN
                        $log = $this->Admin_model->get_one($this->tb_users, array('username' => $username, 'password' => $password));
                        if (!empty($log)) {
                            $this->session->set_userdata('loged', $log->id);
                            $this->session->set_userdata('mem_admin', $log);
                            if ($log->idgroup == 1) {
                                setcookie('upload', 'admin', time() + 84600);
                            } else {
                                setcookie('upload', '', time() - 1);
                            }
                            setcookie('number_cap','',time()-3600);
                            redirect('manager/dashboard');
                        } else {
                            if(isset($_COOKIE['number_cap'])){
                                setcookie('number_cap',$_COOKIE['number_cap']+1,time()+3600);
                            }else{
                                setcookie('number_cap',1,time()+3600);
                            }
                            $data['error'] = 1;
                        }
                    }
                }else{
                    if(isset($_COOKIE['number_cap'])){
                        setcookie('number_cap',$_COOKIE['number_cap']+1,time()+3600);
                    }else{
                        setcookie('number_cap',1,time()+3600);
                    }
                }
                $data['setting'] = $this->Admin_model->get_one($this->tb_setting);
            }
            $this->load->view('Admin/view_login', $data);
        } else {
            redirect('manager/dashboard');
        }
    }

    public function log_out()
    {
        $this->session->unset_userdata('loged');
        redirect(base_url() . 'manager');
    }
    public function forgot(){
        $loged = $this->session->userdata('loged');
        if (empty($loged)) {
            $data='';
            $data['setting'] = $this->Admin_model->get_one($this->tb_setting);
            $data['support'] = $this->Admin_model->get_one('support');
            if($_POST) {
                $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                $randstring = '';
                $this->form_validation->set_rules('email', 'Email', 'trim|required');
                if ($this->form_validation->run() == TRUE ) {
                    $data['error'] = '';
                    $email = $this->security->xss_clean($_POST['email']);
                    $log = $this->Admin_model->get_one($this->tb_users, array('email' => $email));
                    if (!empty($log)) {
                        for ($i = 0; $i < 6; $i++) {
                            $randstring .= $characters[rand(0, strlen($characters))];
                        }
                        if($randstring==''){
                            $randstring='123456';
                        }
                        $pass = sha1(md5($randstring));
                        $this->Admin_model->update_data('users',array('id'=>$log->id),array('password'=>$pass));
                        $content = '<p>Reset mật khẩu thành công. Mật khẩu mới của bạn là:'.$randstring.'</p>';
                        $this->Admin_model->send_mail('Reset password','Amdmin',$data['support']->email,$email,$content,$data['support']->email_send,$data['support']->password);
                        $data['success'] = 1;
                    }else{
                        $data['error']=1;
                    }
                }

            }
            $this->load->view('Admin/view_forgot', $data);
        } else {
            redirect('manager/dashboard');
        }
    }
}
