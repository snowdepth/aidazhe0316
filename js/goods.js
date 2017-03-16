$(function(){
	$.get("getGoodsList.php",
		function(data){
//			console.log(data);			
			let dataObj = eval(data);
			for(let i=0;i<dataObj.length;i++){
				var htmlStr = "<li>";
				htmlStr += "<div class='good-buy'><div class='good-pic'><a href='Pro-Info.html'><img src='"+dataObj[i].goodsImg+"'/></a></div><h3><span>[包邮]</span><a href='Pro-Info.html'>"+dataObj[i].goodsName+"</a><em>上新</em></h3><div class='good-price'><div class='price-current'><em>￥</em><span>"+dataObj[i].goodsPrice+"</span></div><div class='price-old'><em>"+dataObj[i].goodsDesc+"</em><span><!--(3.5折)--></span></div><div class='discount'><!--<i class='iconfont icon-taobao'></i>--><span> 特卖</span></div></div><a class='collect' href='Pro-Info.html'><em><i class='iconfont icon-shoucang'></i></em></a><a class='buy' href='Pro-Info.html'>去购买</a></div>";					
				htmlStr += "</li>";
				$("#pro .good-list").append(htmlStr);
			}			
		});
});