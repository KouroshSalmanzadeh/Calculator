var firstNumber = 0,
    secondNumber = 0,
    globalType, flag, total, back = false;

function getNumber(ev) {
    if (firstNumber && flag == true) {
        document.querySelector("input").value = '';
        flag = false;
        back = false;
    } else if (total == true) {
        document.querySelector("input").value = 0;
        firstNumber = 0;
        secondNumber = 0;
        total = false;
    }
    document.querySelector("input").value += ev.currentTarget.innerText;
};

function oprate(type) {

    if (type != "result") {
        firstNumber = +document.querySelector("input").value;
        globalType = type;
        flag = true;
        back = true;
    } else {
        secondNumber = +document.querySelector("input").value;
        switch (globalType) {
            case "divid":
                document.querySelector("input").value = firstNumber / secondNumber;
                total = true;
                break;

            case "multi":
                document.querySelector("input").value = firstNumber * secondNumber;
                total = true;
                break;

            case "minus":
                document.querySelector("input").value = firstNumber - secondNumber;
                total = true;
                break;

            case "plus":
                document.querySelector("input").value = firstNumber + secondNumber;
                total = true;
                break;
        }
    }
};

function Clear(cleartype) {
    if (cleartype == 'clear all') {
        document.querySelector("input").value = 0;
        firstNumber = 0;
        secondNumber = 0;
        total = false;
    } else if (cleartype == 'clear this number') {
        if (firstNumber != 0) {
            secondNumber = 0;
            document.querySelector("input").value = '';
        } else {
            firstNumber = 0;
            document.querySelector("input").value = '';
        }
    } else {
        if (total != true) {
            if (firstNumber !== 0 && back == true) {
                window.alert("You can't clear your first number! please enter .C or CE");
            } else if (back == false && secondNumber == 0) {
                document.querySelector("input").value = parseInt(document.querySelector("input").value / 10);
                if (document.querySelector("input").value == 0) {
                    document.querySelector("input").value = '';
                }
            }
        } else {
            window.alert("You can't back! please enter .C or CE");
        }
    }
};