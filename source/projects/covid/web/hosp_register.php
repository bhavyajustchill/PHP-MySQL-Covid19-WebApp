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
$get_field_5 = "Pending";
$get_created_date = date('Y-m-d');


if(empty($get_name) || empty($get_email) ||
 empty($get_password) || empty($get_field_1)  || empty($get_field_2)|| empty($get_field_3)  || empty($get_field_4) )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else if (strlen($get_mobile) != 10) 
{
	$response["success"] = 3;
	echo json_encode($response);
}
else
{
	
	// get customer 
	$result1 = mysql_query("INSERT INTO hosp_login (name, email, password, mobile,field_1,field_2,field_3,field_4,field_5, created_date)
			VALUES('$get_name',  '$get_email', '$get_password', '$get_mobile', 	'$get_field_1',
			'$get_field_2','$get_field_3','$get_field_4','$get_field_5','$get_created_date'	)");

	// check for empty result
	if($result1)
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