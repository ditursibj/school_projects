<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmls="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<title>Paycheck Calculator</title>
	<link rel="stylesheet" href="css/paycheckStyle.css"/>
</head>
<body>

	<?php
		//Define tax constants
		define ('FICA_TAX_RATE', '5.65');
		define ('STATE_TAX_RATE', '5.75');
		define ('FEDERAL_TAX_RATE', '28.00');
		//$federalTaxRate = number_format($federalTaxRate, 2);
		
		//Enable error reporting in PHP
		ini_set('display_errors', 1);
	
		//Tell PHP to report ALL errors during development
		error_reporting(E_ALL);
		
		//Make sure user input first name
		if (empty($_POST['firstName'])) {
			$firstName = NULL;
			echo '<p>You forgot to enter your First Name</p>';
		} else {
			$firstName = $_POST['firstName'];
		}
		
		//Make sure user entered lastName
		if (empty($_POST['lastName'])) {
			$lastName = NULL;
			echo '<p>You forgot to enter your Last Name</p>';
		} else {
			$lastName = $_POST['lastName'];
		}
		
		//Make sure user entered hoursWorked. Hours must be less than 80 and more than 0
		if (empty($_POST['hoursWorked']) || ($_POST['hoursWorked'] > 80) || ($_POST['hoursWorked'] < 0) ) {
			$hoursWorked = NULL;
			echo '<p>You must enter Hours Worked that is between 0 and 80</p>';
		} else {
			$hoursWorked = $_POST['hoursWorked'];
		}
		
		//Make sure user entered hourly rate. Must be greater than 7.25 and less than 100
		if (empty($_POST['hourlyRate']) || ($_POST['hourlyRate'] < 7.25) || ($_POST['hourlyRate'] > 100) ) {
			$hourlyRate = NULL;
			echo '<p>You must enter an Hourly Rate that is between 7.25 and 100.00</p>';
		} else {
			$hourlyRate = $_POST['hourlyRate'];
		}
		
		//If all form fields are filled out
		if ($firstName && $lastName && $hoursWorked && $hourlyRate) {
			//Initialize output variables
			$regularPay = 0;
			$overTimePay = 0;
			$grossPay = 0;
			$ficaWithheld = 0;
			$stateWithheld = 0;
			$federalWithheld = 0;
			$totalTax = 0;
			$netPay = 0;
			
			//variables that will be echoed to the table
			$overtimeHours = 0;
			$regularHours = 0;
			$hourlyRate = number_format($hourlyRate, 2);
		
			//Determine overtime hours
			if ($hoursWorked <= 40) {
				$regularHours = $hoursWorked;
				$overtimeHours = 0;
			} else {
				$regularHours = 40;
				$overtimeHours = $hoursWorked - $regularHours;
			}

			//calculate regular pay (regular hours * regular rate)
			$regularPay = $hourlyRate * $regularHours;
			$regularPayFormat = number_format($regularPay, 2);

			//calculate overtime pay (overtime hours * time and half)
			$overtimePay = ($hourlyRate * 1.5) * $overtimeHours;
			$overtimePayFormat = number_format($overtimePay, 2);
	
			//calculate gross pay
			$grossPay = $regularPay + $overtimePay;
			$grossPayFormat = number_format($grossPay, 2);
		
			//calculate the state tax withheld
			$stateWithheld = $grossPay * (STATE_TAX_RATE/100);
			$stateWithheldFormat = number_format($stateWithheld, 2);
		
			//calculate the FICA tax rate
			$ficaWithheld = $grossPay * (FICA_TAX_RATE/100);
			$ficaWithheldFormat = number_format($ficaWithheld, 2);
		
			//calculate the federal tax withheld
			$federalWithheld = $grossPay * (FEDERAL_TAX_RATE/100);
			$federalWithheldFormat = number_format($federalWithheld, 2);
	
			//calculate total taxes
			$totalTax = $stateWithheld + $federalWithheld + $ficaWithheld;
			$totalTaxFormat = number_format($totalTax, 2);
	
			//concatenate first and last name
			$employeeName = $firstName . ' ' . $lastName;
	
			//calculate net pay
			$netPay = $grossPay - $totalTax;
			$netPayFormat = number_format($netPay, 2);
		
	
			//Putput paycheck information to the web browser in a table by using echo
			echo "<table id='paycheckCalculator'>";
			echo "<tr><th colspan='2'>Paycheck Calculator</th></tr>";
			echo "<tr><td>Employee Name</td><td>" . $employeeName . "</td></tr>";
			echo "<tr><td>Regular Hours Worked (between 0 and 40)</td><td>" . $regularHours . "</td></tr>";
			echo "<tr><td>Overtime Hours Worked (between 0 and 40)</td><td>" . $overtimeHours . "</td></tr>";
			echo "<tr><td>Hourly Rate</td><td>$" . $hourlyRate . "</td></tr>";
			echo "<tr><td>Regular Pay</td><td>$" . $regularPayFormat . "</td></tr>";
			echo "<tr><td>Overtime Pay</td><td>$" . $overtimePayFormat . "</td></tr>";
			echo "<tr><td>Gross Pay</td><td>$" . $grossPayFormat . "</td></tr>";
			echo "<tr><td>FICA Tax Rate (ex. 5.65)</td><td>" . FICA_TAX_RATE . "%</td></tr>";
			echo "<tr><td>FICA Taxes Withheld</td><td>$" . $ficaWithheldFormat . "</td></tr>";
			echo "<tr><td>State Tax Rate (ex. 5.75)</td><td>" . STATE_TAX_RATE . "%</td></tr>";
			echo "<tr><td>State Taxes Withheld</td><td>$" . $stateWithheldFormat . "</td></tr>";
			echo "<tr><td>Federal Tax Rate (ex. 28.00)</td><td>" . FEDERAL_TAX_RATE . "%</td></tr>";
			echo "<tr><td>Federal Taxes Withheld</td><td>$" . $federalWithheldFormat . "</td></tr>";
			echo "<tr><td>Total Taxes</td><td>$" . $totalTaxFormat . "</td></tr>";
			echo "<tr><td>Net Pay</td><td>$" . $netPayFormat . "</td></tr>";
			echo "</table>";
			
		//If not all fields were filled out, print the following message under the error
		} else {
			echo '<p>Please go back and fill out the form again</p>';
		}
		
	?>

</body>
</html>