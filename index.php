<?php
include 'model/db_connect.php' ;
include 'controller/index.php' ;
?>

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link rel="stylesheet" href="assets/styles/home.css">
		<title>Harmony</title>
	</head>
	<body>
	<video autoplay muted loop class="homeVideo">
  		<source src="assets/video/home.mp4" type="video/mp4">
	</video>
		<div class="logo">Harmony</div>
		<div class="menu">
			<a href="#">How to join a room</a>
			<a href="#">Contact</a>
		</div>
		<div class="musicians">
			<div>4 musicians</div>
			<div>4 phones</div>
			<div>1 computer</div>
			<div>1 music</div>
		</div>
		<div class="slogan">
			<div class="slogan_create">CREATE</div>
			<div class="slogan_with">WITH</div>
			<div class="slogan_friends">FRIENDS</div>
		</div>
	
	<div class="create_room">
		<div class="create_room__whitespace"></div>
		Create Room
	</div>
	<div class="error"><?= $error ?></div>
	
	<form action="#" method="post">
			<select name="players" class="custom-select">
				<option  value="1">1P</option>
				<option value="2">2P</option>
				<option value="3">3P</option>
				<option selected="selected" value="4">4P</option>
			</select><!-- 
			--><input type="text" placeholder="Room name" name="room_name" autocomplete="off" ><!-- 
			--><input  class="validate" type="submit" value="Validate">
	</form>
	<div class="mobile_disclaimer">To join a room on your device, please enter the Url given on your computer or scan the QR Code</div>

	<script src="scripts/home.js"></script>
	</body>
	</html>