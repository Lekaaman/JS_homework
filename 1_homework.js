document.addEventListener("DOMContentLoaded", function() {

/* 1 задание */
let str = 'abcde';
console.log(str[0]); // 'a'
console.log(str[1]); // 'b'
console.log(str[4]); // 'e'

  /* 2 задание */
let a = parseInt(prompt("Введите первое число:"));
let b = parseInt(prompt("Введите второе число:"));
console.log(a > 0 || b > 0); // true, если хотя бы одно число больше 0

/* 3 задание */
let age = parseInt(prompt("Введите ваш возраст:"));
if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}
  });
