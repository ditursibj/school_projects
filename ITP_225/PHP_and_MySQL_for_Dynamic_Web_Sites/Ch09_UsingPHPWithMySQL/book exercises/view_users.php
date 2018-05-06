<?php 
#This script retrieves all the records form th users table in the sitename database

$page_title = 'View the Current Users';
include ('includes/myheader.html');
echo '<h1>Registered Users</h1>';

require('../mysqli_connect.php'); //Connect to the DB

//Make the query
$q = "SELECT CONCAT(last_name, ', ', first_name) AS name, DATE_FORMAT(registration_date, '%M %d, %Y') AS dr FROM users ORDER BY registration_date ASC";

//Run the query
$r = @mysqli_query ($dbc, $q);

//Count the number of rows returned
$num = mysqli_num_rows($r);

if ($num > 0) {

	//Print how many users there are
	echo '<p>There are currently ' . $num . ' registered users</p>';
	
	
	echo '<table align="center" cellspacing="3" cellpadding="3" width="75%">
		<tr><td align="left"><b>Name</b></td><td align="left"><b>Date Registered</b></td></tr>';
		
	//Fetch and print the records
	while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
		echo '<tr><td align="left">' . $row['name'] . '</td><td align="left">' . $row['dr'] . '</td></tr>';
	}
	
	echo '</table>'; //Close the table OUTSIDE the loop
	mysqli_free_result ($r); //Free up the reources
	
} else { //If no records were returned

	echo '<p class="error">There are currently no registered users</p>';
	
} //ENd of if ($r) IF

mysqli_close($dbc); //Close the DB connection

include ('includes/myfooter.html');

?>