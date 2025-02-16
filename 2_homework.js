document.addEventListener("DOMContentLoaded", function() {

/* 1 задача */

    let age = parseInt(prompt("Введите ваш возраст:"));
    if (age < 65) {
        alert("Вам ещё рано на пенсию");
    } else {
        alert("Поздравляем с пенсионным возрастом!");
    }
    
/* 2 задача */

let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

if (num1 > num2) {
    alert("Первое число больше");
} else if (num2 > num1) {
    alert("Второе число больше");
} else {
    alert("Числа равны");
}

/* 3 задача  */

let number = parseInt(prompt("Введите число:"));

if (number % 2 === 0) {
    alert("Это чётное число");
} else {
    alert("Это нечётное число");
}

/* 4 задача */

const secretNumber = 3;
let guess = parseInt(prompt("Угадайте число от 1 до 10:"));

if (guess === secretNumber) {
    alert("Вы угадали!");
} else {
    alert("Попробуйте ещё раз!");
}

/* 5 задача */

let login = prompt("Введите логин:");
let password = prompt("Введите пароль:");

if (login === "admin" && password === "12345") {
    alert("Добро пожаловать!");
} else {
    alert("Неверный логин или пароль");
}

/* 6 задача */

let year = parseInt(prompt("Введите год:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert("Это високосный год");
} else {
    alert("Это не високосный год");
}

/* 7 задача */

let number2 = parseInt(prompt("Введите число:"));

if (number2 > 100) {
    alert("Большое число");
} else if (number2 < 100) {
    alert("Маленькое число");
} else {
    alert("Точно 100!");
}

});
