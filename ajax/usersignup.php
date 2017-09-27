<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");



$data = json_decode(file_get_contents("php://input"));

$user = $data->user;

$conn = new mysqli("localhost", "root", "root", "ptfinder");

$duplicateCheckSql = "SELECT * from users WHERE email = '" . $user->email . "'";
$sql = "INSERT INTO users (firstname, lastname, dob, gender, address1, city, county, email, password) VALUES 
('" . $user->firstName . "','" . $user->lastName . "','" . $user->dob . "','" . $user->gender . "','" . $user->addressLine1
. "','" . $user->city . "','" . $user->county . "','" . $user->email . "','" . $user->password . "')";


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