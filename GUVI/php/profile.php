<?php
session_start();
if(!isset($_SESSION['username'])) {
  header("location: login.php");
  exit;
}
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Profile Page</title>
  </head>
  <body>
    <h2>Welcome, <?php echo $_SESSION['username']; ?></h2>
    <p>Here are your profile details:</p>
    <ul>
      <li>Age: 25</li>
      <li>Date of Birth: 01-01-1998</li>
      <li>Contact: 1234567890</li>
    </ul>
    <a href="logout.php">Logout</a>
  </body>
</html>
