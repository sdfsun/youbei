
$('.nav>li').click(function(){
    $(this).css('background','#881bd9').find('a').css('color','#fff')
    $(this).siblings().css('background','none').find('a').css('color','#000')
    var index = $(this).index()
    $('.room>img').eq(index).show().siblings().hide()

    $('.cen>.cenTitle').eq(index).show().siblings().hide()
    $(".box")
      .eq(index)
      .css({
        "visibility": "visible",
        "z-index": "1"
      })
      .siblings(".box")
      .css({
        "visibility": "hidden",
        "position": "absolute",
   
      })
})

$('.logo1').click(function(){
  // window.location.href ='file:///C:/Users/Administrator/Desktop/new-YouBei/index.html'
  window.location.href ='index.html'
})

$('.infoText>p').click(function(){
  // 获取点击id
  var ind =  $(this).attr('index')
  var searchUrl = encodeURI("details.html?index=" + ind); //使用encodeURI编码
  // console.log(searchUrl);
  //  页面跳转
  location.href = searchUrl   
})