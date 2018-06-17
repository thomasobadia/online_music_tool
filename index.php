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
		<link rel="apple-touch-icon" sizes="57x57" href="assets/favicon/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="assets/favicon/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="assets/favicon/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="assets/favicon/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="assets/favicon/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="assets/favicon/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="assets/favicon/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="assets/favicon/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="assets/favicon/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="assets/favicon/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
		<link rel="manifest" href="assets/favicon/manifest.json">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="assets/favicon/ms-icon-144x144.png">
		<meta name="theme-color" content="#ffffff">
		<title>Harmony</title>
	</head>
	<body>
	<video autoplay muted loop class="homeVideo">
  		<source src="assets/video/home.mp4" type="video/mp4">
	</video>
		<div class="logo">Harmony</div>
		<div class="menu">
			<a href="view/how-to.php">How to join a room</a>
			<a href="view/contact.php">Contact</a>
		</div>
		<div class="musicians">
			<div>4 musicians</div>
			<div>4 phones</div>
			<div>1 computer</div>
			<div>1 music</div>
		</div>
		<div class="slogan">
			<div class="slogan_bg"></div>
			<div class="slogan_create">CREATE</div>
			<div class="slogan_with">WITH</div>
			<div class="slogan_friends">FRIENDS</div>
		</div>
	
	<div class="create_room">
		<div class="create_room__whitespace"></div>
		<div>Create Room</div>
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