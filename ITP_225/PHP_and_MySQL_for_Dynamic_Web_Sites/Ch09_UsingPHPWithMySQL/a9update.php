<?php # Script 9.7 - password.php
// This page lets a user change their password.

$page_title = 'Update the Pennants and World Series';
include ('includes/a9header.html');

// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	require ('a9mysqli_connect.php'); // Connect to the db.
		
	$errors = array(); // Initialize an error array.
	
	// Check for the team ID
	if (empty($_POST['teamId'])) {
		$errors[] = 'You forgot to enter the Team ID.';
	} else {
		$ti = mysqli_real_escape_string($dbc, trim($_POST['teamId']));
	}

	// Check for the team name
	if (empty($_POST['team'])) {
		$errors[] = 'You forgot to enter the Team.';
	} else {
		$t = mysqli_real_escape_string($dbc, trim($_POST['team']));
	}
	
	// Check that the user entered pennants won
	if (empty($_POST['pennantsWon'])) {
		$errors[] = 'You forgot to enter the Pennants to be updated.';
	} else {
		$p = mysqli_real_escape_string($dbc, trim($_POST['pennantsWon']));
	}
	
	// Check that the user entered the number of World Series won
	if (empty($_POST['wsWon'])) {
		$errors[] = 'You forgot to enter the World Series to be updated.';
	} else {
		$ws = mysqli_real_escape_string($dbc, trim($_POST['wsWon']));
	}

	
	if (empty($errors)) { // If everything's OK.

		// Check that they've entered the right team_id and team
		$q = "SELECT team_id, team FROM teamstats WHERE (team_id='$ti' AND team='$t')";
		$r = @mysqli_query($dbc, $q);
		$num = @mysqli_num_rows($r);
		if ($num == 1) { // Match was made.
	
			// Get the team_id:
			$row = mysqli_fetch_array($r, MYSQLI_NUM);

			// Make the UPDATE query:
			$q = "UPDATE champs SET pennants='$p', worldseries='$ws' WHERE team_id=$row[0]";		
			$r = @mysqli_query($dbc, $q);
			
			if (mysqli_affected_rows($dbc) == 1) { // If it ran OK.

				// Print a message.
				echo '<h1>Thank you!</h1>
				<p>The Pennants and World Series have been updated</p><p><br /></p>';	

			} else { // If it did not run OK.

				// Public message:
				echo '<h1>System Error</h1>
				<p class="error">THe Pennants and World Series could not be changed due to a system error. We apologize for any inconvenience.</p>'; 
	
				// Debugging message:
				echo '<p>' . mysqli_error($dbc) . '<br /><br />Query: ' . $q . '</p>';
	
			}

			mysqli_close($dbc); // Close the database connection.

			// Include the footer and quit the script (to not show the form).
			include ('includes/a9footer.html'); 
			exit();
				
		} else { // Invalid team_id and team correlation.
			echo '<h1>Error!</h1>
			<p class="error">The team id and team name combination does not match any on file. Please view the teams again to see the correct team id and team name to use.</p>';
		}
		
	} else { // Report the errors.

		echo '<h1>Error!</h1>
		<p class="error">The following error(s) occurred:<br />';
		foreach ($errors as $msg) { // Print each error.
			echo " - $msg<br />\n";
		}
		echo '</p><p>Please try again.</p><p><br /></p>';
	
	} // End of if (empty($errors)) IF.

	mysqli_close($dbc); // Close the database connection.
		
} // End of the main Submit conditional.
?>

<h1>Change the Pennants and World Series for a team</h1>
<form action="a9update.php" method="post">
	<p>Team Id: <input type="number" name="teamId" value="<?php if (isset($_POST['teamId'])) echo $_POST['teamId']; ?>"  /> </p>
	<p>Team: <input type="text" name="team" size="10" maxlength="60" value="<?php if (isset($_POST['team'])) echo $_POST['team']; ?>"  /></p>
	<p>Pennants Won <input type="number" name="pennantsWon" value="<?php if (isset($_POST['pennantsWon'])) echo $_POST['pennantsWon']; ?>"  /></p>
	<p>World Series Won: <input type="number" name="wsWon" value="<?php if (isset($_POST['wsWon'])) echo $_POST['wsWon']; ?>"  /></p>
	<p><input type="submit" name="submit" value="Update Champs Table" /></p>
</form>
<?php include ('includes/a9footer.html'); ?>