let isReverse = true;

function reverse() {
    console.log(isReverse)
    let cToF = document.getElementById('c-to-f');
    let fToC = document.getElementById('f-to-c');

    if (isReverse) {
        fToC.style.display = "block";
        cToF.style.display = "none";
        isReverse = false;
    }else {
        cToF.style.display = "block";
        fToC.style.display = "none";
        isReverse = true;
    }
}

function convert() {
    let celcius = document.getElementById('c-to-f-input').value;
    if (celcius.match (/[^0-9]/g)) {
        alert('Input Tidak Valid!');
    }
    console.log(celcius);
}

document.getElementById('button-convert').addEventListener('click' ,() => convert());