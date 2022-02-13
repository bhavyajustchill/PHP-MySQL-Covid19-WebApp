<?php
/* Following code will match admin login credentials */

//user temp array
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

// check for post data
$data = json_decode(file_get_contents("php://input"));
$get_empid = mysql_real_escape_string($data->email);

if(empty($get_empid) )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	$result = mysql_query("SELECT * FROM login WHERE mail = '$get_empid' ");

		if (mysql_num_rows($result))
		{
			$Allresponse = mysql_fetch_array($result);
			// temp user array
			$details = array();
			$details = $Allresponse;
			$get_mobile = $Allresponse["field_12"];
			$get_otp = rand(10000,99000);
			
			mysql_query("UPDATE voter SET field_13='$get_otp' WHERE field_1 = '$get_empid' ");
			
			mysql_query("UPDATE sms_count SET  field_1=field_1+1   ");

			array_push($response["details"],$details);
			$response["success"] = 1;
			echo json_encode($response);
			
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

		} 
		else
		{
			// success	
			$response["success"] = 0;
			// echoing JSON response
			echo json_encode($response);
		}
}
?>