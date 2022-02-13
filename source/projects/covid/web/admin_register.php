<?php
/*********************
****  *****
**** CPanel ******************
*********/

/* Following register will admin login credentials */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

$data = json_decode(file_get_contents("php://input"));

$get_name = mysql_real_escape_string($data->name);
$get_email = mysql_real_escape_string($data->email);
$get_password = mysql_real_escape_string($data->password);
$get_mobile = mysql_real_escape_string($data->mobile);
$get_created_date = date('Y-m-d');

if(empty($get_name) || empty($get_email) ||
 empty($get_password) || empty($get_mobile) )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	// get customer 
	$result1 = mysql_query("INSERT INTO admin_login
				(name, email, password, mobile, created_date)
			VALUES('$get_name',  '$get_email', '$get_password', '$get_mobile', '$get_created_date')");

	// check for empty result
	if($result1)
	{
		/*
		$message = "Dear ".$get_name." ".$get_email." \n\n\t Your registration Completed, please login to the site \r\n\n \r\n\n\n Regards\n Power";
		$email2 = "Residential Management System";
		$subject = "Email Verfication";
		$headers = 'From:'. $email2 . "\r\n"; // Sender's Email

		// Message lines should not exceed 70 characters (PHP rule), so wrap it
		$message = wordwrap($message, 100);

		// Send Mail By PHP Mail Function
		mail($get_email, $subject, $message, $headers);
		*/
		// success
		$response["success"] = 1;
		
		// echoing JSON response
		echo json_encode($response);
	}
	else 
	{
		// unsuccess
		$response["success"] = 0;
		
		// echoing JSON response
		echo json_encode($response);
	}
}
?>