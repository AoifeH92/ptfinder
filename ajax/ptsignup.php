<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));

$pt = $data->pt;

$conn = new mysqli("localhost", "root", "root", "ptfinder");

$duplicateCheckSql = "SELECT * from personaltrainers WHERE email = '" . $pt->email . "'";
$sql = "INSERT INTO personaltrainers (firstname, lastname, dob, gender, address1, city, county, email, password, bio, phone) VALUES
('" . $pt->firstName . "','" . $pt->lastName . "','". $pt->dob . "','" . $pt->gender . "','" . $pt->addressLine1 . "','" .
$pt->city . "','" . $pt->county . "','" . $pt->email . "','" . $pt->password . "','" . $pt->bio . "','" . $pt->phone . "')";


$duplicateCheck = $conn->query($duplicateCheckSql);

if($duplicateCheck->num_rows == 0){
	if($conn->query($sql)){
		$output = '{"message":"SUCCESS"}';
	}
	else{
		$output = '{"message":"FAILED"}';
	}
}
else{
	$output = '{"message":"DUPLICATE_EMAIL"}';
}

$conn->close();

echo($output);
?>