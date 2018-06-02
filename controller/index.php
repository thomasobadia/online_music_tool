<?php

$error = '';

if(isset($_GET['error'])){
	$error ='Please enter a valid name for your room';
}
if(isset($_GET['alreadyTaken'])){
	$error = 'This name has already been taken';
}

if(isset($_POST['room_name'])){
	if(!empty($_POST['room_name'])){
		$roomName = $_POST['room_name'];
		$playerNumber = $_POST['players'];
		$roomId = md5($roomName);
		include 'model/room_infos_query.php' ;
		if($room){
			header('Location:index.php?alreadyTaken=true');
			exit;
		}
		include 'model/create_room_query.php' ;
		header('Location:view/room.php?roomId='.$roomId);
		exit;
	}
	else{
		header('Location:index.php?error=true');
		exit;
	}
}