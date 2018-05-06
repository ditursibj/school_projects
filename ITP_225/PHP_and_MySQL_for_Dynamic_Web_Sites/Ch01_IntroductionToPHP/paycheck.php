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
		//Enable error reporting in PHP
		ini_set('display_errors', 1);
	
		//Tell PHP to report ALL errors durign development
		error_reporting(E_ALL);
		
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
		$firstName = 'Jane';
		$lastName = 'Doe';
		$hoursWorked = 40;
		$overtimeHours = 10;
		$hourlyRate = 20.00;
		$hourlyRate = number_format($hourlyRate, 2);
		$ficaTaxRate = 5.65;
		$stateTaxRate = 5.75;
		$federalTaxRate = 28.00;
		$federalTaxRate = number_format($federalTaxRate, 2);
	
		//calculate regular pay (regular hours * regular rate)
		$regularPay = $hourlyRate * $hoursWorked;
		$regularPay = number_format($regularPay, 2);

		//calculate overtime pay (overtime hours * time and half)
		$overtimePay = ($hourlyRate * 1.5) * $overtimeHours;
		$overtimePay = number_format($overtimePay, 2);
	
		//calculate gross pay
		$grossPay = $regularPay + $overtimePay;
		$grossPayFormat = number_format($grossPay, 2);
		
		//calculate the state tax withheld
		$stateWithheld = $grossPay * ($stateTaxRate/100);
		$stateWithheldFormat = number_format($stateWithheld, 2);
		
		//calculate the FICA tax rate
		$ficaWithheld = $grossPay * ($ficaTaxRate/100);
		$ficaWithheldFormat = number_format($ficaWithheld, 2);
		
		//calculate the federal tax withheld
		$federalWithheld = $grossPay * ($federalTaxRate/100);
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
		echo "<tr><td>Regular Hours Worked (between 0 and 40)</td><td>" . $hoursWorked . "</td></tr>";
		echo "<tr><td>Overtime Hours Worked (between 0 and 40)</td><td>" . $overtimeHours . "</td></tr>";
		echo "<tr><td>Hourly Rate</td><td>$" . $hourlyRate . "</td></tr>";
		echo "<tr><td>Regular Pay</td><td>$" . $regularPay . "</td></tr>";
		echo "<tr><td>Overtime Pay</td><td>$" . $overtimePay . "</td></tr>";
		echo "<tr><td>Gross Pay</td><td>$" . $grossPayFormat . "</td></tr>";
		echo "<tr><td>FICA Tax Rate (ex. 5.65)</td><td>" . $ficaTaxRate . "%</td></tr>";
		echo "<tr><td>FICA Taxes Withheld</td><td>$" . $ficaWithheldFormat . "</td></tr>";
		echo "<tr><td>State Tax Rate (ex. 5.75)</td><td>" . $stateTaxRate . "%</td></tr>";
		echo "<tr><td>State Taxes Withheld</td><td>$" . $stateWithheldFormat . "</td></tr>";
		echo "<tr><td>Federal Tax Rate (ex. 28.00)</td><td>" . $federalTaxRate . "%</td></tr>";
		echo "<tr><td>Federal Taxes Withheld</td><td>$" . $federalWithheldFormat . "</td></tr>";
		echo "<tr><td>Total Taxes</td><td>$" . $totalTaxFormat . "</td></tr>";
		echo "<tr><td>Net Pay</td><td>$" . $netPayFormat . "</td></tr>";
		echo "</table>";
	
	?>

</body>
</html>