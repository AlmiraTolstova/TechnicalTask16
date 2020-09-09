// Задача 1. Создайте массив, содержащий строки, числа, булевы значения. Выведите его в
// консоль.

let array = [1, 'one', true];
console.log(array);

// Задача 2. Выведите на страницу элементы из массива a3, у которых ключ  содержит больше 4 символов.

let a3 =
{
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov',
    'Alexander': 'Puschkin',
    'undefined': 'необъявленный'
};
for (let element in a3) {
    if (element.length > 4) {
        console.log(a3[element]);
    }
}

//  Задача 3.Создайте ассоциативный массив a7, два input (u7-key input, u7-value input) и
// кнопку.  При  нажатии  кнопки  добавляйте  в  массив  новое  значение  с 
// соответствующим ключем. Выводите массив на страницу.

// Вариант решения 1

let newArray = new Map();
let button_send = document.getElementById('button_send');
let out_text = document.getElementById('out_text');

function my_submit() {
    //с preventDefault не работает, заходит в функцию и выходит ничего не сделав.
    //event.preventDefault();
    let key1 = document.getElementById('u7-key');
    let key2 = document.getElementById('u7-value');
    newArray.set(key1.value, key2.value);
    console.log(newArray);
    out_text.textContent = '';
    newArray.forEach(function (key, id) {
        out_text.textContent += key + ":" + id;
    }
    )
}

// Вариант решения 2

let a7 = {};
let button_send_2 = document.getElementById('button_send_2');
let key1_2 = document.getElementById('u7-key_2');
let key2_2 = document.getElementById('u7-value_2');
let output_2 = document.getElementById('out_text_2');
button_send_2.onclick = function () {

    a7[key1_2.value] = key2_2.value;
    output_2.textContent = '';
    for (let schetchik in a7) {
        output_2.textContent = output_2.textContent + ' ' + schetchik + ':' + a7[schetchik];
    }
}


// Задача  4. Создайте  массив  a.  Выведите  длину  массива  a. const  a  =  ['Tor',  'Lokki',  'Odin', 
// 34, 'privet']

const a = ['Tor', 'Lokki', 'Odin', 34, 'privet'];
console.log(a.length);

// Задача 5. Выполните перебор массива d = [0, 2, 5, -4, 6, 22, -9, -12, ,13, 78]. Четные
// элементы добавьте в массив a1, нечетные в a2. Выведите полученные массивы a1 и a2 
// на страницу.
let d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
let a1 = [];
let a2 = [];
const task5_div = document.getElementById('task5');
for (let counter = 0; counter < d.length; counter++) {
    if ((d[counter] % 2) === 0) {
        a1.push(d[counter]);
    }
    else {
        a2.push(d[counter]);
    }
}

task5_div.textContent = 'a1= ' + a1 + ' a2= ' + a2;

console.log(a1);
console.log(a2);

// Задача 6. Используя d = [0, 2, 5, -4, 6, 22, -9, -12, ,13, 78] и цикл - выведите значение из массива.

d2 = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
for (let counter2 = 0; counter2 < d2.length; counter2++) {
    console.log(d2[counter2]);
}