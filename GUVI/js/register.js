<!DOCTYPE html>
<html>
<head>
	<title>Registration Page</title>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
	<h2>Registration Page</h2>
	<form id="registration-form">
		<label for="username">Username:</label>
		<input type="text" name="username" required>
		<br>
		<label for="password">Password:</label>
		<input type="password" name="password" required>
		<br>
		<label for="confirm_password">Confirm Password:</label>
		<input type="password" name="confirm_password" required>
		<br>
		<input type="submit" value="Register">
	</form>
	<div id="registration-message"></div>
	<script>
		$(document).ready(function() {
			$('#registration-form').submit(function(event) {
				event.preventDefault(); // Prevent default form submission
				var formData = $(this).serialize(); // Get form data
				$.ajax({
					type: 'POST',
					url: 'register.php', // PHP file to handle the registration request
					data: formData,
					dataType: 'json', // Expect JSON response
					success: function(response) {
						if(response.success) {
							// Redirect to login page
							window.location.href = 'login.php';
						} else {
							// Display error message
							$('#registration-message').text(response.message);
						}
					},
					error: function() {
						$('#registration-message').text('Error submitting form.');
					}
				});
			});
		});
	</script>
</body>
</html>
