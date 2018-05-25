<?php

$prepare=$pdo->prepare('
		INSERT INTO 
		room (name, room_id, players)
		VALUES
		(:name, :roomId, :players)
		
		');
		$prepare->bindValue(':name',$roomName);
		$prepare->bindValue(':roomId',$roomId);
		$prepare->bindValue(':players',$playerNumber);
		
		$execute = $prepare->execute();