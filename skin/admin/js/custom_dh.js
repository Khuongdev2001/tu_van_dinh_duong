function add_loading(){
    var baseUrl=$('body').attr('data-base');
    var img='<div class="overlay"></div><img src="'+ baseUrl+'skin/admin/images/loading.gif" class="loading_gif" />';
    $('body').append(img);
}
function remove_loading(){
    $('.overlay').remove();
    $('.loading_gif').remove();
}
function notice_js(mess,type,vr_from = "top",vr_align = "center"){
    $.notify({
        // options
        icon: 'glyphicon glyphicon-ok',
        title: '',
        message: mess,
        //url: 'https://github.com/mouse0270/bootstrap-notify',
        target: '_blank'
    },{
        // settings
        element: 'body',
        position: null,
        type: type,
        allow_dismiss: false,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: vr_from,
            align: vr_align
        },
        offset: 0,
        spacing: 10,
        z_index: 1031,
        delay: 3000,
        timer: 1000,
        url_target: '_blank',
        mouse_over: null,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class'
        //template:''
    });
}
//CHECK ALL CHECKBOX
$(document).on('click','.check-all',function(){
    $(".item-checkbox input:checkbox").prop('checked', $(this).prop("checked"));
    if($(this).is(':checked')){
        $('.action-all-buttom').animate({width: 'show'});
    }else{
        $('.action-all-buttom').animate({width: 'hide'});
    }
});
$(document).on('click','.case',function(){
    if($(".case:checked").length>0){
        $('.action-all-buttom').animate({width: 'show'});
    }else{
        $('.action-all-buttom').animate({width: 'hide'});
    }
    if($(".case").length == $(".case:checked").length) {
        $(".check-all").prop('checked', $(this).prop("checked"));
    } else {
        $(".check-all").removeAttr("checked");
    }
});
//CHECK ALL CHECKBOX
//ACTION ALL AJAX
$(document).on('click','.action_all_item',function(){
    var confirm2 = confirm('Bạn có chắc chắn muốn thay đổi trạng thái tất cả các bản ghi đã chọn không?');
    if (confirm2) {
        var s_array = $("input.case:checkbox:checked").map(function () {
            return this.value;
        }).toArray();
        var table=$('body').attr('data-table');
        var baseUrl = $('body').attr('data-base');
        var action = $(this).attr('data-action');
        var url = baseUrl+ 'admin/action_all';
        add_loading();
        $.ajax({
            type: "POST",
            url: url,
            data: {action: action, s_array: s_array,table:table},
            success: function (data, status) {
                location.reload();
            }
        })
    }
})
//ACTION ALL AJAX
//FILTER ACTION
$(document).on('change','.action_selecte',function(){
    var key=$(this).attr('name');
    var value=$(this).val();
    if(value==''){
        removeParameterFromUrl(key);
    }else{
        insertParam(key,value);
    }

});

//FILTER ACTION
//action order

$(document).on('change','.action_order',function(){
    var key=$(this).find('option:selected').attr('title');
    var value=$(this).val();
    var table=$('body').attr('data-table');
    var url = $('body').attr('data-base')+'admin/action_addorder';
    $.ajax({
        type: "POST",
        url: url,
        data: {key: key,value:value,table:table},
        success: function (data, status) {
            location.reload();
        }
    })
});
//ACTION UNPUBLISH - PUBLISH
$(document).on('click','.publish-off',function(){
    var table=$('body').attr('data-table');
    var baseUrl = $('body').attr('data-base');
    var id = $(this).attr('data-id');
    var url = baseUrl+ 'admin/action_publish';
    add_loading();
    $.ajax({
        type: "POST",
        url: url,
        data: {id: id,table:table},
        success: function (data, status) {
            location.reload();
        }
    })
})
$(document).on('click','.publish-on',function(){
    var table=$('body').attr('data-table');
    var baseUrl = $('body').attr('data-base');
    var id = $(this).attr('data-id');
    var url = baseUrl+ 'admin/action_unpublish';
    add_loading();
    $.ajax({
        type: "POST",
        url: url,
        data: {id: id,table:table},
        success: function (data, status) {
            location.reload();
        }
    })
})

$(document).on('click','.delete-item',function(){
    var confirm2 = confirm('Bạn có chắc chắn muốn xóa bản ghi này không?');
    if (confirm2) {
        var table=$('body').attr('data-table');
        var baseUrl = $('body').attr('data-base');
        var id = $(this).attr('data-id');
        var url = baseUrl+ 'admin/delete_ajax';
        add_loading();
        $.ajax({
            type: "POST",
            url: url,
            data: {id: id,table:table},
            success: function (data, status) {
                location.reload();
            }
        })
    }
})
//QUICK EDIT TITLE AJAX
$(document).on('click','.button_submit',function(){
    var table=$('body').attr('data-table');
    var baseUrl = $('body').attr('data-base');
    var id_input=$(this).attr('data-id');
    var url = baseUrl+ 'quick-edit'+'?table='+table;
    var input_value=$('#input_edit_'+id_input).val();
    if(input_value==''){
        $('#input_edit_'+id_input).notify(
            "Tiêu đề không được để trống",
            { position:"top center",autoHideDelay: 3000}
        );
    }
    if(input_value!=''){
        $.ajax({
            type: "POST",
            url: url,
            data: {id: id_input,table:table,title:input_value},
            success: function (data, status) {
                $('#title_'+id_input).text(input_value);
                $('#cell_append_'+id_input).append('<span title="Sửa nhanh tiêu đề" data-id="'+id_input+'"  class="quick-edit edit-ajax glyphicon glyphicon-edit"></span>');
                $('#title_'+id_input).attr('title',input_value);
                $('.box-name').show();
                $('.input_title').hide();
                notice_js("Cập nhập tiêu đề thành công",'success');
            }
        })
    }

})
$(document).on('click','.refesh',function(){
    var id=$(this).attr('data-id');
    var table=$('body').attr('data-table');
    var baseUrl = $('body').attr('data-base');
    var id_input=$(this).attr('data-id');
    var url = baseUrl+ 'quick-update-time'+'?table='+table;
    if(id !=0){
        $.ajax({
            type: "POST",
            url: url,
            data: {id: id,table:table},
            success: function (data, status) {
                notice_js("Cập nhập thành công",'success');
            }
        })
    }
})
$(document).on('click','.btn-update',function(){
    if(confirm('Bạn muốn nhân bản trang này?') ==true){
        var id=$(this).attr('data-id');
        var table=$('body').attr('data-table');
        var baseUrl = $('body').attr('data-base');
        var id_input=$(this).attr('data-id');
        var url = baseUrl+ 'quick-duplicate'+'?table='+table;
        if(id !=0){
            $.ajax({
                type: "POST",
                url: url,
                data: {id: id,table:table},
                success: function (data, status) {
                    notice_js("Nhân bản thành công",'success');
                }
            })
        }
    }

})
$(document).on('click','.item-status',function(){
    $(".item-status").not(this).removeClass('hover-status');
    var id=$(this).attr('data-id');
    var container = $('#box_act_'+id);
    $(".box-list-action").not(container).removeClass('show-item-action');
    $(this).toggleClass('hover-status');
    if(container.hasClass( "show-item-action" )){
        container.removeClass('show-item-action');
    }else{
        container.addClass('show-item-action');
    }
})
$(document).on('change','.order_change',function(){
    var val_obj=parseInt($(this).val(), 10);
    var id_obj=$(this).attr('data-id');
    var table_obj=$('body').attr('data-table');
    if($.isNumeric( val_obj)){
        var baseUrl = $('body').attr('data-base');
        var url = baseUrl+ 'admin/ajax_order_quick';
        add_loading();
        $.ajax({
            type: "POST",
            url: url,
            data: {table_obj:table_obj,val_obj:val_obj,id_obj:id_obj},
            success:function(){
                remove_loading();
                notice_js("Cập nhập thành công",'success');
            }
        });
    }else{
        alert('Vui lòng nhập kiểu số!');
    }
})
$(document).mouseup(function (e)
{
    var container = $(".box-list-action");
    var parent = $(".item-status");
    if (!container.is(e.target) // if the target of the click isn't the container...
        && !parent.is(e.target)) // ... nor a descendant of the container
    {
        parent.removeClass('hover-status');
        container.removeClass('show-item-action');
    }
});
$(document).on('click','.quick-edit',function(){
    $(this).hide();
    var id_input=$(this).attr('data-id');
    $('.box-name').show();
    $('.input_title').hide();
    $('#title_'+ id_input).hide();
    $('#input_'+ id_input).show();
    $('#input_edit_'+id_input).focus();
})
$(document).on('click','.button_cancel',function(){
    var id_input=$(this).attr('data-id');
    var text_title=$('#title_'+id_input).attr('title');
    $('#input_edit_'+id_input).val(text_title);
    $('.box-name').show();
    $('.input_title').hide();
    $('#cell_append_'+id_input).append('<span title="Sửa nhanh tiêu đề" data-id="'+id_input+'"  class="quick-edit edit-ajax glyphicon glyphicon-edit"></span>');
})
//ACTION UNPUBLISH - PUBLISH

//ACTION ADD MULTI CATEGORY
$(document).on('click','.custom-btn-add',function(){
    var numItems = $('.element_added').length;
    var id = $( "select[name='category[]'] option:selected:last").val();
    var text_vl=$( "select[name='category[]'] option:selected:last").text();
    var check=$('.element_id_'+id).length;
    if(check>0){
        notice_js("Danh mục đã tồn tại",'danger');
    }else{
        if(id){
            var value_add='<input id="input_id_element_added_'+numItems+'" type="hidden" value="'+id+'" name="id_cate[]"/>';
            var text_add='<span id="element_added_'+numItems+'" class="element_added element_id_'+id+'" >'+text_vl+'</span>';
            $('.added_category').append(text_add);
            $('.added_category').append(value_add);
        }
    }
})
$(document).on('click','.element_added',function(){
    var confirm2 = confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm2) {
        var id=$(this).attr('id');
        $(this).remove();
        $('#input_id_'+id).remove();
    }
})
function count_visit(table,link){
    var baseUrl = $('body').attr('data-base');
    var url = baseUrl+ 'admin/count_visit';
    $.ajax({
        type: "POST",
        url: url,
        data: {table:table},
        success:function(){
            window.location.href=link;
        }
    });
}
