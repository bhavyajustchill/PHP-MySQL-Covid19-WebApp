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


$result = mysql_query("SELECT * FROM appoinment ");

if(mysql_num_rows($result))
{
	$response["details"] = array();	
	$response["fulldetails"] = array();	

	while($Alldetails = mysql_fetch_array($result))
	{
		// temp user array
		$details = array();
		$fulldetails = array();
		$start_date = $Alldetails["field_7"];
		$start_time = $Alldetails["field_1"];
		$start_date_time = $start_date.'-'.$start_time;
		$fulldetails = $Alldetails;

		if (($start_date == date('Y-m-d')) ) // start at min time 
		{
			$details = $Alldetails;
			array_push($response["details"],$details);
		}
		array_push($response["fulldetails"],$fulldetails);

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