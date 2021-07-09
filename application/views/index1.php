<!DOCTYPE html>
<html lang="vi" xmlns="http://www.w3.org/1999/xhtml" class="anyflexbox boxshadow display-table">
<?php echo Modules::run('Header/Module_header/shop_index'); ?>
<body data-base="<?php echo base_url(); ?>" class="body--custom-background-color ">
<div id="fb-root"></div>
<script async defer crossorigin="anonymous"
        src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v6.0&appId=216163346320636&autoLogAppEvents=1"></script>


<?php if (!empty($content)) {
    echo $content;
} ?>
</body>
</html>