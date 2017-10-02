<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"));

$loginDetails = $data->login;

$table = ($loginDetails->loginType == 'user') ? 'users' : 'personaltrainers';

$conn = new mysqli("localhost", "root", "root", "ptfinder");

$sql = "SELECT * FROM " . $table . " WHERE email = '" . $loginDetails->email . "' LIMIT 1";
$result = $conn->query($sql);

if($result->num_rows > 0){
	$passwordSql = "SELECT * FROM " . $table . " WHERE email = '" . $loginDetails->email . "' AND password = '" . $loginDetails->password . "' LIMIT 1";
	$passwordResult = $conn->query($passwordSql);
	
	if($passwordResult->num_rows > 0){
		$id = $passwordResult->fetch_row();
		$output = '{"id":' . $id[0] . ', "firstname":"' . $id[1] . '", "lastname":"' . $id[2] . '"}';
	}
	else{
		$output = '{"error":"Incorrect password"}';
	}
}
else{
	$output = '{"error":"Email address is not registered"}';
}

$conn->close();
echo($output);

?>