<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$type = $_GET['type'];
$id = $_GET['id'];

$table = ($type === 'user') ? 'users' : 'personaltrainers';
$field = ($type === 'user') ? 'user_id' : 'pt_id';

$conn = new mysqli("localhost", "root", "root", "ptfinder");

$sql = "SELECT * from " . $table . " WHERE " . $field . " = " . $id;

$result = $conn->query($sql);

if($result->num_rows > 0){
	$output = json_encode($result->fetch_assoc());
}
else{
	$output = '{"error":"Unkown user id"}';
}

$conn->close();
echo($output);

?>