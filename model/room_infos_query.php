<?php

$prepare=$pdo->prepare('
		SELECT 
			*
		FROM
			room
		WHERE
		room_id=:roomId
		
		');
$prepare->bindValue(':roomId',$roomId);
$execute = $prepare->execute();
$room = $prepare->fetch();