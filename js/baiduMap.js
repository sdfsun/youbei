setTimeout(function(){
    
    // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    
    var point = new BMap.Point(116.238067, 40.218111);
    map.centerAndZoom(point, 15)
    // var opts = {
    // position : point,    // 指定文本标注所在的地理位置
    // offset   : new BMap.Size(-90, -30)    //设置文本偏移量
    // }
    // var label = new BMap.Label("北京市昌平区鼓楼北街商业综合街101", opts);  // 创建文本标注对象
    //     label.setStyle({
    //         color : "#000",
    //         fontSize : "0.125rem",
    //         height : "0.2083rem",
    //         lineHeight : "0.2083rem",
    //         fontFamily:"微软雅黑"
    //     });
    // map.addOverlay(label);

  function addInfo (){
    var opts = {    
        width : 60,     // 信息窗口宽度    
        height: 15,     // 信息窗口高度    
        title : "地址 :"  // 信息窗口标题   
       } 
    var infoWindow = new BMap.InfoWindow("昌平区 南环中路24号优贝口腔", opts);  // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
    map.addOverlay(marker);   
  } 
  addInfo ()
    
  
    
    
    // 向地图添加标注
    
        var myIcon = new BMap.Icon("https://api.map.baidu.com/images/marker_red_sprite.png", new BMap.Size(23, 25));
    
        // 创建标注对象并添加到地图 
        var marker = new BMap.Marker(point,{icon: myIcon});
        map.addOverlay(marker);
    
        // 点击图标 添加信息窗口
        marker.onclick= function(){
            addInfo () 
        }
        
    
    
    
    map.centerAndZoom(new BMap.Point(116.238067, 40.218111), 16);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
    mapTypes:[
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]}));	  
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    },000)
    
    