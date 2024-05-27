"use strict";
//Question 1: FizzBuzz
//Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print"FizzBuzz".
const btn = document.querySelector(".quest1");
btn.addEventListener("click", questionOne);
function questionOne() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i, "FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log(i, "Fizz");
        }
        else if (i % 5 == 0) {
            console.log(i, "Buzz");
        }
    }
}
// Question 2: Fibonacci Sequence
//Write a program to generate the Fibonacci sequence up to 10
const btn2 = document.querySelector(".quest2");
btn2.addEventListener("click", questionTwo);
function questionTwo() {
    let num1 = 0;
    let num2 = 1;
    let next_number;
    let list = [num1, num2];
    while (true) {
        next_number = num1 + num2;
        if (next_number > 100)
            break;
        list.push(next_number);
        num1 = num2;
        num2 = next_number;
    }
    console.log(list);
}
// Question 3: Power of Two
//Write a program that takes an integer as input and returns true if the input is a power of two.
const btn3 = document.getElementById("quest3");
btn3.addEventListener("click", () => questionThree(8));
console.log("Button element:", btn3);
function questionThree(a) {
    while (a % 2 == 0) {
        a = a / 2;
    }
    if (a == 1) {
        console.log("True");
    }
    else if (a != 1) {
        console.log("False");
    }
    return a;
}
// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.
const btn4 = document.querySelector(".quest4");
btn4.addEventListener("click", () => questionFour("this is a beautiful town"));
function questionFour(v) {
    console.log(v);
    const words = v.split(" ");
    const capitalizedWords = words.map((word) => {
        const firstLetter = word[0].toUpperCase();
        const restOfWord = word.slice(1);
        return firstLetter + restOfWord;
    });
    const result = capitalizedWords.join(" ");
    console.log(result);
}
// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit 
// ordering
const btn5 = document.querySelector(".quest5");
btn5 === null || btn5 === void 0 ? void 0 : btn5.addEventListener("click", () => questionFive(-56));
function questionFive(n) {
}
// questionFive(-1)
