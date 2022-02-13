<?php
/*********************
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

$get_myorder_id = mysql_real_escape_string($data->cook_cus_id);
$get_field_1 = mysql_real_escape_string($data->cook_field_9);
$get_field_2 = mysql_real_escape_string($data->cook_field_10);
$get_field_3 = mysql_real_escape_string($data->cook_field_11);

$get_created_date =date('Y-m-d');

if( empty($get_myorder_id) || empty($get_field_1) || empty($get_field_2)|| empty($get_field_3) )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	$result = mysql_query("UPDATE complaint SET field_9='$get_field_1',field_10='$get_field_2',
							field_11='$get_field_3'	WHERE cus_id = '$get_myorder_id'	");

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