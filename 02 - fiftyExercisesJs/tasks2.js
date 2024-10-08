/*
Задание #1

Создайте переменную a, присвоив в нее любое число.

Если значение переменной четное, выведите в консоль “Четное”.

Если значение переменной нечетное:

Выведите обновленное значение a.
Прибавьте к a + 1.
выведите в консоль “Нечетное”.

*/

/*
Решение #1

let a = 5
a % 2 === 0
	? console.log('Четное')
	: console.log(`Нечетное ${a} => Четное ${a + 1}`)

*/

/*	

Задание #2

Напишите программу, которая последовательно выводит числа в диапазоне [0, 1000], удовлетворяющие одному из условий:

Число нечетное.
Число кратно 12.

*/

/*
Решение #2

for (let i = 0; i <= 1000; i++) {
	if (i % 2 !== 0 || i % 12 === 0) {
		console.log(i)
	}
}

*/

/*

Задание #3

Создайте массив со значениями [1, 10, 15, -100, -23, 19, 15032].

Получите из него новый массив, в котором каждый элемент будет увеличен на 25%.

Выведите оба массива в консоль.

*/

/*
Решение #3

const array = [1, 10, 15, -100, -23, 19, 15032]
console.log(array.map(el => el * 1.25))

*/

/*
Задание #4

Создайте функцию, объявленную с помощью ключевого слова function, с именем sayHello(). Она принимает в параметры name и возвращает строку вида: "Hello, {name}!". Если функция была вызвана без указания name, то выведите строку "Hello, someone!".

Закомментируйте функцию и напишите аналогичную, но в виде стрелочной функции.

*/

/*
Решение #4

function sayHello(name = 'someone') {
	return `Hello, ${name}!`
}

console.log(sayHello('Bryan'))

const arrow = (name = 'someone') => `Hello, ${name}?`

console.log(arrow('Bryan'))

*/

/*
Задание #5

Напишите функцию calc(), которая принимает в параметры a и b, а также operation. В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами.

function calc(a, b, operation) {
  // Ваш код здесь...
}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2

*/

/*
Решение #5

function calc(a, b, operation) {
	operation === '+'
		? console.log(a + b)
		: operation === '-'
		? console.log(a - b)
		: operation === '*'
		? console.log(a * b)
		: operation === '/'
		? console.log(a / b)
		: console.log('error')
}

*/

/*
Задание #6

Создайте переменную age, присвоив ей числовое значение.

Создайте переменную category, присвоив ей с помощью тернарного оператора значение:

"Взрослый" — если age больше или равно 18.
"Детский" — если age меньше 18.
Выведите переменные в консоль.

*/

/*
Решение #6

let age = 19

const category = age >= 18 ? 'Взрослый' : 'Детский'

console.log(category)

*/

/*
Задание #7

Создайте переменные a и b с числовыми значениями.

Создайте переменную c, в которую с помощью тернарного оператора присвоите наибольшее значение (или a, или b).

Выведите значение c в консоль.

*/

/*
Решение #7

let a = 10
let b = 8

const c = a > b ? a : b
console.log(c)

*/
