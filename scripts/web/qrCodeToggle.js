/***********************************/
 /*TOGGLE DISPLAY OF THE QR CODE*/
/***********************************/

const $qrCode = document.querySelector(".qr_code")
const $qrCodeToggle = document.querySelector(".room__footer__parameters__qr_code_toggle")
let isQrDisplayed = 1
console.log($qrCodeToggle)

$qrCodeToggle.addEventListener("click",()=>{
    if(isQrDisplayed){
        $qrCodeToggle.innerHTML = "Display Qr code"
        isQrDisplayed = 0
        $qrCode.style.visibility = "hidden"
    }
    else{
        $qrCodeToggle.innerHTML = "Hide Qr code"
        isQrDisplayed = 1
        $qrCode.style.visibility = "visible"
    }
})