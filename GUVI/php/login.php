<?php
session_start();
if(isset($_SESSION['username'])) {
  header("location: profile.php");
  exit;
}
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Login Page</title>
  </head>
  <body>
    <h2>Login Page</h2>
    <form action="login_process.php" method="POST">
      <label for="username">Username:</label>
      <input type="text" name="username" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" name="password" required>
      <br>
      <input type="submit" value="Login">
    </form>
  </body>
</html>
