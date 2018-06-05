const $createRoom = document.querySelector(".create_room")
const $form = document.querySelector("form")

$createRoom.addEventListener('click',()=>{
    $createRoom.style.display = 'none'
    $form.style.display = 'block'
})