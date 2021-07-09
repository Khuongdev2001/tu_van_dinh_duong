<?php
class Common_model extends CI_Model{
    function  __construct(){
        parent::__construct();
    }
    function get_data($table,$where='',$order='',$limit='',$select=''){
        if(!empty($where)){
            $this->db->where($where);
        }
        if(!empty($order)){
            $this->db->order_by($order[0],$order[1]);
        }
        if(!empty($limit)){
            if(is_array($limit)){
                $this->db->limit($limit[0],$limit[1]);
            }else $this->db->limit($limit);
        }
        if(!empty($select)){
            $this->db->select($select);
        }
        $query = $this->db->get($table);
        if($query->num_rows() > 0){
            $data = $query->result();
            $query->free_result();
            return $data;
        }else return false;
    }
    function get_data_union($table, $where='',$order='',$limit='',$select='',$like){
        $this->db->like($GLOBALS['title'],$like);
        if(!empty($where)){
            $this->db->where($where);
        }
        if(!empty($select)){
            $this->db->select($select);
        }
        $this->db->distinct();
        $this->db->from("product");
        $this->db->get();
        $query1 = $this->db->last_query();
        $query = $this->db->query($query1);

        if($query->num_rows() > 0){
            $data = $query->result();
            $query->free_result();
            return $data;
        }else return false;
    }
    function get_total_union_like($table,$where='',$select='',$like=''){
        $this->db->like($GLOBALS['title'],$like);
        if(!empty($where)){
            $this->db->where($where);
        }
        if(!empty($select)){
            $this->db->select($select);
        }
        $this->db->distinct();
        $this->db->from("product");
        $this->db->get();
        $query1 = $this->db->last_query();
        $query = $this->db->query($query1);
        return $query->num_rows();
    }
    function get_data_in($table,$where=array(),$where_a='',$order='',$limit='',$select=''){
        if(!empty($where)){
            $this->db->where_in($where[0],$where[1]);
        }
        if(!empty($where_a)){
            $this->db->where($where_a);
        }
        if(!empty($select)){
            $this->db->select($select);
        }
        if(!empty($order)){
            $this->db->order_by($order[0],$order[1]);
        }
        if(!empty($limit)){
            if(is_array($limit)){
                $this->db->limit($limit[0],$limit[1]);
            }else $this->db->limit($limit);
        }
        if(!empty($select)){
            $this->db->select($select);
        }
        $query = $this->db->get($table);
        if($query->num_rows() > 0){
            $data = $query->result();
            $query->free_result();
            return $data;
        }else return false;
    }
    function get_like($table,$where='',$order='',$limit='',$like='',$select=''){
        if(!empty($where)){
            $this->db->where($where);
        }
        if(!empty($order)){
            $this->db->order_by($order[0],$order[1]);
        }
        if(!empty($limit)){
            if(is_array($limit)){
                $this->db->limit($limit[0],$limit[1]);
            }else $this->db->limit($limit);
        }
        if(!empty($select)){
            $this->db->select($select);
        }
        if(!empty($like)){
            $this->db->like($like);
        }
        $query = $this->db->get($table);
        if($query->num_rows() > 0){
            $data = $query->result();
            $query->free_result();
            return $data;
        }else return false;
    }
    function get_data_like($table,$where='',$order='',$limit='',$like='',$select=''){
        if(!empty($where)){
            $this->db->where($where);
        }
        if(!empty($order)){
            $this->db->order_by($order[0],$order[1]);
        }
        if(!empty($limit)){
            if(is_array($limit)){
                $this->db->limit($limit[0],$limit[1]);
            }else $this->db->limit($limit);
        }
        if(!empty($select)){
            $this->db->select($select);
        }
        if(!empty($like)){
            $this->db->like($like[0],$like[1]);
        }
        $query = $this->db->get($table);
        if($query->num_rows() > 0){
            $data = $query->result();
            $query->free_result();
            return $data;
        }else return false;
    }
    function get_total_array($table,$where_in=array(),$where=''){
        if(!empty($where_in)){
            $this->db->where_in($where_in[0],$where_in[1]);
        }
        if(!empty($where)){
            $this->db->where($where);
        }
        $query = $this->db->get($table);
        return $query->num_rows();
    }

    function get_total($table,$where=''){
        if(!empty($where)){
            $this->db->where($where);
        }
        $query = $this->db->get($table);
        return $query->num_rows();
    }
    function get_total_like($table,$where='',$like=''){
        if(!empty($where)){
            $this->db->where($where);
        }
        if(!empty($like)){
            $this->db->like($like);
        }
        $query = $this->db->get($table);

        return $query->num_rows();
    }
    function get_sum_like($table,$where='',$like=''){
        if(!empty($where)){
            $this->db->where($where);
        }
        if(!empty($like)){
            $this->db->like($like[0],$like[1]);
        }
        $query = $this->db->get($table);

        return $query->num_rows();
    }
    function get_one($table,$where='',$order='',$select='',$limit=''){
        if(!empty($where)){
            $this->db->where($where);
        }
        if(!empty($limit)){
            if(is_array($limit)){
                $this->db->limit($limit[0],$limit[1]);
            }else $this->db->limit($limit);
        }
        if(!empty($order)){
            $this->db->order_by($order[0],$order[1]);
        }
        if(!empty($select)){
            $this->db->select($select);
        }
        $query = $this->db->get($table);
        if($query->num_rows() > 0){
            $data = $query->row();
            $query->free_result();
            return $data;
        }else return false;
    }
    function getone($table,$where='',$select=''){
        if(!empty($where)){
            $this->db->where($where);
        }
        if(!empty($select)){
            $this->db->select($select);
        }
        $query = $this->db->get($table);
        if($query->num_rows() > 0){
            $data = $query->row();
            $query->free_result();
            return $data;
        }else return false;
    }
    function get_object($table,$where='',$field=''){
        if(!empty($where)){
            $this->db->where($where);
        }
        $query = $this->db->get($table);
        if($query->num_rows() > 0){
            $data = $query->row();
            $query->free_result();
            return $data->$field;
        }else return false;
    }
    function email_test($add='',$email='',$password='',$name='Administrator',$content='Gửi mail test thành công',$subject='Test mail'){
        require_once('class.phpmailer.php');
        require_once('class.smtp.php');
        $mail = new PHPMailer(true); // defaults to using php "mail()"
        try {
            $mail->charSet= "UTF-8";
            $mail->IsSMTP();
            $mail->SMTPDebug  = 0;
            $mail->Debugoutput = "html"; // Lỗi trả về hiển thị với cấu trúc HTML
            $mail->Host       = "smtp.gmail.com"; //host smtp để gửi mail
            $mail->Port       = 465; // cổng để gửi mail
            $mail->SMTPSecure = "ssl"; //Phương thức mã hóa thư - ssl hoặc tls
            $mail->SMTPAuth   = true; //Xác thực SMTP
            $mail->Username   = $email; // Tên đăng nhập tài khoản Gmail
            $mail->Password   = $password; //Mật khẩu của gmail
            $mail->SetFrom($email,"=?UTF-8?B?".base64_encode($name)."?="); // Thông tin người gửi
            $mail->AddReplyTo($email,"=?UTF-8?B?".base64_encode($name)."?=");// Ấn định email sẽ nhận khi người dùng reply lại.
            $mail->AddAddress($add);//Email của người nhận
            $mail->Subject = "=?UTF-8?B?".base64_encode($subject)."?="; //Tiêu đề của thư
            $mail->MsgHTML($content); //Nội dung của bức thư.
            $mail->CharSet="UTF-8";
            $mail->Send();
            echo '<div class="row"><div class="alert alert-success">
                    <a href="#" class="close" data-dismiss="alert">×</a>
                    <strong>Thành công!</strong><br/> Gửi mail test thành công.
                </div></div>';
        } catch (phpmailerException $e) {
            echo '<div class="row"><div class="alert alert-danger">
                <a href="#" class="close" data-dismiss="alert">×</a>
                <strong>'.$e->errorMessage().'<br /></strong>
                Nếu Gmail và mật khẩu chính  xác vui lòng thực hiện các bước sau:<br />
                <a target="_blank" href="https://www.google.com/settings/u/2/security/lesssecureapps">Bước 1</a>&nbsp;(Chọn Bật/Turn On)<br />
                <a target="_blank" href="https://accounts.google.com/b/0/DisplayUnlockCaptcha">Bước 2</a>&nbsp;(Chọn Đồng ý/Continue)
            </div> </div>';
            //https://accounts.google.com/b/0/DisplayUnlockCaptcha
            //https://www.google.com/settings/u/2/security/lesssecureapps
        }

    }
    function sendmail($subject='',$name='',$email='',$add='',$content,$mailsend='',$pass =''){
        require_once('class.phpmailer.php');
        require_once('class.smtp.php');
        $mail = new PHPMailer(true); // defaults to using php "mail()"
        $mail->charSet= "UTF-8";
        $mail->IsSMTP();
        $mail->SMTPDebug  = 0;
        $mail->Debugoutput = "html"; // Lỗi trả về hiển thị với cấu trúc HTML
        $mail->Host       = "smtp.gmail.com"; //host smtp để gửi mail
        $mail->Port       = 465; // cổng để gửi mail
        $mail->SMTPSecure = "ssl"; //Phương thức mã hóa thư - ssl hoặc tls
        $mail->SMTPAuth   = true; //Xác thực SMTP
        $mail->Username   = $mailsend; // Tên đăng nhập tài khoản Gmail
        $mail->Password   = $pass; //Mật khẩu của gmail
        $mail->SetFrom($email,"=?UTF-8?B?".base64_encode($name)."?="); // Thông tin người gửi
        $mail->AddReplyTo($email,"=?UTF-8?B?".base64_encode($name)."?=");// Ấn định email sẽ nhận khi người dùng reply lại.
        $mail->AddAddress($add);//Email của người nhận
        $mail->Subject = "=?UTF-8?B?".base64_encode($subject)."?="; //Tiêu đề của thư
        $mail->MsgHTML($content); //Nội dung của bức thư.
        $mail->CharSet="UTF-8";
        $mail->Send();
    }
    function send_mail($subject='',$name='',$email='',$add='',$content,$mailsend='',$pass =''){
        require_once('class.phpmailer.php');
        require_once('class.smtp.php');
        $mail = new PHPMailer(); // defaults to using php "mail()"
        try {
            $mail->charSet= "UTF-8";
            $mail->IsSMTP();
            $mail->SMTPDebug  = 0;
            $mail->Debugoutput = "html"; // Lỗi trả về hiển thị với cấu trúc HTML
            $mail->Host       = "smtp.gmail.com"; //host smtp để gửi mail
            $mail->Port       = 587; // cổng để gửi mail
            $mail->SMTPSecure = "tls"; //Phương thức mã hóa thư - ssl hoặc tls
            $mail->SMTPAuth   = true; //Xác thực SMTP
            $mail->Username   = $mailsend; // Tên đăng nhập tài khoản Gmail
            $mail->Password   = $pass; //Mật khẩu của gmail
            $mail->SetFrom($email,"=?UTF-8?B?".base64_encode($name)."?="); // Thông tin người gửi
            $mail->AddReplyTo($email,"=?UTF-8?B?".base64_encode($name)."?=");// Ấn định email sẽ nhận khi người dùng reply lại.
            $mail->AddAddress($add);//Email của người nhận
            $mail->Subject = "=?UTF-8?B?".base64_encode($subject)."?="; //Tiêu đề của thư
            $mail->MsgHTML($content); //Nội dung của bức thư.
            $mail->CharSet="UTF-8";
            $mail->Send();
        } catch (phpmailerException $e) {
            echo '<div class="row"><div class="alert alert-danger">
                <a href="#" class="close" data-dismiss="alert">×</a>
                <strong>'.$e->errorMessage().'<br /></strong>
                Nếu Gmail và mật khẩu chính  xác vui lòng thực hiện các bước sau:<br />
                <a target="_blank" href="https://www.google.com/settings/u/2/security/lesssecureapps">Bước 1</a>&nbsp;(Chọn Bật/Turn On)<br />
                <a target="_blank" href="https://accounts.google.com/b/0/DisplayUnlockCaptcha">Bước 2</a>&nbsp;(Chọn Đồng ý/Continue)
            </div> </div>';
            //https://accounts.google.com/b/0/DisplayUnlockCaptcha
            //https://www.google.com/settings/u/2/security/lesssecureapps
        }
    }
    function insert_data($table,$data=array()){
        $this->db->insert($table, $data);
    }
    function update_data($table,$where ='',$data=array()){
        $this->db->where($where);
        $this->db->update($table, $data);
    }
    function delete_data($table,$where){
        $this->db->where($where);
        $this->db->delete($table);
    }
    function get_number($table,$where = ''){
        if(!empty($where)){
            $this->db->where_in($where[0],$where[1]);
        }
        $query = $this->db->get($table);
        return $query->num_rows();
    }
    function get_number2($table,$where,$where_a){
        if(!empty($where)){
            $this->db->where_in($where[0],$where[1]);
        }
        if(!empty($where_a)){
            $this->db->where($where_a);
        }
        $query = $this->db->get($table);
        return $query->num_rows();
    }
    function get_sum($fiel,$where,$table){
        $this->db->select_sum($fiel);
        $this->db->where($where);
        $query = $this->db->get($table);
        return $query->row()->$fiel;
    }
    function check_trung($nd,$table){
        $this->db->where($nd);
        $query = $this->db->get($table);
        if($query->num_rows()>0){
            $query->free_result();
            return true;
        }return false;
    }
    function get_all_parent($id,$mangcat,$dt,$i=0){
        if($i==0){$this->dt = array();}
        $i++;
        $this->dt[]=$mangcat[$id]->id;
        if($mangcat[$id]->parentid!=0){
            $this->get_all_parent($mangcat[$id]->parentid,$mangcat,$this->dt,$i);
        }
        $i--;
        if($i==0){
            return array_reverse($this->dt);
        }
    }
    function get_all_child($id,$mangcat,$dt1,$i=0){
        if($i==0){$this->dt1 = array();}
        $i++;
        $this->dt1[]=$mangcat[$id];
        if($mangcat[$id]->parentid!=0){
            $this->get_all_child($mangcat[$id]->parentid,$mangcat,$this->dt1,$i);
        }
        $i--;
        if($i==0){
            return array_reverse($this->dt1);
        }
    }
    function  get_all_cat($mangcat,$id,$dtt,$i=0){
        if($i==0){$this->dtt = array();}
        $i++;
        $this->dtt[] = $id;
        if(!empty($mangcat[$id])){
            foreach ($mangcat[$id] as $m){
                $this->get_all_cat($mangcat,$m->id,$this->dtt,$i);
            }
        }
        $i--;
        if($i==0){
            return $this->dtt;
        }
    }
    function time_ago($time){
        $periods = array("giây", "phút", "giờ", "ngày", "tuần", "tháng", "năm");
        $lengths = array("60","60","24","7","4.35","12");
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $now = time();
        $difference = $now - $time;
        for($j = 0; $difference >= $lengths[$j] && $j < count($lengths)-1; $j++) {
            $difference /= $lengths[$j];
        }
        $difference = round($difference);
        if($difference != 1) {
            $periods[$j].= "";
        }
        return "$difference $periods[$j] trước ";
    }
}