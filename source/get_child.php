<?php
/*********************

**** CPanel ******************
*********/

/* Following code will match admin login credentials */

//user temp array
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

$data = json_decode(file_get_contents("php://input"));

$get_field_3 = mysql_real_escape_string($data->email);

$result = mysql_query("SELECT * FROM guide where email='$get_field_3' ");

if(mysql_num_rows($result))
{
	$response["details"] = array();	

	while($Alldetails = mysql_fetch_array($result))
	{
		// temp user array
		$details = array();
		$details = $Alldetails;
		$get_date = $Alldetails["field_4"];
		
$month_1 = strtotime($get_date."+1 months");
$month_2  = strtotime($get_date."+2 months");
$month_3  = strtotime($get_date."+3 months");
$month_4 = strtotime($get_date."+4 months");
$month_5  = strtotime($get_date."+5 months");

		$details["month_1"] =	 date("Y-m-d",$month_1);
		$details["month_2"] =	 date("Y-m-d",$month_2);
		$details["month_3"] =	 date("Y-m-d",$month_3);
		$details["month_4"] =	 date("Y-m-d",$month_4);
		$details["month_5"] =	 date("Y-m-d",$month_5);
		
		array_push($response["details"],$details);
	}	
	$response["success"] = 1;
	echo json_encode($response);

}
else
{
	$response["success"] = 0;	
	echo json_encode($response);
}
	

?>