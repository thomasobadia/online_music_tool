<?php
include 'model/db_connect.php' ;
include 'controller/index.php' ;
?>


	<!DOCTYPE html>

	<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Thomas</title>
	</head>

	<body>
		<form action="#" method="post">
			<input type="text" placeholder="Room name" name="room_name">
			<select name="players">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
			<input type="submit" value="Validate">
		</form>

	</body>

	</html>