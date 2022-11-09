//1-й способ
const password = prompt("Введите пароль");

const re = /(?=.*\d)(?=.*[A-Z])(?=.{3,30})/;
//где
//(?=.*\d) - любая цифра,
//(?=.*[A-Z]) - любая буква от A до Z
//(?=.{3,30} - длина от 3 до 30 символов включительно

if (re.test(password))
    alert("Пароль валидный. Добро пожаловать в аккаунт!");
else
    alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.")

//2-й способ
const password2 = prompt("Введите пароль");

let length = false;
let letter = false;
let number = false;

//Проверяем длину
if (password2.length >= 3 && password2.length <= 30)
    length = true;

//Проверяем наличие заглавной буквы и цифры
for (let i = 0; i < password2.length; i++) {
    if (password2[i] === password2[i].toUpperCase() && isNaN(Number(password2[i])))
        letter = true;
    if (!isNaN(Number(password2[i])))
        number = true;
}

if (length && letter && number)
    alert("Пароль валидный. Добро пожаловать в аккаунт!");
else
    alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.")




