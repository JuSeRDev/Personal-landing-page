"use strict";
var challenge18;
(function (challenge18) {
    const regEx = /[^0-9.]/g;
    const porcentage = document.querySelectorAll(".porcentage-number");
    const inputBill = document.querySelector(".input-bill");
    const inputNumberPeople = document.querySelector(".number-people");
    const resultTipAmount = document.querySelector(".t-a");
    const resultTotal = document.querySelector(".t-t");
    const error = document.querySelector(".error");
    const custom = document.querySelector(".custom");
    const reset = document.querySelector(".reset");
    let clickedText;
    let addInputBill = 0;
    let addInpuNumberPeople = 0;
    inputBill.addEventListener("input", () => {
        inputBill.value = inputBill.value.replace(regEx, "");
        addInputBill = Number(inputBill.value);
        console.log(addInputBill);
    });
    inputNumberPeople.addEventListener("input", () => {
        inputNumberPeople.value = inputNumberPeople.value.replace(regEx, "");
        addInpuNumberPeople = Number(inputNumberPeople.value);
        console.log(addInpuNumberPeople);
    });
    // funcion para hacer operacion matematica
    const match = (number, person, porcentage) => {
        let division = Number((number / person));
        let porcentageOperation = Number((((number * porcentage) / 100) / person).toFixed(2));
        let result = Number((division + porcentageOperation).toFixed(2));
        return [porcentageOperation, result];
    };
    const testing = () => {
        inputBill.value === "" ? inputBill.classList.add("input-bill-error") : inputBill.classList.remove("input-bill-error");
        if (inputNumberPeople.value === "") {
            inputNumberPeople.classList.add("number-people-error");
            error.classList.add("error-active");
        }
        else {
            inputNumberPeople.classList.remove("number-people-error");
            error.classList.remove("error-active");
        }
    };
    const clicked = () => {
        porcentage.forEach(element => {
            element.addEventListener("click", () => {
                var _a;
                testing();
                if (!(inputBill.value === "" || inputNumberPeople.value === "")) {
                    inputBill.classList.remove("input-bill-error");
                    inputNumberPeople.classList.remove("number-people-error");
                    error.classList.remove("error-active");
                    porcentage.forEach(el => el.classList.remove("porcentage-number-active"));
                    element.classList.toggle("porcentage-number-active");
                    clickedText = Number((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.replace("%", "")); // Number() combierte un string en Number (La inicial debe estar en mayuscula)
                    console.log(clickedText);
                    let [tipAmount, total] = match(addInputBill, addInpuNumberPeople, clickedText); //desestructure el array que devuelve la funcion para hacer un solo llamado
                    resultTipAmount.innerHTML = `${tipAmount}`;
                    resultTotal.innerHTML = `${total}`;
                }
            });
        });
    };
    clicked();
    reset.addEventListener("click", () => {
        inputBill.value = "";
        inputNumberPeople.value = "";
        resultTipAmount.innerHTML = `0.00`;
        resultTotal.innerHTML = `0.00`;
        porcentage.forEach(el => el.classList.remove("porcentage-number-active"));
    });
    custom.addEventListener("input", () => {
        testing();
        let inputValue = Number(custom.value);
        if (!(inputBill.value === "" || inputNumberPeople.value === "")) {
            let [tipAmount, total] = match(addInputBill, addInpuNumberPeople, inputValue);
            resultTipAmount.innerHTML = `${tipAmount}`;
            resultTotal.innerHTML = `${total}`;
        }
    });
})(challenge18 || (challenge18 = {}));
