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
$get_field_1 = mysql_real_escape_string($data->field_1);

if( empty($get_empid) || empty($get_field_1))
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	$result = mysql_query("SELECT * FROM login WHERE email='$get_empid' and otp = '$get_field_1'	");

		if (mysql_num_rows($result))
		{
			
			mysql_query("UPDATE login SET success='1' WHERE otp = '$get_field_1' ");

			$Allresponse = mysql_fetch_array($result);
			// temp user array
			$response = array();
			$response = $Allresponse;
			$response["success"] = 1;	
			echo json_encode($response);
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