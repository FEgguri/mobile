
$('.clickimg').on('click',function(){   
    $(this).toggleClass('active');
    $('.slideinfo-box').slideToggle();
})


$('.toggle_btn').on('click',function(){   
    $(this).toggleClass('active');
    $('.contentbox').slideToggle();
})