<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmls="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<title>Predefined Variables</title>
</head>
<body>
	<!--Script 1.2 - first.php -->
	<p>This is standard HTML</p>
<?php #Script 1,5 - predefined.php
	$file = $_SERVER['SCRIPT_FILENAME']; //This variable stores the full path and name of the script being run
	$user = $_SERVER['HTTP_USER_AGENT']; //Represents the web broswer and OS of the user executing the script
	$server = $_SERVER['SERVER_SOFTWARE']; //Represents the web application on the server that's running PHP
	
	echo "<p>You are running the file:<br /><b>$file</b>.</p>\n";
	echo "<p>You are viewing this page using:<br /><b>$user</b></p>\n";
	echo "<p>This server is running:<br /><b>$server</b></p>\n";	
?>

</body>
</html>
