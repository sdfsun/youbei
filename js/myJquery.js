// 首页部分
    $('.Home').hover(function(){
        
        $('.slidNav').stop().slideDown(700)

       $(this).addClass('isShow')
    },function(){
        
    })

    $('.nav>li').mouseover(function(){
        $(this).css('background','#ccc').siblings().css('background','')
     //    是否选中首页
       if(!$(this).hasClass('Home')){
         $('.slidNav').stop().slideUp(500)
         $('.Home').css('background','none')
       }
    
    })


  
   



//    下拉列表
    $('.slidNav').hover(function(){

        $('.isShow>li').mouseover(function(){
            $(this).css('background','#ccc').siblings().css('background','')
            $(this).find('div').stop().fadeIn(300).parent('li').siblings().find('div').stop().hide() 

        })

    },function(){
        $('.slidNav').stop().slideUp()
        $('.Home').removeClass('isShow')

        //  不选择首页去除背景色
        // if($('.slidNav').css('display') !== 'none'){
        //     $('.Home').css('background','none')
        // }
    })



     $('.isShow>li').click(function(){
            $('.slidNav').stop().slideUp(700)
            $('.box').stop().slideUp(700)
    })



// 主治项目
$('.type').mouseover(function(){
    $(this).css('background','#a95fe0').find('a').css('color','#fff')
    $(this).siblings().css('background','').find('a').css({
        color:'#000',
        background: 'none'
    })
    var index = $(this).index()
    $('.tab').eq(index).show().siblings().hide()
    $(this).addClass('typeyi').siblings().removeClass('typeyi')

})

$('.fllog').click(function(){
    // window.location.href ='file:///C:/Users/Administrator/Desktop/new-YouBei/page.html'
    window.location.href ='page.html'
})




