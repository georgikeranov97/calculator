window.addEventListener('DOMContentLoaded', function () {

function calculate() {
    var result = document.getElementById('result');

    const number = Array.prototype.slice.call(document.getElementsByClassName('numberList'));
    const list = new Array();
    number.forEach(function(elem) {
        list.push(+elem.innerText);
    });

    if(list.length > 0) {
        var sum = list.reduce(function(acc, elem) {
            return acc + elem;
        });
    } else{
        sum = 0;
    }
    result.innerText = sum;
}


function takeInput() {

    var inputNumber = document.getElementById('inputNumber').value;

    if(validateInput(inputNumber)) {
        var fragment = document.createDocumentFragment();
        var body = document.body;
        body.appendChild(fragment);

        var container = fragment.appendChild(document.createElement('div'));
        var para = fragment.appendChild(document.createElement('p'));
        var span = fragment.appendChild(document.createElement('span'));
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

        var deleteButton = fragment.appendChild(document.createElement('button'));
        deleteButton.innerHTML = "(delete)";
        deleteButton.classList.add('deleteButton');
        para.appendChild(deleteButton);

        calculate();

        deleteButton.addEventListener('click', function() {
            deleteElement(deleteButton, para);
        }, false);

        deleteButton.removeEventListener('click', function() {
            deleteElement(deleteButton, para);
        }, false);

    } else {
        alert('Please enter only numbers!');
    }
    
}

function deleteElement(elem1, elem2) {
    elem1.parentNode.parentNode.removeChild(elem2);
    calculate();
}

function validateInput(value) {
    return /^\d*\.?\d*$/.test(value);
}

var button = document.getElementById('button');
button.addEventListener('click', takeInput, false);
});



