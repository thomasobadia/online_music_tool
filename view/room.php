<?php
include '../model/db_connect.php' ;
include '../controller/room.php';


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../assets/styles/reset.css">
    <link rel="stylesheet" href="../assets/styles/web.css">
    <title>Document</title>
</head>
<body>
<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://51.38.176.227/view/room.php?roomId=<?= $room->room_id ?>" alt="">

    <div class="room">
        <div class="room__header">
            <div class="room__header__title">Harmony</div>
            <img src="../assets/img/web/arrow-left.svg" class="room__header__left_arrow"></img>
            <div class="room__header__room_name"><?= $room->name ?></div>
        </div>
        <div class="room__content">
            <div class="time_cursor"></div>
            <div class="room__content__tracks">
            </div>
        </div>
        <div class="room__footer">
            <div class="room__footer__parameters">
                <div class="room__footer__parameters__volume">
                        <div class="room__footer__parameters__volume__text">Volume : 100</div>
                        <!-- <div class="room__footer__parameters__volume__slider">
                            <div class="room__footer__parameters__volume__slider__cursor"></div>
                        </div> -->
                        <input class="room__footer__parameters__volume__slider" type="range">
                </div>
                <div class="room__footer__parameters__audio_controls">
                    <img src="../assets/img/web/play.png" class="room__footer__parameters__audio_controls__play">
                    <img src="../assets/img/web/stop.png" class="room__footer__parameters__audio_controls__pause">
                    <img src="../assets/img/web/record.png" class="room__footer__parameters__audio_controls__record">
                </div>
            </div>
            <div class="room__footer__frequency"></div>
        </div>
    </div>
    
	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.dev.js"></script>
	<script>
		const roomId = "<?= $room->room_id ?>"
		const players = "<?= $room->players ?>"
	</script>
	<script src="../scripts/vendor/modernizr-custom.js"></script>
	<script src="../scripts/room.js"></script>
    <script src="../scripts/web/volume.js"></script>
    <script src="../scripts/web/timeCursor.js"></script>
</body>
</html>