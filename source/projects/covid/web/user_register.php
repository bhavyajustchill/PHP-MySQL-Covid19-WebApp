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
$get_field_1 = mysql_real_escape_string($data->field_1);
$get_field_2 = mysql_real_escape_string($data->field_2);
$get_field_3 = mysql_real_escape_string($data->field_3);
$get_field_4 = mysql_real_escape_string($data->field_4);
$get_created_date = date('Y-m-d');
$get_otp = rand(10000,99000);


$result = mysql_query("SELECT * FROM login WHERE email = '$get_email'");

if(empty($get_name) || empty($get_email) ||
 empty($get_password)  || empty($get_field_2)|| empty($get_field_3)  || empty($get_field_4) )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else if (strlen($get_mobile) != 10) 
{
	$response["success"] = 3;
	echo json_encode($response);
}
else if (strlen($get_field_1) != 12) 
{
	$response["success"] = 5;
	echo json_encode($response);
}
else if(mysql_num_rows($result))
{
	$response["success"] = 4;	
	echo json_encode($response);
}
else
{
	
	// get customer 
	$result1 = mysql_query("INSERT INTO login (name, email, password, mobile,field_1,field_2,field_3,field_4,otp, created_date)
			VALUES('$get_name',  '$get_email', '$get_password', '$get_mobile', 	'$get_field_1',
			'$get_field_2','$get_field_3','$get_field_4','$get_otp','$get_created_date'	)");

	// check for empty result
	if($result1)
	{
		
		
			/////////////////////////////////////////////////
			///////////////////SMS /////////////////////
			/////////////////////////////////////////////////

	// Authorisation details
	$username = "contact@arudhrainnovations.com";
	$hash = "5a920f96a12b4702b59fe996787fe7d1f9a7c61c";
	$test = "0";
	$sender = "AISOFT"; // This is who the message appears to be from.	
	$numbers = $get_mobile; // A single number or a comma-seperated list of numbers

	$message = 'Your OTP '.$get_otp;

		$message = urlencode($message);
		$data = "username=".$username."&hash=".$hash."&message=".$message."&sender=".$sender."&numbers=".$numbers."&test=".$test;
	
		$ch = curl_init('http://api.textlocal.in/send/?');
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$result2 = curl_exec($ch); // This is the result from the API
		curl_close($ch);

			/////////////////////////////////////////////////
			///////////////////SMS /////////////////////
			/////////////////////////////////////////////////

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