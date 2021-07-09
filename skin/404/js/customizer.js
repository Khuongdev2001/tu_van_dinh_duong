$(document).ready(function()
{
    $('.customizer-color').click(function()
    {
        $('.customizer-color.active').removeClass('active').text('');
        $(this).addClass('active').text('+');

        $('#color_stylesheet').attr('href', 'css/colors-' + $(this).data('color') + '.css');
    });
});