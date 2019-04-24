function calculate() {

    var result = document.getElementById('result');

    var number = document.getElementsByClassName('numberList');
    var sum = 0;
    for(let i = 0; i < number.length; i++) {
        var item = number[i];
        sum = (sum + (+item.innerText));
    }
    result.innerText = parseFloat(Math.round(sum * 100) / 100).toFixed(2);

}

function takeInput() {

    var inputNumber = document.getElementById('inputNumber').value;

    if(validateInput(inputNumber)) {
        var container = document.createElement('div');
        var para = document.createElement('p');
        var span = document.createElement('span');
        container.classList.add('divContainer');
        span.classList.add('numberList');

        if(inputNumber.length > 0) {
            span.innerText = inputNumber;
        } else{
            span.innerText = "0.00";
        }
        
        var numberContainer = document.getElementById('numbers');
        numberContainer.appendChild(container);
        container.appendChild(para);
        para.appendChild(span);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = "(delete)";
        deleteButton.classList.add('deleteButton');
        para.appendChild(deleteButton);

        calculate();

        deleteButton.addEventListener('click', function() {
            deleteButton.parentNode.parentNode.removeChild(para);
            calculate();
        }, false);
        
    } else {
        alert('Please enter only numbers!');
    }
    

}

// function deleteNumber() {
//     deleteButton.addEventListener('click', function() {
//         deleteButton.parentNode.parentNode.removeChild(para);
//         calculate();
//     }, false);
// }

function validateInput(value) {
    return /^\d*\.?\d*$/.test(value);
}


var button = document.getElementById('button');
button.addEventListener('click', takeInput, false);


