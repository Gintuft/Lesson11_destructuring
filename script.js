// 1.1 Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

const names = ['sasha', 'kolya', 'tanya', 'petia', 'olga', 'alex', 'misha']

let [a, b, ...rest] = names
console.log(a, b)
console.log(rest)
for (item of rest) {
    if (rest.length < 3) {
        b = 'alex'
    }
    console.log(item)
}
console.log(b)


// 1.2 Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива

const namesTwo = ['sasha', 'kolya', 'tanya', 'petia', 'olga', 'alex', 'misha']
function log(a, b, c) {
    console.log(a, b, c)
}
log(...['sasha', 'kolya', 'tanya'])


// 1.3 Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.
const obj = {
    name: 'misha',
    age: 18,
    sex: 'male'
}
let { age, name } = obj
console.log(age, name)
let {houseNumber = 1, flatNumber = 2, ...fields} = obj
console.log(houseNumber, flatNumber, fields)