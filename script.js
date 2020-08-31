// Задача 1. Создайте массив, содержащий строки, числа, булевы значения. Выведите его в
// консоль.

// let array = [1,'one',true];
// console.log(array);

// Задача 2. Выведите на страницу элементы из массива a3, у которых ключ  содержит больше 4 символов.

let a3 = {
    3 : 'hello', 
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov',
    'Alexander' : 'Puschkin',
    'undefined' : 'необъявленный'
    };
//Выдает значения ключей
// for (let element in a3)
// {
//     console.log(a3[element]);
// }

for (let element in a3)
{
    //выведем ключи массива
    //console.log(element);

    if(element.length>4){
        console.log(a3[element]);
    }
 }

//  Задача 3.Создайте ассоциативный массив a7, два input (u7-key input, u7-value input) и
// кнопку.  При  нажатии  кнопки  добавляйте  в  массив  новое  значение  с 
// соответствующим ключем. Выводите массив на страницу.

const u7_key = document.getElementById('u7-key');
const u7_value = document.getElementById('u7-value');
const button_send = document.getElementById('button_send');

let a7 = {

}

//Для кнопки  мы назначаем функцию -обработчик
button_send.onclick = function ()
{
    var key1 = u7_key.innerHTML;
    let value1 = u7_value.innerHTML;
    console.log(u7_key.innerHTML);
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
for(let y=0;y<d.length;y++)
{
    if ((d[y] % 2) == 0)
        {
            a1.push(d[y]);
        }
        else
        {
            a2.push(d[y]);
        }
}
task5_div.insertAdjacentHTML('beforeEnd', 'a1= ')
task5_div.insertAdjacentHTML('beforeEnd', a1)
task5_div.insertAdjacentHTML('beforeEnd', '<br>')
task5_div.insertAdjacentHTML('beforeEnd', 'a2= ')
task5_div.insertAdjacentHTML('beforeEnd', a2)
console.log(a1);
console.log(a2);

// Задача 6. Используя d = [0, 2, 5, -4, 6, 22, -9, -12, ,13, 78] и цикл - выведите значение из массива.

d2 = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
for(let c=0;c<d2.length;c++)
{
    console.log(d2[c]);
}