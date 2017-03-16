

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

