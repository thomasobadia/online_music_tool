<?php
include '../model/db_connect.php' ;
include '../controller/room.php';


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../assets/styles/reset.css">
    <link rel="stylesheet" href="../assets/styles/web.css">
    <link rel="stylesheet" href="../assets/styles/phone.css">
    <title>Document</title>
</head>
<body>

<div class="desktop">
        <div class="room">
            <div class="room__header">
                <div class="room__header__title">Harmony</div>
                <img src="../assets/img/web/arrow-left.svg" class="room__header__left_arrow"></img>
                <div class="room__header__room_name"><?= $room->name ?></div>
            </div>
            <div class="room__content">
                <div class="time_cursor"></div>
                <div class="room__content__tracks"></div>
                <div class="qr_code">
                    <p class ="qr_code__title">To join this room, please copy the following link or scan the QR Code</p>
                    <p class ="qr_code__text">https://harmonyngal.ovh/view/room.php?roomId=
                        <?= $room->room_id ?>
                    </p>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://harmonyngal.ovh/view/room.php?roomId=<?= $room->room_id ?>" alt="">
                </div>
            </div>
            <div class="room__footer">
                <div class="room__footer__parameters">
                    <div class="room__footer__parameters__qr_code_toggle">Display Qr code</div>
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
    </div>

<!-- // fqdfhmqhdfoiqifjq -->

<div class="mobile">
    <!-- <div class="content"> -->
    <div class="turnYourPhone"></div>
    <div class="primary_button_sound_selected" data-sound="piano">
                <span class="primary_button__text"> Piano </span>
                <div class="primary_button__margin"></div>
            </div>
            <div class="choose_sound">
                <div class="instruments sounds_type">
                    <div class="primary_button">
                        <span class="primary_button__text"> Instruments </span>
                        <div class="primary_button__margin"></div>
                    </div>
                    <div class="all_sounds">
                        <div class="primary_button" data-sound="piano" data-soundid="0">
                            <span class="primary_button__text"> Piano </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        
                        <div class="primary_button" data-sound="laser" data-soundid="1">
                            <span class="primary_button__text"> Laser </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="saxophone" data-soundid="2">
                            <span class="primary_button__text"> Saxophone </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="piano" data-soundid="3">
                            <span class="primary_button__text"> Flute </span>
                            <div class="primary_button__margin"></div>
                        </div>
                    </div>
                </div>
                <div class="synthesizers sounds_type">
                    <div class="primary_button">
                        <span class="primary_button__text"> Synthesizers </span>
                        <div class="primary_button__margin"></div>
                    </div>
                    <div class="all_sounds">
                        <div class="primary_button" data-sound="piano">
                            <span class="primary_button__text"> Piano </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="guitar">
                            <span class="primary_button__text"> Guitar </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="saxophone">
                            <span class="primary_button__text"> Saxophone </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="piano">
                            <span class="primary_button__text"> Flute </span>
                            <div class="primary_button__margin"></div>
                        </div>
                    </div>
                </div>
                <div class="drumpads sounds_type">
                    <div class="primary_button">
                        <span class="primary_button__text"> Drumpads </span>
                        <div class="primary_button__margin"></div>
                    </div>
                    <div class="all_sounds">
                        <div class="primary_button" data-sound="piano" data-number="0">
                            <span class="primary_button__text"> Piano </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="guitar" data-number="1">
                            <span class="primary_button__text"> Guitar </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="saxophone" data-number="2">
                            <span class="primary_button__text"> Saxophone </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="piano" data-number="3">
                            <span class="primary_button__text"> Flute </span>
                            <div class="primary_button__margin"></div>
                        </div>
                    </div>
                </div>
                <div class="sampler sounds_type">
                    <div class="primary_button">
                        <span class="primary_button__text"> Sampler </span>
                        <div class="primary_button__margin"></div>
                    </div>
                    <div class="all_sounds">
                        <div class="primary_button" data-sound="piano">
                            <span class="primary_button__text"> Piano </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="guitar">
                            <span class="primary_button__text"> Guitar </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="saxophone">
                            <span class="primary_button__text"> Saxophone </span>
                            <div class="primary_button__margin"></div>
                        </div>
                        <div class="primary_button" data-sound="piano">
                            <span class="primary_button__text"> Flute </span>
                            <div class="primary_button__margin"></div>
                        </div>
                    </div>
                </div>
                <div class="intruments_type_color_filters">
                        <div class="intruments_type_color_filter blue_filter" data-instrument="instruments"></div>
                        <div class="intruments_type_color_filter purple_filter" data-instrument="syntesizers"></div>
                        <div class="intruments_type_color_filter pink_filter" data-instrument="drumpads"></div>
                        <div class="intruments_type_color_filter green_filter" data-instrument="sampler"></div>
                </div>
            </div>
            <div class="gradient_line"></div>
            <div class="sampler_page">
                <div class="sampler_page__circle_mic">
                    <img src="../assets/img/mic.svg" alt="mic">
                </div>
                <div class="primary_button_sound_selected primary_button_sampler0">
                    <span class="primary_button__text"> Retry </span>
                    <div class="primary_button__margin"></div>
                </div>
                <div class="primary_button_sound_selected primary_button_sampler1">
                    <span class="primary_button__text"> Next Step</span>
                    <div class="primary_button__margin"></div>
                </div>
            </div>
            <div id="keyBoard">
                <div class="key white" id="A-1"></div>
                <div class="key black" id="A-1d"><span>A#-1</span></div>
                <div class="key white" id="B-1"></div>
                <div class="key black invisibleKey" id="B-1d"></div>
                <div class="key white" id="C0"><span>C0</span></div>
                <div class="key black" id="C0d"><span>C0#</span></div>
                <div class="key white" id="D0"></div>
                <div class="key black" id="D0d"></div>
                <div class="key white" id="E0"></div>
                <div class="key black invisibleKey" id="E0d"></div>
                <div class="key white" id="F0"></div>
                <div class="key black" id="F0d"></div>
                <div class="key white" id="G0"></div>
                <div class="key black" id="G0d"></div>
                <div class="key white" id="A0"></div>
                <div class="key black" id="A0d"></div>
                <div class="key white" id="B0"></div>
                <div class="key black invisibleKey" id="B0d"></div>
                <div class="key white" id="C1"><span>C1</span></div>
                <div class="key black" id="C1d"></div>
                <div class="key white" id="D1"></div>
                <div class="key black" id="D1d"></div>
                <div class="key white" id="E1"></div>
                <div class="key black invisibleKey" id="E1d"></div>
                <div class="key white" id="F1"></div>
                <div class="key black" id="F1d"></div>
                <div class="key white" id="G1"></div>
                <div class="key black" id="G1d"></div>
                <div class="key white" id="A1"></div>
                <div class="key black" id="A1d"></div>
                <div class="key white" id="B1"></div>
                <div class="key black invisibleKey" id="B1d"></div>
                <div class="key white" id="C2"><span>C2</span></div>
                <div class="key black" id="C2d"></div>
                <div class="key white" id="D2"></div>
                <div class="key black" id="D2d"></div>
                <div class="key white" id="E2"></div>
                <div class="key black invisibleKey" id="E2d"></div>
                <div class="key white" id="F2"></div>
                <div class="key black" id="F2d"></div>
                <div class="key white" id="G2"></div>
                <div class="key black" id="G2d"></div>
                <div class="key white" id="A2"></div>
                <div class="key black" id="A2d"></div>
                <div class="key white" id="B2"></div>
                <div class="key black invisibleKey" id="B2d"></div>
                <div class="key white" id="C3"><span>C3</span></div>
                <div class="key black" id="C3d"></div>
                <div class="key white" id="D3"></div>
                <div class="key black" id="D3d"></div>
                <div class="key white" id="E3"></div>
                <div class="key black invisibleKey" id="E3d"></div>
                <div class="key white" id="F3"></div>
                <div class="key black" id="F3d"></div>
                <div class="key white" id="G3"></div>
                <div class="key black" id="G3d"></div>
                <div class="key white" id="A3"></div>
                <div class="key black" id="A3d"></div>
                <div class="key white" id="B3"></div>
                <div class="key black invisibleKey" id="B3d"></div>
                <div class="key white" id="C4"><span>C4</span></div>
                <div class="key black" id="C4d"></div>
                <div class="key white" id="D4"></div>
                <div class="key black" id="D4d"></div>
                <div class="key white" id="E4"></div>
                <div class="key black invisibleKey" id="E4d"></div>
                <div class="key white" id="F4"></div>
                <div class="key black" id="F4d"></div>
                <div class="key white" id="G4"></div>
                <div class="key black" id="G4d"></div>
                <div class="key white" id="A4"></div>
                <div class="key black" id="A4d"></div>
                <div class="key white" id="B4"></div>
                <div class="key black invisibleKey" id="B4d"></div>
                <div class="key white" id="C5"><span>C5</span></div>
                <div class="key black" id="C5d"></div>
                <div class="key white" id="D5"></div>
                <div class="key black" id="D5d"></div>
                <div class="key white" id="E5"></div>
                <div class="key black invisibleKey" id="E5d"></div>
                <div class="key white" id="F5"></div>
                <div class="key black" id="F5d"></div>
                <div class="key white" id="G5"></div>
                <div class="key black" id="G5d"></div>
                <div class="key white" id="A5"></div>
                <div class="key black" id="A5d"></div>
                <div class="key white" id="B5"></div>
                <div class="key black invisibleKey" id="B5d"></div>
                <div class="key white" id="C6"><span>C6</span></div>
                <div class="key black" id="C6d"></div>
                <div class="key white" id="D6"></div>
                <div class="key black" id="D6d"></div>
                <div class="key white" id="E6"></div>
                <div class="key black invisibleKey" id="E6d"></div>
                <div class="key white" id="F6"></div>
                <div class="key black" id="F6d"></div>
                <div class="key white" id="G6"></div>
                <div class="key black" id="G6d"></div>
                <div class="key white" id="A6"></div>
                <div class="key black" id="A6d"></div>
                <div class="key white" id="B6"></div>
                <div class="key black invisibleKey" id="B6d"></div>
            </div>
            <div class="drumpad_keyboard">
                <div class="drumpad_keys"><div class="drumpad_keys__text">Place Holder</div></div>
                <div class="drumpad_keys"><div class="drumpad_keys__text">Place Holder</div></div>
                <div class="drumpad_keys"><div class="drumpad_keys__text">Place Holder</div></div>
                <div class="drumpad_keys"><div class="drumpad_keys__text">Place Holder</div></div>
                <div class="drumpad_keys"><div class="drumpad_keys__text">Place Holder</div></div>
                <div class="drumpad_keys"><div class="drumpad_keys__text">Place Holder</div></div>
            </div>
            <!-- <div class="test"></div>
            <div class="record"> record </div>
            <div class="stopRecord"> stop </div>
            <div class="sample"> sample </div> -->
            <audio src=""></audio>
            <a href=""></a>
        <!-- </div> -->
    </div>


   
        




    
	<script>
		const roomId = "<?= $room->room_id ?>"
		const players = "<?= $room->players ?>"
    </script>
    <script src="../scripts/phone/tone.js"></script>
	<script src="../scripts/vendor/modernizr-custom.js"></script>
	<script src="../scripts/web/qrCodeToggle.js"></script>
	<script src="../scripts/web/allInstruments.js"></script>
    <script src="../scripts/web/volume.js"></script>
    <script src="../scripts/web/timeCursor.js"></script>


    <!-- phone -->

    <script src="../scripts/phone/audioContext.js"></script>
    <script src="../scripts/phone/pageOrientation.js"></script>
    <script src="../scripts/phone/createKeyBoard.js"></script>
    <script src="../scripts/phone/audio.js"></script>
    <!-- <script src="../scripts/phone/mic.js"></script> -->
    <script src="../scripts/phone/sampler.js"></script>
    <script src="../scripts/phone/drumpads.js"></script>
    <script src="../scripts/phone/chooseInstrument.js"></script>
    <script src="../scripts/phone/main.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.dev.js"></script>
    <script src="../scripts/room.js"></script>
</body>
</html>

