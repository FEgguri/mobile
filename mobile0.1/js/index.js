

    
  //메인 컨텐츠 슬라이더    
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
        delay: 3000,//3초
        disableOnInteraction: false,
    },
    loop: true,//무한루프
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
//공지슬라이더
(function () {
  const slideList = document.querySelector('.slide_list');  // Slide parent dom
  const slideContents = document.querySelectorAll('.slide_content');  // each slide dom
  const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
  const slideBtnPrev = document.querySelector('.slide_btn_prev'); // prev button
  const pagination = document.querySelector('.slide_pagination');
  const slideLen = slideContents.length;  // slide length
  const slideHeight = 40; // slide height
  const slideSpeed = 300; // slide speed
  const startNum = 0; // initial slide index (0 ~ 4)
  

  
  // Copy first and last slide
  let firstChild = slideList.firstElementChild;
  let lastChild = slideList.lastElementChild;
  let clonedFirst = firstChild.cloneNode(true);
  let clonedLast = lastChild.cloneNode(true);

  // Add copied Slides
  slideList.appendChild(clonedFirst);
  slideList.insertBefore(clonedLast, slideList.firstElementChild);

  // Add pagination dynamically
  let pageChild = '';
  for (var i = 0; i < slideLen; i++) {
    pageChild += '<li class="dot';
    pageChild += (i === startNum) ? ' dot_active' : '';
    pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
  }
  pagination.innerHTML = pageChild;
  const pageDots = document.querySelectorAll('.dot'); // each dot from pagination

  slideList.style.transform = "translate3d(0px,-" + (slideHeight * (startNum + 1)) + "px, 0px)";

  let curIndex = startNum; // current slide index (except copied slide)
  let curSlide = slideContents[curIndex]; // current slide dom
  curSlide.classList.add('slide_active');

  /*interval */

setInterval(function(){
  if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(0px,-" + (slideHeight * (curIndex + 2)) + "px ,0px)";
  }
  if (curIndex === slideLen - 1) {
    setTimeout(function() {
      slideList.style.transition = "0ms";
      slideList.style.transform = "translate3d(0px,-" + slideHeight + "px, 0px)";
    }, slideSpeed);
    curIndex = -1;
  }
  curSlide.classList.remove('slide_active');
  pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
  curSlide = slideContents[++curIndex];
  curSlide.classList.add('slide_active');
  pageDots[curIndex].classList.add('dot_active');
},3000);
  /** Next Button Event */
  slideBtnNext.addEventListener('click', function() {
    if (curIndex <= slideLen - 1) {
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translate3d(0px,-" + (slideHeight * (curIndex + 2)) + "px ,0px)";
    }
    if (curIndex === slideLen - 1) {
      setTimeout(function() {
        slideList.style.transition = "0ms";
        slideList.style.transform = "translate3d(0px,-" + slideHeight + "px, 0px)";
      }, slideSpeed);
      curIndex = -1;
    }
    curSlide.classList.remove('slide_active');
    pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
    curSlide = slideContents[++curIndex];
    curSlide.classList.add('slide_active');
    pageDots[curIndex].classList.add('dot_active');
  });

  /** Prev Button Event */
  slideBtnPrev.addEventListener('click', function() {
    if (curIndex >= 0) {
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translate3d(0px,-" + (slideHeight * curIndex) + "px, 0px)";
    }
    if (curIndex === 0) {
      setTimeout(function() {
        slideList.style.transition = "0ms";
        slideList.style.transform = "translate3d( 0px,-" + (slideHeight * slideLen) + "px, 0px)";
      }, slideSpeed);
      curIndex = slideLen;
    }
    curSlide.classList.remove('slide_active');
    pageDots[(curIndex === slideLen) ? 0 : curIndex].classList.remove('dot_active');
    curSlide = slideContents[--curIndex];
    curSlide.classList.add('slide_active');
    pageDots[curIndex].classList.add('dot_active');
  });

  /** Pagination Button Event */
  let curDot;
  Array.prototype.forEach.call(pageDots, function (dot, i) {
    dot.addEventListener('click', function (e) {
      e.preventDefault();
      curDot = document.querySelector('.dot_active');
      curDot.classList.remove('dot_active');
      
      curDot = this;
      this.classList.add('dot_active');

      curSlide.classList.remove('slide_active');
      curIndex = Number(this.getAttribute('data-index'));
      curSlide = slideContents[curIndex];
      curSlide.classList.add('slide_active');
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translate3d(0px,-" + (slideHeight * (curIndex + 1)) + "px, 0px)";
    });
  });
})();


//ajax
let dataChange = function(){
  $.ajax({
    url:'js/data.json',
    success:function(data){
     
      
     
    function change(){
        let goodsinfo = '';
        $.each(data.goods,function(k,v){ 
          goodsinfo = `<li><a href="#">            <div class="img">                <img class="goodsimg" src="${v.src}">            </div>        </a>        <div class="disc">             <a href="#">             <div class="best-icon-c">                 <img class="best-icon" src="${v.sellicon}" alt="best">             </div>             <ul class="goodsinfo">                 <li class="goodstitle">${v.title}</li>                 <li class="pricedisc">${v.dis}</li>                 <li class="preprice">${v.preprice}</li>                 <li class="price">${v.price}</li>             </ul>         </a>         <ul class="btn-c">             <li><input class="wishbtn" type="button"></input></li>             <li><input class="cartbtn" type="button"value=""></li>             <li><input class="buybtn" type="button" value="바로구매"></li>         </ul>         </div>    </li>` ;      
          
          $('.list-c').append(goodsinfo);
          
        })
      }

      $('.morebtn').on('click',function(){
        $('.morebtn-box').css('display','none')
        change();
      })
    }
  })
}
dataChange();

