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

$get_id =  mysql_real_escape_string($data->cus_id);
$get_status = mysql_real_escape_string($data->field_8);
$get_field_9 =   mysql_real_escape_string($data->field_9);

if(empty($get_id) || empty($get_status)|| empty($get_field_9))
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
	// get customer 
	$result = mysql_query("UPDATE appoinment SET field_8='$get_status', field_9='$get_field_9' WHERE cus_id = '$get_id'");

	// check for empty result
	if($result)
	{
		

//////////////////Mail ////////////////////////////
	$result1 = mysql_query("SELECT * FROM appoinment WHERE cus_id = '$get_id'");
	$AllSales = mysql_fetch_array($result1);
	$get_email = $AllSales["email"];
	
				$message2 = "Your Results".$get_status."";

				$subject = "New Status Updated";	

				$from =  "covidapp@gmail.com"; 
				$message3 = wordwrap($message2, 200);
				
				// Send Mail By PHP Mail Function
				$mailto= $get_email; //$get_sender_mail TO 
				mail($mailto, $subject, $message3, "From:".$from);
				
//////////////////Mail ////////////////////////////
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