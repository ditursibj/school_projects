<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmls="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<title>Predefined Variables</title>
</head>
<body>
	<p>Numbers</p>
<?php #Script 1.8 - predefined.php
	//Set the variables
	$quantity = 30;
	$price = 119.95;
	$taxrate = .05;
	
	//Calculate the total
	$total = $quantity * $price;
	$total = $total + ($total * $taxrate);
	
	//Format the total
	$total = number_format($total, 2);
	
	//Print the results
	echo "<p>You are purchasing <b>" . $quantity . "</b> widgets(s) at a cost of <b>$" . $price .
		"</b> each. With tax, the total comes to <b>$" . $total . "</b>.</p>";	
?>

</body>
</html>