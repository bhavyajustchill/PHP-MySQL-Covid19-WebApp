<?php
/*********************
****  *****
**** CPanel ******************
*********/


/* Following code will retrieve table values */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';
	
// connecting to db
$db = new DB_CONNECT();
	
// get all jobs
$result = mysql_query("SELECT * FROM product_list");

if (mysql_num_rows($result))
{
	$response["products"] = array();
	while($AllProducts = mysql_fetch_array($result))
	{
		// temp user array
		$products = array();
		$products = $AllProducts;
		array_push($response["products"],$products);
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