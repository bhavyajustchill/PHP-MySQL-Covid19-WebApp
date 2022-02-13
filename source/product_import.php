
<?php
/************************ YOUR DATABASE CONNECTION START HERE   ****************************/
ob_start();

define('DB_USER', "root"); // db user
define('DB_PASS', ""); // db password (mention your db password here)
define('DB_NAME', "college_mgt"); // database name
define('DB_HOST', "localhost"); // db server


/*
define('DB_USER', "codesqbz"); // db user
define('DB_PASS', "@@Rudhra219"); // db password (mention your db password here)
define('DB_NAME', "codesqbz_icse"); // database name
define('DB_HOST', "localhost"); // db server
*/

$link = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Couldn't make connection.");
$db = mysql_select_db(DB_NAME, $link) or die("Couldn't select database");

$databasetable = "excel";

/************************ YOUR DATABASE CONNECTION END HERE  ****************************/


set_include_path(get_include_path() . PATH_SEPARATOR . 'Classes/');
include 'PHPExcel/IOFactory.php';

// This is the file path to be uploaded.
$inputFileName = 'student_mark.xlsx'; 

try {
	$objPHPExcel = PHPExcel_IOFactory::load($inputFileName);
} catch(Exception $e) {
	die('Error loading file "'.pathinfo($inputFileName,PATHINFO_BASENAME).'": '.$e->getMessage());
}


$allDataInSheet = $objPHPExcel->getActiveSheet()->toArray(null,true,true,true);
$arrayCount = count($allDataInSheet);  // Here get total count of row in that Excel sheet


for($i=2;$i<=$arrayCount;$i++){
$pname = trim($allDataInSheet[$i]["A"]);
$pimage = trim($allDataInSheet[$i]["B"]);
$description = trim($allDataInSheet[$i]["C"]);
$price = trim($allDataInSheet[$i]["D"]);
$offer = trim($allDataInSheet[$i]["E"]);
$size = trim($allDataInSheet[$i]["F"]);
$stock = trim($allDataInSheet[$i]["G"]);
$specification = trim($allDataInSheet[$i]["H"]);
$shipping_days = trim($allDataInSheet[$i]["I"]);
$shipping_charge = trim($allDataInSheet[$i]["J"]);
$tax_amount = trim($allDataInSheet[$i]["K"]);/*
$category_name = trim($allDataInSheet[$i]["L"]);
$category1 = trim($allDataInSheet[$i]["M"]);
$category2 = trim($allDataInSheet[$i]["N"]);
$category3 = trim($allDataInSheet[$i]["O"]);
$category4 = trim($allDataInSheet[$i]["P"]);
$field1 = trim($allDataInSheet[$i]["Q"]);
$field2 = trim($allDataInSheet[$i]["R"]);
$field3 = trim($allDataInSheet[$i]["S"]);
$field4 = trim($allDataInSheet[$i]["T"]);
$field5 = trim($allDataInSheet[$i]["U"]);
$field6 = trim($allDataInSheet[$i]["V"]);
$field7 = trim($allDataInSheet[$i]["W"]);
$field8 = trim($allDataInSheet[$i]["X"]);
$field9 = trim($allDataInSheet[$i]["Y"]);
$field10 = trim($allDataInSheet[$i]["Z"]);
$field11 = trim($allDataInSheet[$i]["AA"]);
$field12 = trim($allDataInSheet[$i]["AB"]);
$field13 = trim($allDataInSheet[$i]["AC"]);
$field14 = trim($allDataInSheet[$i]["AD"]);
$field15 = trim($allDataInSheet[$i]["AE"]);
$field16 = trim($allDataInSheet[$i]["AF"]);
*/
$created_date = date('Y-m-d');;

$insertTable= mysql_query("INSERT INTO product_list(pname, pimage, description, price, offer, size,
						stock, specification, shipping_days,shipping_charge, tax_amount, created_date) 
					VALUES('".$pname."', '".$pimage."', '".$description."', '".$price."' , '".$offer."', '".$size."', '".$stock."',
					'".$specification."','".$shipping_days."', '".$shipping_charge."', '".$tax_amount."', '".$created_date."');");
// '".$category_name."', '".$category1."', '".$category2."',
//'".$category3."', '".$category4."', 									'".$field1."', '".$field2."', '".$field3."', '".$field4."', '".$field5."', '".$field6."', 									'".$field7."', '".$field8."', '".$field9."', '".$field10."','".$field11."','".$field12."', 									'".$field13."', '".$field14."', '".$field15."', '".$field16."',	
}
header('Location:home.html');
ob_flush();
?>