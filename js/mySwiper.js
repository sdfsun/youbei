// title部分 swiper 轮播
var titleSwiper = new Swiper(".title_swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  speed: 2000,
  loop: true, // 无限轮播
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})



// 先进设备
effect = 0
var swiper = new Swiper('.banner_swiper', {
  loop: true,
  speed: 2000,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides : true,
  watchSlidesProgress : true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  on: {
    setTranslate: function(){
        slides = this.slides
        for(i=0; i< slides.length; i++){
            slide = slides.eq(i)
            progress = slides[i].progress
            //slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
                slide.css({'opacity': '','background': ''});slide.transform('');//清除样式
                
                if(effect == 1){
                    slide.transform('scale('+(1 - Math.abs(progress)/8)+')');  
                }else if(effect == 2){
                    slide.css('opacity',(1-Math.abs(progress)/6));
                    slide.transform('translate3d(0,'+ Math.abs(progress)*20+'px, 0)');  
                }
                else if(effect == 3){
                    slide.transform('rotate('+ progress*30+'deg)');  
                }else if(effect == 4){
                    slide.css('background','rgba('+ (255 - Math.abs(progress)*20) +','+ (127 + progress*32) +',' + Math.abs(progress)*64 + ')');
                }
                
            }	
    },
    setTransition: function(transition) {
        for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition);
        }
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



    
    



    