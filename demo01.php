<?php
	
	header("content-type","text/html;charset=utf-8");
	
	$telphone = $_POST['telphone'];
	$userPass = $_POST['userPass'];
	
	//建立连接
	$cont = mysql_connect("localhost:3306","root","root");
	
	if($cont){
		echo("注册成功");
	}else{
		echo("注册失败");
	}
	//选择数据库
	mysql_select_db("aidazhe",$cont);
	//执行语句(插入数据)
	$sqlStr = "insert into vipTable(telphone,userPass)values('".$telphone."','".$userPass."')";
	
	mysql_query($sqlStr,$cont);
	
	//关闭数据库
	mysql_close($cont);
		
?>