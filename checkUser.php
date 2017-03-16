<?php
	//接受客户端传来的数据(数据名)
	$telphone = $_GET['telphone'];
	
	//连接数据库
	$cont = mysql_connect("localhost","root","root");
	mysql_select_db("aidazhe",$cont);
	//执行sql语句
	$sqlStr = "select * from vipTable where telphone='".$telphone."'";
	$result = mysql_query($sqlStr,$cont);
	
	$rows = mysql_num_rows($result);
	
	//关闭数据库
	mysql_close($cont);
	
	//根据查询结果返回(1或0)
	echo($rows);
	
?>

