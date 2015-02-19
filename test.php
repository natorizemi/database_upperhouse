<?PHP
$link = mysql_connect('localhost', 'root', 'gai0730');
if (!$link) {
    die('接続失敗です。'.mysql_error());
}
else{
	print "seikou";
}
?>