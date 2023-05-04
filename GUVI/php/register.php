<?php
// Establishing a database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydatabase";

$conn = mysqli_connect($servername, $username, $password, $dbname);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handling form submission
if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password'])) {
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
	
	// Using Prepared Statements
	$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
	$stmt->bind_param("sss", $username, $email, $password);
	if ($stmt->execute()) {
		echo "success";
	} else {
		echo "Error: " . $stmt->error;
	}
	
	$stmt->close();
	$conn->close();
}
?>
