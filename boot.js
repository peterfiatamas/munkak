$(document).ready(function () {
    $('.but').on('click', le);
    $('.box').mouseenter(szin);
    $('.box').mouseleave(szinle);
});


function le()
{
    if ($(this).parent().find('span').is(':hidden'))
    {
        $(this).parent().find('span').slideDown();
        $(this).parent().find('.but').html('Kevesebb &laquo;');
    } else
    {
        $(this).parent().find('span').slideUp();
        $(this).parent().find('.but').html('Több &raquo;');
    }
}

function szin()
{
    $(this).css({"background-color": "#B6C4CC"});
    $(this).css({"box-shadow": "5px 5px 5px black"});
}
function szinle()
{
    $(this).css({"background": ""});
    $(this).css({"box-shadow": ""});
}