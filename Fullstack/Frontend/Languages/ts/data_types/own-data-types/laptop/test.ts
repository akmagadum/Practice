class laptop{
    screen=1
    keyboard=1
    enterkeys=2
    shiftkeys=2
    usbport=2
    hdmiport=1

    withhdmiport(){
        return  this.keyboard
    }
}
let printt=new laptop()
console.log(printt.enterkeys)
console.log(printt.hdmiport)
console.log(printt.keyboard)
console.log(printt.screen)
console.log(printt.usbport)
console.log(printt.withhdmiport())
