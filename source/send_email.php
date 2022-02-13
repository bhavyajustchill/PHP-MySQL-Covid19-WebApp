<?php

//user temp array
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

// check for post data

$data = json_decode(file_get_contents("php://input"));
$get_field_1 =  mysql_real_escape_string($data->field_1);
$get_field_2 =mysql_real_escape_string($data->sender);
$get_empid =   mysql_real_escape_string($data->email);


if(empty($get_empid) || empty($get_field_1) )
{
	$response["success"] = 2;
	echo json_encode($response);
}
else
{
				

//////////////////Mail ////////////////////////////

				$message2 = $get_field_1;// "I am  Current Location Lat & Long.\r\n";

				$subject = "New Vaccine Enquriy";	

				$from =  $get_empid; 
				$message3 = wordwrap($message2, 200);
				
				// Send Mail By PHP Mail Function
				$mailto= "renjiappuz@gmail.com"; //$get_sender_mail TO 
				mail($mailto, $subject, $message3, "From:".$from);
				
//////////////////Mail ////////////////////////////

			$response["success"] = 1;	
			echo json_encode($response);

	}
?>