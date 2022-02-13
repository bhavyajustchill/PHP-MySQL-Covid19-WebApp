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
$get_password = mysql_real_escape_string($data->password);

if(empty($get_empid) || empty($get_password))
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	$result = mysql_query("SELECT * FROM admin_login WHERE email = '$get_empid' AND password = '$get_password'");

		if (mysql_num_rows($result))
		{
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