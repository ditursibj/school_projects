<?php
	#Set the MySQL host, username, password and database name as constants
	DEFINE ('DB_USER', 'root');
	DEFINE ('DB_PASSWORD', 'bjd123');
	DEFINE ('DB_HOST', 'localhost');
	DEFINE ('DB_NAME', 'baseball_stats');
 	
	#Connect to MySQL
	$dbc = @mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR die ('Could not connect to MySQL: ' . mysqli_connect_error());
	
	#Set the encoding
	mysqli_set_charset($dbc, 'utf-8');
?>