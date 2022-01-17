let goodsinfo = '';
let goodsinfo1 = '';
let goodsinfo2 = '';
let dataChange = function(){
    $.ajax({
      url:'js/data2.json',
      success:function(data2){     
          $.each(data2.goods,function(k,v){ 
            goodsinfo += `<li><a href="#">            <div class="img">                <img class="goodsimg" src="${v.src}">            </div>        </a>        <div class="disc">             <a href="#">             <div class="best-icon-c">                 <img class="best-icon" src="${v.sellicon}" alt="best">             </div>             <ul class="goodsinfo">                 <li class="goodstitle">${v.title}</li>                                                 <li class="price">${v.price}</li>             </ul>         </a>         <ul class="btn-c">             <li><input class="wishbtn" type="button"></input></li>             <li><input class="cartbtn" type="button"value=""></li>             <li><input class="buybtn" type="button" value="바로구매"></li>         </ul>         </div>    </li>` ; 
            
            
            
            goodsinfo1 += `<li class="li1"><a class="lia1" href="#">            <div class="img1">                <img class="goodsimg1" src="${v.src}">            </div>        </a>        <div class="disc1">             <a href="#">             <div class="best-icon-c1">                 <img class="best-icon1" src="${v.sellicon}" alt="best">             </div>             <ul class="goodsinfo1">                 <li class="goodstitle1">${v.title}</li>                                                 <li class="price1">${v.price}</li>             </ul>         </a>         <ul class="btn-c1">             <li><input class="wishbtn1" type="button"></input></li>             <li><input class="cartbtn1" type="button"value=""></li>             <li><input class="buybtn1" type="button" value="바로구매"></li>         </ul>         </div>    </li>` ; 

            goodsinfo2 += `
            <li class="li2">
                <a class="lia2" href="#">
                    <div class="img2">                
                        <img class="goodsimg2" src="${v.src}">            
                    </div>        
                </a>        
                <div class="disc2">             
                    <a href="#">             
                           
                        <ul class="goodsinfo2">                 
                            <li class="goodstitle2">
                            ${v.title}
                            </li>                                                 <li class="price2">
                            ${v.price}
                            </li>
                        </ul>  
                        <div class="best-icon-c2">                 
                            <img class="best-icon2" src="${v.sellicon}" alt="best">             
                        </div>             
                    </a>         
                    <ul class="btn-c2">             
                        <li>
                            <input class="wishbtn2" type="button">
                        
                    </li>             
                    <li>
                        <input class="cartbtn2" type="button"value="">
                    </li>             
                    <li>
                        <input class="buybtn2" type="button" value="바로구매">
                    </li>         
                </ul>         
            </div>    
        </li>
        `;
            
           $('.list-c').html(goodsinfo);
            
          })
        
        
            
       
      }
    })
  }
  dataChange();
  window.onload= function(){
    $('.viewtype ul button').each(function(k,v){
        $(v).on('click',function(){
            $('.viewtype ul button').removeClass('active')
            $(this).addClass('active')  
           
            if($('.s-pic').hasClass('active')){
                $('.goods').html(`<ul class="list-c"></ul>`);
                $('.list-c').html(goodsinfo);
            }
            if($('.list').hasClass('active')){
                $('.goods').html(`<ul class="list-c1"></ul>`);
                $('.list-c1').html(goodsinfo1);
            }
            if($('.pic').hasClass('active')){
                $('.goods').html(`<ul class="list-c2"></ul>`);
                $('.list-c2').html(goodsinfo2);
            }
        
              }) 
        }) 
           
    } 
    
 
