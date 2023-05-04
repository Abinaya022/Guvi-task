<!DOCTYPE html>
<html>
  <head>
    <title>Login Page</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <h2>Login Page</h2>
    <form id="login-form">
      <label for="username">Username:</label>
      <input type="text" name="username" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" name="password" required>
      <br>
      <input type="submit" value="Login">
    </form>
    <div id="login-message"></div>
    <script>
      $(document).ready(function() {
        $('#login-form').submit(function(event) {
          event.preventDefault();
          var formData = $(this).serialize();
          $.ajax({
            type: 'POST',
            url: 'login_process.php',
            data: formData,
            dataType: 'json',
            success: function(response) {
              if(response.success) {
                window.location.href = 'profile.php';
              } else {
                $('#login-message').text(response.message);
              }
            },
            error: function() {
              $('#login-message').text('Error submitting form.');
            }
          });
        });
      });
    </script>
  </body>
</html>
