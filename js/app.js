function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 digit & calling again', pin);
        return getPin();
    }
}

function generatePin() {
    //console.log('finally done')
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});

// button cheaker
function verifyPin() {
    //console.log('done!')
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const massageSuccess = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        //console.log('matched')
        // amra age thake display block kore rakchi

        massageSuccess.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        // console.log('oops')

        failError.style.display = 'block';
        massageSuccess.style.display = 'none';
    }
}