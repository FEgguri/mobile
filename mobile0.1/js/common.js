//common.js

$('body')
.prepend('<header></header>')
.append('<footer></footer>');


$('header').load('js/hdft.html header',navi);
$('.category-w').load('js/hdft.html .category-w ul');
$('.clickaside-popup').load('js/hdft.html .clickaside-popup .popupbox',popup);
$('footer').load('js/hdft.html footer .footerbox');


function navi(){

  
    //popup-on
    $('.burger').on('click',function(){
        $('.clickaside-popup').addClass('active')
        $('body').css('overflow','hidden')
        
    })



  
}

function popup(){
      //popup-close
      $('.close').on('click',function(){        
        $('.clickaside-popup').removeClass('active')
        $('body').css('overflow','visible')
        
        
    })
        //select
        $('.category').on('click',function(){        
            $('.category').addClass('active');
            $('.brand').removeClass('active');
            
            $('.cate-menu')
            .css('display','block')
            .css('opacity','1');
            $('.bran-menu')
            .css('display','none')
            .css('opacity','0');
        })
        
        $('.brand').on('click',function(){
            $('.category').removeClass('active');
            $('.brand').addClass('active');
            
            $('.bran-menu')
            .css('display','block')
            //.css('opacity','1');
            $('.cate-menu')
            .css('display','none')
            //.css('opacity','0');
        })
    
}
