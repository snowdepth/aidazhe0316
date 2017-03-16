//表单注册信息验证
$(function(){	
	
	//登录与数据库连接验证用户名
	$("#denglu").click(function(){		
		$.get("checkUser.php",{"telphone":$("#telphone").val()},
			function(data){
				if($("#telphone").val()==""){
					$("#telTip").html("亲,用户名不能为空");					
				}else{
					if(data.indexOf("1")>-1){
					$("#telTip").html("亲,该用户名可用");
					//验证此用户的密码是否正确
					$.post("checkPass.php",{"telphone":$("#telphone").val(),"userPass":$("#userPass").val()},
						function(data){
							if($("#userPass").val()==""){
								alert("亲,密码不能为空");					
							}else{
								if(data.indexOf("1")>-1){
								alert("登录成功");
								window.location.href="http://localhost/aidazhe02/index.html"; //跳转网站								
								}else{
								alert("亲,您的密码错了!");
								}			
							}			
						});
					}else{
					$("#telTip").html("亲,该用户名不存在");
					}			
				}														
			});
	});
	
});
