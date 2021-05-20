$(document).ready(function(){
    $('img').click(function(){
        $(this).slideUp(300);
    });
    $('button').click(function(){
        $('img').slideDown (500);
    });
});