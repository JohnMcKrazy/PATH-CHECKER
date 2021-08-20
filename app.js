//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!ALERT DISPLAY CONSTANTS
const displayAlert = document.querySelector('.alert_container1');
const numberHolder = document.querySelector('.input_number');
const btnAlert = document.querySelector('.btn_alert');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!ALERT SORRY DISPLAY
const displaySorryAlert = document.querySelector('.alert_container2');
const btnAlertOk = document.querySelector('.btn_alert_OK');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!ITEMS BTNS CONSTANTS
const newBtn = document.getElementById('new_item_btn');
const outBtn = document.getElementById('out_item_btn');
const resetBtn = document.getElementById('reset_btn');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!COUNTER CONSTANT
const countDisplay = document.querySelector('.counter_card');
const count = document.querySelector('.counter');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!BTNS CONSTANTS
const btn1 = document.querySelector('#btn_1');
const btn2 = document.querySelector('#btn_2');
const btn3 = document.querySelector('#btn_3');
const btn4 = document.querySelector('#btn_4');
const btn5 = document.querySelector('#btn_5');
const btn6 = document.querySelector('#btn_6');
const btn7 = document.querySelector('#btn_7');
const btn8 = document.querySelector('#btn_8');
const btn9 = document.querySelector('#btn_9');
const btn10 = document.querySelector('#btn_10');
const btn11 = document.querySelector('#btn_11');
const btn12 = document.querySelector('#btn_12');
const btn13 = document.querySelector('#btn_13');
const btn14 = document.querySelector('#btn_14');
const btn15 = document.querySelector('#btn_15');
const btn16 = document.querySelector('#btn_16');
const btn17 = document.querySelector('#btn_17');
const btn18 = document.querySelector('#btn_18');
const btn19 = document.querySelector('#btn_19');
const btn20 = document.querySelector('#btn_20');
const btn21 = document.querySelector('#btn_21');
const btn22 = document.querySelector('#btn_22');
const btn23 = document.querySelector('#btn_23');
const btn24 = document.querySelector('#btn_24');
const btn25 = document.querySelector('#btn_25');
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!GLOBAL VARIANTS
let moto1 = 'waiting';
let moto2 = 'waiting';
let moto3 = 'waiting';
let moto4 = 'waiting';
let moto5 = 'waiting';
let moto6 = 'waiting';
let moto7 = 'waiting';
let moto8 = 'waiting';
let moto9 = 'waiting';
let moto10 = 'waiting';
let moto11 = 'waiting';
let moto12 = 'waiting';
let moto13 = 'waiting';
let moto14 = 'waiting';
let moto15 = 'waiting';
let moto16 = 'waiting';
let moto17 = 'waiting';
let moto18 = 'waiting';
let moto19 = 'waiting';
let moto20 = 'waiting';
let moto21 = 'waiting';
let moto22 = 'waiting';
let moto23 = 'waiting';
let moto24 = 'waiting';
let moto25 = 'waiting';
let myMotosInTheGarage = 0;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!CONCRETE FUNCTIONS
function checkCount() {
    if (myMotosInTheGarage === 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
}
function closeAlert(whatclose) {
    whatclose.animate([{ opacity: '1' }, { opacity: '0' }], {
        duration: 500,
        fill: 'forwards',
    });
    setTimeout(closeDisplayAlert, 1000);
    function closeDisplayAlert() {
        whatclose.style.display = 'none';
    }
}
function openAlert(whatopen) {
    whatopen.style.display = 'flex';
    whatopen.animate([{ opacity: '0' }, { opacity: '1' }], {
        duration: 500,
        fill: 'forwards',
    });
}
function backToTheGarage() {
    closeAlert(displaySorryAlert);
}
function checkerGarage() {
    myMotosInTheGarage = numberHolder.value;
    count.textContent = myMotosInTheGarage;
    //!
    closeAlert(displayAlert);
    //!
}
function addItem() {
    myMotosInTheGarage++;
    console.log(myMotosInTheGarage);

    count.textContent = myMotosInTheGarage;
}
function removeItem() {
    if (myMotosInTheGarage === 0) {
        openAlert(displaySorryAlert);
    } else {
        myMotosInTheGarage--;
        console.log(myMotosInTheGarage);
        count.textContent = myMotosInTheGarage;
    }
}
function changeBackground(item, color) {
    item.style.background = color;
}
function ckeckMotoGarage(motoNumber, btnNumber, funct) {
    if (myMotosInTheGarage === 0 && motoNumber === 'waiting') {
        openAlert(displaySorryAlert);
        myMotosInTheGarage;
        return 'waiting';
    } else if (myMotosInTheGarage > 0 && motoNumber === 'waiting') {
        myMotosInTheGarage--;
        btnNumber.style.background = 'green';
        btnNumber.style.borderColor = 'green';
        return 'out';
    } else if (myMotosInTheGarage >= 0 && motoNumber === 'out') {
        myMotosInTheGarage++;
        btnNumber.style.background = 'red';
        btnNumber.style.borderColor = 'red';
        btnNumber.style.color = 'whitesmoke';
        btnNumber.style.fontWeight = '600';
        btnNumber.classList.add('btn_out');
        btnNumber.classList.remove('btn');
        btnNumber.removeEventListener('click', funct);

        return 'return';
    }
}
function resetChecker() {
    clearStyle(btn1, checkMoto1);
    clearStyle(btn2, checkMoto2);
    clearStyle(btn3, checkMoto3);
    clearStyle(btn4, checkMoto4);
    clearStyle(btn5, checkMoto5);
    clearStyle(btn6, checkMoto6);
    clearStyle(btn7, checkMoto7);
    clearStyle(btn8, checkMoto8);
    clearStyle(btn9, checkMoto9);
    clearStyle(btn10, checkMoto10);
    clearStyle(btn11, checkMoto11);
    clearStyle(btn12, checkMoto12);
    clearStyle(btn13, checkMoto13);
    clearStyle(btn14, checkMoto14);
    clearStyle(btn15, checkMoto15);
    clearStyle(btn16, checkMoto16);
    clearStyle(btn17, checkMoto17);
    clearStyle(btn18, checkMoto18);
    clearStyle(btn19, checkMoto19);
    clearStyle(btn20, checkMoto20);
    clearStyle(btn21, checkMoto21);
    clearStyle(btn22, checkMoto22);
    clearStyle(btn23, checkMoto23);
    clearStyle(btn24, checkMoto24);
    clearStyle(btn25, checkMoto25);
    moto1 = 'waiting';
    moto2 = 'waiting';
    moto3 = 'waiting';
    moto4 = 'waiting';
    moto5 = 'waiting';
    moto6 = 'waiting';
    moto7 = 'waiting';
    moto8 = 'waiting';
    moto9 = 'waiting';
    moto10 = 'waiting';
    moto11 = 'waiting';
    moto12 = 'waiting';
    moto13 = 'waiting';
    moto14 = 'waiting';
    moto15 = 'waiting';
    moto16 = 'waiting';
    moto17 = 'waiting';
    moto18 = 'waiting';
    moto19 = 'waiting';
    moto20 = 'waiting';
    moto21 = 'waiting';
    moto22 = 'waiting';
    moto23 = 'waiting';
    moto24 = 'waiting';
    moto25 = 'waiting';

    myMotosInTheGarage = '0';
    numberHolder.value = ' ';
    openAlert(displayAlert);
}
function clearStyle(btnNumber, funct) {
    btnNumber.style.border = null;
    btnNumber.style.background = null;
    btnNumber.classList.remove('btn_out');
    btnNumber.classList.add('btn');
    btnNumber.addEventListener('click', funct);
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!FUNCTIONS IN RESERCH
function checkMoto1() {
    moto1 = ckeckMotoGarage(moto1, btn1, checkMoto1);
    count.textContent = myMotosInTheGarage;
}
function checkMoto2() {
    moto2 = ckeckMotoGarage(moto2, btn2, checkMoto2);
    count.textContent = myMotosInTheGarage;
}
function checkMoto3() {
    moto3 = ckeckMotoGarage(moto3, btn3, checkMoto3);
    count.textContent = myMotosInTheGarage;
}
function checkMoto4() {
    moto4 = ckeckMotoGarage(moto4, btn4, checkMoto4);
    count.textContent = myMotosInTheGarage;
}
function checkMoto5() {
    moto5 = ckeckMotoGarage(moto5, btn5, checkMoto4);
    count.textContent = myMotosInTheGarage;
}
function checkMoto6() {
    moto6 = ckeckMotoGarage(moto6, btn6, checkMoto6);
    count.textContent = myMotosInTheGarage;
}
function checkMoto7() {
    moto7 = ckeckMotoGarage(moto7, btn7, checkMoto7);
    count.textContent = myMotosInTheGarage;
}
function checkMoto8() {
    moto8 = ckeckMotoGarage(moto8, btn8, checkMoto8);
    count.textContent = myMotosInTheGarage;
}
function checkMoto9() {
    moto9 = ckeckMotoGarage(moto9, btn9, checkMoto9);
    count.textContent = myMotosInTheGarage;
}
function checkMoto10() {
    moto10 = ckeckMotoGarage(moto10, btn10, checkMoto10);
    count.textContent = myMotosInTheGarage;
}
function checkMoto11() {
    moto11 = ckeckMotoGarage(moto11, btn11, checkMoto11);
    count.textContent = myMotosInTheGarage;
}
function checkMoto12() {
    moto12 = ckeckMotoGarage(moto12, btn12, checkMoto12);
    count.textContent = myMotosInTheGarage;
}
function checkMoto13() {
    moto13 = ckeckMotoGarage(moto13, btn13, checkMoto13);
    count.textContent = myMotosInTheGarage;
}
function checkMoto14() {
    moto14 = ckeckMotoGarage(moto14, btn14, checkMoto14);
    count.textContent = myMotosInTheGarage;
}
function checkMoto15() {
    moto15 = ckeckMotoGarage(moto15, btn15, checkMoto15);
    count.textContent = myMotosInTheGarage;
}
function checkMoto16() {
    moto16 = ckeckMotoGarage(moto16, btn16, checkMoto16);
    count.textContent = myMotosInTheGarage;
}
function checkMoto17() {
    moto17 = ckeckMotoGarage(moto17, btn17, checkMoto17);
    count.textContent = myMotosInTheGarage;
}
function checkMoto18() {
    moto18 = ckeckMotoGarage(moto18, btn18, checkMoto18);
    count.textContent = myMotosInTheGarage;
}
function checkMoto19() {
    moto19 = ckeckMotoGarage(moto19, btn19, checkMoto19);
    count.textContent = myMotosInTheGarage;
}
function checkMoto20() {
    moto20 = ckeckMotoGarage(moto20, btn20, checkMoto20);
    count.textContent = myMotosInTheGarage;
}
function checkMoto21() {
    moto21 = ckeckMotoGarage(moto21, btn21, checkMoto21);
    count.textContent = myMotosInTheGarage;
}
function checkMoto22() {
    moto22 = ckeckMotoGarage(moto22, btn22, checkMoto22);
    count.textContent = myMotosInTheGarage;
}
function checkMoto23() {
    moto23 = ckeckMotoGarage(moto23, btn23, checkMoto23);
    count.textContent = myMotosInTheGarage;
}
function checkMoto24() {
    moto24 = ckeckMotoGarage(moto24, btn24, checkMoto24);
    count.textContent = myMotosInTheGarage;
}
function checkMoto25() {
    moto25 = ckeckMotoGarage(moto25, btn25, checkMoto25);
    count.textContent = myMotosInTheGarage;
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!INTERVALS
setInterval(checkCount, 1);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!ADD EVENT LISTENERS
btn1.addEventListener('click', checkMoto1);
btn2.addEventListener('click', checkMoto2);
btn3.addEventListener('click', checkMoto3);
btn4.addEventListener('click', checkMoto4);
btn5.addEventListener('click', checkMoto5);
btn6.addEventListener('click', checkMoto6);
btn7.addEventListener('click', checkMoto7);
btn8.addEventListener('click', checkMoto8);
btn9.addEventListener('click', checkMoto9);
btn10.addEventListener('click', checkMoto10);
btn11.addEventListener('click', checkMoto11);
btn12.addEventListener('click', checkMoto12);
btn13.addEventListener('click', checkMoto13);
btn14.addEventListener('click', checkMoto14);
btn15.addEventListener('click', checkMoto15);
btn16.addEventListener('click', checkMoto16);
btn17.addEventListener('click', checkMoto17);
btn18.addEventListener('click', checkMoto18);
btn19.addEventListener('click', checkMoto19);
btn20.addEventListener('click', checkMoto20);
btnAlertOk.addEventListener('click', backToTheGarage);
newBtn.addEventListener('click', addItem);
outBtn.addEventListener('click', removeItem);
resetBtn.addEventListener('click', resetChecker);
btnAlert.addEventListener('click', checkerGarage);
