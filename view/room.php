<?php
include '../model/db_connect.php' ;
include '../controller/room.php';


?>
	<!DOCTYPE html>

	<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Room</title>
	</head>

	<body>
		<form onsubmit="event.preventDefault(); updatePseudo();">
			<input type="text" id='pseudo' name="pseudo" />
			<input id="validate" type="submit" value="Validate" />
		</form>
		<h1>Room Name : <?= $room->name ?></h1>
		<p>To join this room, please copy the following link or scan the QR Code</p>
		<p>http://51.38.176.227/view/room.php?roomId=
			<?= $room->room_id ?>
		</p>
		<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://51.38.176.227/view/room.php?roomId=<?= $room->room_id ?>" alt="">
		<div id="button" style="width: 200px;height: 200px;background: red"></div>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.dev.js"></script>
		<script>
			const roomId = "<?= $room->room_id ?>"
			const players = "<?= $room->players ?>"
		</script>
		<script src="../scripts/vendor/modernizr-custom.js"></script>
		<script src="../scripts/room.js"></script>


	</body>

	</html>