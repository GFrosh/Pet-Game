import { text1, myFunc1, myFunc2, myFunc3, myFunc4, myFunc5, myFunc6, myFunc7, myFunc8, myFunc9, myFunc10, loadPage, text2 } from "./functions.js";

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");


button1.onclick = myFunc1;
button2.onclick = myFunc2;
button3.onclick = myFunc3;
button4.onclick = myFunc4;
button5.onclick = myFunc5;
button6.onclick = myFunc6;
button7.onclick = myFunc7;
button8.onclick = myFunc8;
button9.onclick = myFunc9;
button10.onclick = myFunc10;


console.log(text1, text2);