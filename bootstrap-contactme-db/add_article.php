<?php
include("connection.php");

$name = $_POST["email"];
$full_name = $_POST["full_name"];
$phone_number = $_POST["phone_number"];
$message = $_POST["message"];



$query = $mysqli->prepare("INSERT INTO contactme(name, full_name, phone_number, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $name, $full_name, $phone_number, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>