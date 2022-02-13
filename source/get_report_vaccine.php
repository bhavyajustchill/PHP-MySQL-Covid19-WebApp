<?php
/*********************
**** CPanel ******************
*********/

/* Following code will retrieve table values */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';
	
// connecting to db
$db = new DB_CONNECT();

// check for post data
$data = json_decode(file_get_contents("php://input"));
$get_from = mysql_real_escape_string($data->from);
$get_to = mysql_real_escape_string($data->to);


if(($get_from && $get_to) != "")	
{
	// get all jobs
	$result = mysql_query("SELECT * FROM appoinment WHERE field_7 BETWEEN '$get_from' AND '$get_to'");
		
	// check for empty result
	if (mysql_num_rows($result))
	{	
		$response["sales"] = array();
		while($AllSales = mysql_fetch_array($result))
		{	
			// temp user array
			$sales = array();
			$sales = $AllSales;
			array_push($response["sales"],$sales);		
		}	
		$response["success"] = 1;
		echo json_encode($response);
	} 
	else
	{	
		$response["success"] = 0;
		echo json_encode($response);
	}
}
elseif(empty($get_from) && empty($get_to)) 
{	
$result = mysql_query("SELECT * FROM appoinment ");
if(mysql_num_rows($result))
{
	$response["sales"] = array();	
	while($Alldetails = mysql_fetch_array($result))
	{
		$sales = array();
		$sales = $Alldetails;
		array_push($response["sales"],$sales);
	}	
	$response["success"] = 1;
	echo json_encode($response);

}
	
}
else
{	
	$response["success"] = 2;
	echo json_encode($response);
}
?>