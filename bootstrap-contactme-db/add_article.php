<?php
include("connection.php");

$email = $_POST["email"];
$full_name = $_POST["full_name"];
$phone_number = $_POST["phone_number"];
$message = $_POST["message"];

$query = $mysqli->prepare("INSERT INTO contactme(email, full_name, phone_number, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $email, $full_name, $phone_number, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>