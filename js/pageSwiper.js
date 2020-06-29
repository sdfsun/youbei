
// 相关资讯swiper
setTimeout(function(){
var infoswiper = new Swiper('#infoSwiper', {
  observer: true,//修改swiper自己或子元素时，自动初始化swiper
  observeParents: true,//修改swiper的父元素时，自动初始化swiper
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });
},1000)
