$(document).ready(function(){
   $('a').mouseenter( fel);
   $('a').mouseleave(le);
});

function fel()
{
    $(this).addClass('horgony');
}
function le()
{
    $(this).removeClass('horgony');
}
