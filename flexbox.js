$(document).ready(function () {
    $('.more-items').on('click', lathato);
});

function lathato()
{
    if ($(this).parent().find('.more').is(':hidden'))
    {
        $(this).parent().find('.more').slideToggle();
        $(this).parent().find('.more-items').html('Vissza &laquo;');/*Aktuális html elemen tartalomcsere.*/
    } else
    {
        $(this).parent().find('.more').slideToggle();
        $(this).parent().find('.more-items').html('Tovább &raquo;');
    }
}