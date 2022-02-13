<?php
/*********************
****  *****
**** Sep 22,  ****
**********************/

/* Following code will delete a row in table by referring id */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';
	
// connecting to db
$db = new DB_CONNECT();

// check for post data
$data = json_decode(file_get_contents("php://input"));
$get_id = mysql_real_escape_string($data->id);
		
// get all news
$result = mysql_query("DELETE FROM hospital WHERE cus_id = '$get_id'");

// check for empty result
if ($result)
{
	// success	
	$response["success"] = 1;
	// echoing JSON response
	echo json_encode($response);
} 
else
{
	$response["success"] = 0;
	// echoing JSON response
	echo json_encode($response);
	
}

	
?>