//表单注册信息传输
$(function(){	
		
	//手机号码输入格式
		var flag1 = 0;
		var flag2 = 0;
		var flag3 = 0;
		$("#telphone").blur(function(){
			var reg2=/^1\d{10}$/;         
			var oText2=$("#telphone").val();
			if(oText2==""){
			$("#telTip").html("请输入正确的手机格式");
			}else if(reg2.test(oText2)){
				$("#telTip").html("");	
				flag1 = 1;
				}else{
				$("#telTip").html("请输入正确的手机格式");
				}
		});	
		
		$("#userPass").blur(function(){
			let reg3 = /^[0-9a-zA-Z][0-9a-zA-Z_]{5,11}$/;
			let oText3 = $("#userPass").val();
			if(oText3==""){
				$("#passTip01").css("display","block");
			}else{
				if(reg3.test(oText3)){
					flag2 = 1;
					$("#passTip01").css("display","none");
				}else{
					$("#passTip01").html("请输入正确格式").css("display","block");
				}
			}
		});
		
		$("#passAgain").blur(function(){
						if($("#userPass").val()==$("#passAgain").val()){
							$("#passAgainTip").html("");
							flag3 = 1;
						}else{
							$("#passAgainTip").css("display","block");
						}
					});
	
	//向服务器传输账号和密码信息
	$("#telphone").blur(function(){
		$.get("checkUser.php",{"telphone":$("#telphone").val()},
			function(data){
				if($("#telphone").val()==""){
					$("#telTip").html("亲,用户名不能为空");					
				}else{
					if(data.indexOf("1")>-1){
						$("#telTip").html("亲,该用户名已被注册");
						$("#join").click(function(){
							alert("亲,又调皮了!")
						});
					//验证此用户的密码是否正确					
					}else{
					$("#telTip").html("亲,该用户名可用");
						$("#join").click(function(){
							if(flag1==true&&flag2==true&&flag3==true){							
								$.post("demo01.php",{"telphone":$("#telphone").val(),"userPass":$("#userPass").val()	
								},
									function(data){
										alert(data);
										window.location.href="http://localhost/aidazhe02/login.html"; 
									}
								)
							}	
						});	
					}			
				}														
		});
	});	
});
