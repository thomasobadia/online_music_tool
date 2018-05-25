<?php

if(isset($_GET['roomId'])){
	$roomId = $_GET['roomId'];
	include '../model/room_infos_query.php';
	echo '<pre>';
	var_dump($room);
	echo '</pre>';
	if(!$room) {
		header('Location:../index.php');
		exit;
	}
}
else{
	header('Location:../index.php');
	exit;
}