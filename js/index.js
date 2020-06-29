// 设置html基准值
(function(){

   function getWidth(){
    //    获取html标签
    var html = document.querySelector('html')
    // 获取当前页面宽度
    var width = html.clientWidth
    // 设置fontSize 基准值
    var fontSize = width / 20 + 'px'
    // 基准值设置到html标签上
    html.style.fontSize = fontSize
   }
    getWidth()
    //  当页面发生变化时，动态设置  html 基准值
   window.onresize = function(){
    getWidth()
   }

})()















