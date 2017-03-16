

//轮播图
$(function(){
		function getId(str) {
		return document.getElementById(str);
	}
	var oSlide = getId("slide");
	var oWrap = getId("wrap");
	var oLi = oSlide.getElementsByTagName("li");
	var oPrev = getId("prev");
	var oNext = getId("next");
	var oList = getId("list");
	var _Li = oList.getElementsByTagName("li");
	var timer = null;
	var m = 0;
	var oLen = oLi.length;
	function autoPlay() {
		timer = setInterval(function() {
			//					oLi[m].style.opacity = "0";
			for (var i = 0; i < oLen; i++) {
				oLi[i].style.display = "none";
			}
			m++;
			if (m == oLen) {
				m = 0;
			}
			oLi[m].style.display = "block";
			oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
			move(oLi[m].getElementsByTagName("img")[0], {
				"opacity": "1"
			});
			for (var i = 0; i < oLen; i++) {
				_Li[i].className = "";
			}
			_Li[m].className = "active";
		}, 3000)
	}
	autoPlay();
	//按钮的点击
	//	next
	oNext.onclick = function() {
			//				oLi[m].style.opacity = "0";
			for (var i = 0; i < oLen; i++) {
				oLi[i].style.display = "none";
			}
			m++;
			if (m == oLen) {
				m = 0;
			}
			oLi[m].style.display = "block";
			oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
			move(oLi[m].getElementsByTagName("img")[0], {
				"opacity": "1"
			});
			for (var i = 0; i < oLen; i++) {
				_Li[i].className = "";
			}
			_Li[m].className = "active";
		}
		// prev
	oPrev.onclick = function() {
			//				oLi[m].style.opacity = "0";
			for (var i = 0; i < oLen; i++) {
				oLi[i].style.display = "none";
			}
			m--;
			if (m == -1) {
				m = oLen - 1;
			}
			oLi[m].style.display = "block";
			oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
			move(oLi[m].getElementsByTagName("img")[0], {
				"opacity": "1"
			});
			for (var i = 0; i < oLen; i++) {
				_Li[i].className = "";
			}
			_Li[m].className = "active";
		}
		//鼠标事件
	oWrap.onmouseover = function() {
		clearInterval(timer);
		oNext.style.display = "block";
		oPrev.style.display = "block";
	}
	oWrap.onmouseout = function() {
		autoPlay();
		oNext.style.display = "none";
		oPrev.style.display = "none";
	}
	
	//鼠标放到圆点上边
	for (var i = 0; i < oLen; i++) {
		_Li[i].index = i;
		_Li[i].onmouseover = function() {
			for (var j = 0; j < oLen; j++) {
				_Li[j].className = "";
				oLi[j].style.display = "none";
			}
			this.className = "active";
			m = this.index;
			oLi[m].style.display = "block";
			oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
			move(oLi[m].getElementsByTagName("img")[0], {
				"opacity": "1"
			});
		}
	}
});
//今日品牌里边的倒计时
$(function(){
	let a = new Date();
  	let b = new Date("2017-03-18");
  	let myDate = (b-a)/1000; 
   	let intDiff = parseInt(myDate);//倒计时总秒数量
  
   function timer(intDiff) {
    window.setInterval(function() {
     let day = 0,
       hour = 0,
       minute = 0,
       second = 0;//时间默认值  
     if (intDiff > 0) {
      day = Math.floor(intDiff / (60 * 60 * 24));
      hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
      minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
      second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
     }
     if (minute <= 9)
      minute = '0' + minute;
     if (second <= 9)
      second = '0' + second;
     $('#brand-list .day_show').html(day + "天");
     $('#brand-list .hour_show').html('<s id="h"></s>' + hour + '时');
     $('#brand-list .minute_show').html('<s></s>' + minute + '分');
     $('#brand-list .second_show').html('<s></s>' + second + '秒');
     intDiff--;
    }, 1000);
   } 
    timer(intDiff); 
});

$(function(){
	
//底部列表轮播	
	let timer;
	let ul1=0;
	let ul2=-1;
	function movestep(){
		ul1++;
		if(ul1>1){
			ul1=0;
		}
		ul2++;
		if(ul2==1){
			ul2=-1;
		}
		$("#footer ul").eq(ul1).css({"top":$("#footer .first-ul").outerHeight()});
		//2）、移动当前图片和下一张图片。
		$("#footer ul").eq(ul2).animate({"top":-1*$("#footer .first-ul").outerHeight()},1000);
		$("#footer ul").eq(ul1).animate({"top":2},1000);	
	}
	function init(){
		$("#footer ul:eq(0)").css({top:2});
	};
	function automove(){
		timer = setInterval(movestep,2000);
	}
	init();
	automove();
	$("#footer ul").mouseover(function(){
		clearInterval(timer);
	});
	$("#footer ul").mouseout(function(){
		automove();
	});	
//右边栏目	
	function moveDiv(str1,str2){
		$(str1).mouseenter(function(){
			$(str2).animate({opacity:"1",right:36},500);
		});
		$(str2).mouseleave(function(){
			$(str2).animate({right:72,opacity:"0"},50);
		});
	}	
	moveDiv("#side-box .top .l1 a:eq(0)","#side-box .login:eq(0)");
	moveDiv("#side-box .top .l3 a:eq(0)","#side-box .collect:eq(0)");
	moveDiv("#side-box .top .l4 a:eq(0)","#side-box .youhui:eq(0)");
	moveDiv("#side-box .bottom .l1 a:eq(0)","#side-box .yijian:eq(0)");
	moveDiv("#side-box .bottom .l2 a:eq(0)","#side-box .erweima:eq(0)");
	moveDiv("#side-box .bottom .l3 a:eq(0)","#side-box .backtop:eq(0)");
		
//滚动像素为860px是触发#goodsNav的fixed事件
	
	$(window).scroll(function () {
	       if($(window).scrollTop()>=860){		       		
	       		$("#goodsNav:eq(0)").css("display","block");
	       }else{
	       		$("#goodsNav:eq(0)").css("display","none");
	       }
	});	
});

