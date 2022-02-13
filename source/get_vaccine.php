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

$get_field_3 = "user@gmail.com";//mysql_real_escape_string($data->email);

$result1 = mysql_query("SELECT * FROM guide where email='$get_field_3' ");
$Alldetails1 = mysql_fetch_array($result1);
$get_dob = $Alldetails1["field_4"];
//echo $get_dob;

$date = date("Y-m-d");
//increment 2 days
$month_1 = strtotime($get_date."+1 months");
$month_2 = strtotime($get_date."+2 months");
$month_3 = strtotime($get_date."+3 months");
$month_4 = strtotime($get_date."+4 months");
$month_5 = strtotime($get_date."+5 months");
echo date("Y-m-d",$month_1) . "\n";
echo date("Y-m-d",$month_2) . "\n";


		if ($get_dob <= date('Y-m-d') ) // start at min time 
		{
					// 2017-04-16 >=  2017-04-15    	
				if ( ($end_date_time >= date('Y-m-d-H:i'))  )
					{
						$response["success"] = 1 ;		
						echo json_encode($response);
					}
					else
					{
							$response["success"] = 3;			//Survey Expired
							echo json_encode($response);
					}

		}
		else
		{
			// unsuccess
			$response["success"] = 0;		//Survey Not Started Pls Wait
			// echoing JSON response
			echo json_encode($response);
		}
/*
if(mysql_num_rows($result))
{
	$response["details"] = array();	
	while($Alldetails = mysql_fetch_array($result))
	{
		$details = array();
		$details = $Alldetails;
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
	*/

?>