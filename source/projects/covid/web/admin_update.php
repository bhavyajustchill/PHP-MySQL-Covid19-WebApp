<?php
/*********************

**** CPanel ******************
*********/

/* Following code will match user login credentials */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

$data = json_decode(file_get_contents("php://input"));

$get_admin_id = mysql_real_escape_string($data->password);
$get_fname = mysql_real_escape_string($data->name);
$get_lname = mysql_real_escape_string($data->email);
$get_mobile = mysql_real_escape_string($data->mobile);

if(empty($get_admin_id) || empty($get_fname) || empty($get_lname) || empty($get_mobile))
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	// get customer 
	$result = mysql_query("UPDATE admin_login SET name='$get_fname', email='$get_lname', mobile='$get_mobile' , password='$get_admin_id' WHERE user_id = '2'");

	// check for empty result
	if($result)
	{
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