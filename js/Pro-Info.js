$(function(){
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
});
$(function(){	
	//产品图片
		$(".black").click(function(){
			$("#piclist1 li")[2].style.opacity = "1";
			$("#piclist1 li")[0].style.opacity = "0";
		});
		$(".white").click(function(){
			$("#piclist1 li")[0].style.opacity = "1";
			$("#piclist1 li")[2].style.opacity = "0";
		});
		
		let oLen = $("#piclist1 li").length;					
		let oLi = $("#piclist2 li");
		let m=0;
		for(i=0;i<oLen;i++){
			oLi[i].index = i;					
			oLi[i].onmouseover=function(){	
				m++;					
				if(m==oLen){
					m=0;
				}					
				for(j=0;j<oLen;j++){
					$("#piclist1 li")[j].style.opacity= "0";							
				}					
				m=this.index;
			$("#piclist1 li")[m].style.opacity = "1";				
			}				
		}				
			
});

$(function(){
	//倒计时
	let a = new Date();
  	let b = new Date("2017-03-16");
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
     $('#cp .day_show').html(day + "天");
     $('#cp .hour_show').html('<s id="h"></s>' + hour + '时');
     $('#cp .minute_show').html('<s></s>' + minute + '分');
     $('#cp .second_show').html('<s></s>' + second + '秒');
     intDiff--;
    }, 1000);
   } 
    timer(intDiff); 
	
	//购物车加减
			var minus = document.getElementById("minus");
			var num = document.getElementById("num");
			var plus = document.getElementById("plus");
						
			//加号的点击
			plus.onclick=function(){
				var n = parseInt(num.value);
				if(n<3&&n>0){
					num.value = n+1;
					minus.disabled=false;
					minus.style.cursor="pointer";
					if(num.value==2){
						plus.style.cursor="not-allowed";
						$("#xiangou")[0].style.display = "inline";
						plus.disabled=true;
						}
					}else{
						plus.disabled=true;						
						plus.style.cursor="not-allowed";						
					}
			}
			//减号的点击
			minus.onclick=function(){
				var n = parseInt(num.value);
				if(n<3&&n>0){
					num.value=n-1;
					plus.disabled=false;
					plus.style.cursor="pointer";
					if(num.value==1){
						minus.style.cursor="not-allowed";
						$("#xiangou")[0].style.display = "none";
						minus.disabled=true;
					}
				}else{
					minus.disabled=true;
					minus.style.cursor="not-allowed";
				}
			}
			//键盘松开数字的处理
			num.onkeyup=function(){
				setTimeout(function(){
					var n = num.value;
					n1=n.replace(/\D/g,"")?n.replace(/\D/g,""):1;
					
					num.value=(n1<3&&n1>0)?n1:1;
					if(num.value==2){
						plus.style.cursor="not-allowed";
						plus.disabled=true;
					}else{
						plus.style.cursor="pointer";
						plus.disabled=false;
					}
					if(num.value==1){
						minus.style.cursor="not-allowed";
						minus.disabled=true;
					}else{
						minus.style.cursor="pointer";
						minus.disabled=false;
					}
				},300)				
			}
	
	//售后保障七个标签切换
		let Len = $("#cp .floor1 li").length;					
		let aLi = $("#cp .floor1 li");
		let m= 0;
		for(i=0;i<Len;i++){
			aLi[i].index = i;					
			aLi[i].onmouseover=function(){	
				m++;					
				if(m==Len){
					m=0;
				}					
			for(j=0;j<Len;j++){
				$("#cp .floor2 li")[j].style.opacity= "0";
				$("#cp .floor1 li")[j].className= "";
				}					
				m=this.index;
				$("#cp .floor2 li")[m].style.opacity = "1";	
				$("#cp .floor1 li")[m].className= "active";
			}				
		}
});
