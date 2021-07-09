/**
 * Created by Mr.Hung on 3/7/2017.
 */
$(document).ready(function () {

    $('.nav ul li').hover(function () {
        $(this).find('.sub-menu:first').show();
    }, function () {
        $(this).find('.sub-menu').hide();
    });
    $('.add_to_cart').on('click', function () {
        var form = $(this).attr('data-id');
        var urlForm = $(this).attr('data-url');
        $.ajax({
            type: "post",
            url: urlForm,
            data: $('#' + form).serialize(),
            dataType: 'json',
            success: function (data) {
                $('#popup-cart').html(data.views);
                $('#v3-modal').modal('show');
                $('.count_item_pr').text(data.total);
            }
        });
        return false;

    })
});
function step_down(ste) {
    var id = $(ste).attr('data-id');
    var val = parseInt($('#' + id).val()) - 1;
    if (val >= 0) {
        $('#' + id).val(val);
        $('#' + id).trigger("change");
    }
}
function step_down1(ste) {
    var id = $(ste).attr('data-id');
    var val = parseInt($('#' + id).val()) - 1;
    if (val >= 0) {
        if(val==0){
            if(confirm('Bạn muốn xóa sản phẩm này?')==true){
                $('#' + id).val(val);
                $('#' + id).trigger("change");
            }
        }else{
            $('#' + id).val(val);
            $('#' + id).trigger("change");
        }

    }
}
function step_up(ste) {
    var id = $(ste).attr('data-id');
    var val = parseInt($('#' + id).val()) + 1;
    if (val < 110) {
        $('#' + id).val(val);

        $('#' + id).trigger("change");
    }
}


function update_cart(itm, rowid, url) {
    var qty = itm.value;
    var url = url + 'cart/update-cart';
    if (qty >= 0) {
        $.ajax({
            type: "post",
            url: url,
            data: {qty: qty, rowid: rowid},
            dataType: 'json',
            success: function (data) {
                $('.wrap_popup').html(data.views);
                $('.count_item_pr').text(data.total);
            }
        })
    }
    return false;
}

function delete_cart(rowid, url) {
    if (confirm("Bạn muốn xóa sản phẩm này ?")) {
        var url = url + 'cart/delete-cart';
        $.ajax({
            type: "post",
            url: url,
            data: {qty: 0, rowid: rowid},
            dataType: 'json',
            success: function (data) {
                $('.wrap_popup').html(data.views);
                $('.count_item_pr').text(data.total);
                // location.reload();
            }
        })
    }

    return false;
}
function update_cart_all(itm, rowid, url) {
    var qty = itm.value;
    var url = url + 'cart/update';
    if (qty >= 0) {
        $.ajax({
            type: "post",
            url: url,
            data: {qty: qty, rowid: rowid},
            dataType: 'json',
            success: function (data) {
                $('.main-container').html(data.views);
                $('.count_item_pr').text(data.total);
            }
        })
    }
    return false;
}
function delete_cart_all(rowid, url) {
    if (confirm("Bạn muốn xóa sản phẩm này ?")) {
        var url = url + 'cart/delete';
        $.ajax({
            type: "post",
            url: url,
            data: {qty: 0, rowid: rowid},
            dataType: 'json',
            success: function (data) {
                $('.main-container').html(data.views);
                $('.count_item_pr').text(data.total);
                // location.reload();
            }
        })
    }

    return false;
}