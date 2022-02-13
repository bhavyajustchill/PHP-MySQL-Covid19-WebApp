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
$get_field_3 = mysql_real_escape_string($data->field_3);
$get_field_4 = mysql_real_escape_string($data->field_4);

if(empty($get_empid) || empty($get_password))
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	$result = mysql_query("SELECT * FROM login WHERE (email = '$get_empid' AND field_3= '$get_field_3'  AND field_4= '$get_field_4' )");

		if ($result)
		{
			$result = mysql_query("update login set password = '$get_password' where email = '$get_empid'");
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