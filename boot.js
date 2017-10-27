$(document).ready(function(){
    $('.but').on('click', le);
});


function le()
{
    if($(this).parent().find('span').is(':hidden'))
    {
        $(this).parent().find('span').slideDown();
        $(this).parent().find('.but').html('Kevesebb &laquo;');
    }else
    {
        $(this).parent().find('span').slideUp();
        $(this).parent().find('.but').html('Több &raquo;');
    }
}