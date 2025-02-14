"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlApi01 = "https://api.adviceslip.com/advice";
const number = document.querySelector(".number");
const text = document.querySelector(".text");
const dice = document.querySelector(".container-dice");
const getMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(urlApi01);
    try {
        const data = yield response.json();
        const id = data.slip.id.toString();
        const advice = data.slip.advice;
        number.innerText = id;
        text.innerHTML = advice;
    }
    catch (error) {
        console.error(error);
    }
});
getMessage();
dice.addEventListener("click", () => getMessage());
