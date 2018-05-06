<?php 
#This script retrieves all the records form th users table in the sitename database

$page_title = 'View the Champs';
include ('includes/a9header.html');
echo '<h1>MLB Champs</h1>';

require('a9mysqli_connect.php'); //Connect to the DB

//Make the query
$q = "SELECT teamstats.team AS teamName, teamstats.team_id AS id, champs.Pennants AS conf_titles, champs.worldseries AS titles FROM teamstats JOIN champs ON teamstats.team_id = champs.team_id ORDER BY teamname ASC";

//Run the query
$r = @mysqli_query ($dbc, $q);

//Count the number of rows returned
$num = mysqli_num_rows($r);

if ($num > 0) {

	//Print how many users there are
	echo '<p>There are currently ' . $num . ' MLB Teams</p>';
	
	
	echo '<table align="center" cellspacing="3" cellpadding="3" width="75%">
		<tr><td align="left"><b>Team</b></td><td align="right"><b>Team ID</b></td><td align="right"><b>Pennants</b></td><td align="right"><b>World Series</b></td></tr>';
		
	//Fetch and print the records
	while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC)) {
		echo '<tr><td align="left">' . $row['teamName'] . '</td><td align="right">' . $row['id'] . '</td><td align="right">' . $row['conf_titles'] . '</td><td align="right">' . $row['titles'] .'</td></tr>';
	}
	
	echo '</table>'; //Close the table OUTSIDE the loop
	mysqli_free_result ($r); //Free up the reources
	
} else { //If no records were returned

	echo '<p class="error">There are currently no baseball teams in the database</p>';
	
} //ENd of if ($r) IF

mysqli_close($dbc); //Close the DB connection

include ('includes/a9footer.html');

?>