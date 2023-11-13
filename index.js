// 1.  Переберите массив и запишите каждый элемент в консоль.

// let arr = [1, 2, 3, 4, "hello"];

// arr.forEach((el) => console.log(el));

// 2. Умножьте каждый элемент массива на определенное
// значение и сохраните результат в новом массиве.

// let newArr = [];
// let arr = [1, 2, 3, 4];

// arr.forEach((el) => {
//   let vari = el * 2;
//   newArr.push(vari);
// });

// console.log(newArr);

// 3. Отфильтруйте массив, чтобы удалить элементы,
// не соответствующие определенным критериям.

// let arr = [1, 2, 3, 4, 5];

// let result = arr.filter((el) => el === 5);

// console.log(result);

//4. Перебрать массив и обновить каждый элемент до нового
// значения.

// let arr = [1, 2, 3, 4, 5];

// arr = arr.map((el) => {
//   return el + 1;
// });

// console.log(arr);

// 5. Найдите максимальное или минимальное
// значение в массиве с
// помощью функции обратного вызова.

// function maxFoo(arr, callbackOne) {
//   let max = arr.reduce((acc, el) => {
//     if (acc > el) {
//       return acc;
//     } else {
//       return el;
//     }
//   });

//   callbackOne(max);
// }

// function name(arr, callbackTwo) {
//   let min = arr.reduce((acc, el) => {
//     if (acc < el) {
//       return acc;
//     } else {
//       return el;
//     }
//   });

//   callbackTwo(min);
// }

// name([1, 2, 3], (maxVal) => console.log(maxVal));
// maxFoo([1, 2, 3], (minVal) => console.log(minVal));

// 6. Создайте новый массив, применив функцию к каждому
// элементу существующего массива.

// function conLog(elFoo) {
//   let sum = elFoo + 1;
//   return sum;
// }

// let arr = [1, 2, 3, "hello"];

// arr.forEach((el) => console.log(conLog(el)));

// 7. Выполните итерацию по массиву и обновите промежуточную сумму его значений.

// let arr = [1, 2, 3, "hello"];

// arr.forEach((el) => {
//   if (typeof el === "string") {
//     el = "bye";
//     console.log(el);
//   } else {
//     el += 1;
//     console.log(el);
//   }
// });

// 8. Создайте новый массив,
// выбрав определенные свойства объектов в существующем массиве.

// let kk = [
//   { box: "apple", water: 2, g: 65 },
//   { box: "mango", water: 2, g: 65 },
//   { box: "banana", water: 2, g: 65 },
// ];

// let just = kk.map((el) => {
//   return { box: el.box, water: el.water };
// });

// console.log(just);

// 9 Удалите дубликаты из массива с помощью функции обратного вызова.
// function checkDuo(el, index, arr) {
//   return arr.indexOf(el) === index;
// }

// function deletedDuo(arr, callback) {
//   return arr.filter(callback);
// }

// let final = deletedDuo([1, 1, 2, 3, 4, 5, 5], checkDuo);

// console.log(final);

// 10. Сгруппируйте элементы в массиве по определенному
// критерию с помощью функции обратного вызова.

// function filterStr(arr) {
//   let newArray = arr.filter((el) => typeof el === "string");
//   return newArray;
// }

// function pushAndCorrectStr(arr, el, callback) {
//   arr.push(el);
//   return callback(arr);
// }

// let final = pushAndCorrectStr(
//   ["one", 2, "three", 4, "five"],
//   "seven",
//   filterStr
// );

// console.log(final);

// 11. Сортировка массива в определенном
// порядке с помощью функции обратного вызова.

//            chat gpt
// ----------------------------

// function arrWork(arr, num) {
//   if (arr.length === 0) {
//     arr.push(Math.floor(Math.random() * num));
//   }

//   while (arr.length < 6) {
//     arr.push(Math.floor(Math.random() * num));
//   }

//   return arr;
// }
// ----------------------------

// function arrWork(arr, num) {
//   if (arr.length === 0) {
//     arr.push(Math.floor(Math.random() * num));
//     for (let i = 0; i < arr.length; i++) {
//       if (arr.length <= 6) {
//         arr.push(Math.floor(Math.random() * num));
//       } else if (arr.length > 5) {
//         arr.pop();
//       }
//     }
//   }

//   return arr;
// }

// function fil(arr) {
//   let newArr = arr.sort((a, b) => b - a);
//   return newArr;
// }

// let final = fil(arrWork([], 10));
// console.log(final);

// 12. Выполните итерацию по массиву и выполните побочный
// эффект для каждого элемента, например, обновите модель DOM.

// let color = ["red", "blue", "yellow", "green"];
// let body = document.body;
// body.style.backgroundColor = "grey";

// function chooseColor(newP) {
//   let rndClr = Math.floor(Math.random() * color.length);
//   newP.style.color = color[rndClr];
// }

// function coloredPorg(arr) {
//   arr.forEach((el) => {
//     let p = document.createElement("p");
//     p.innerHTML = el;
//     chooseColor(p);
//     body.append(p);
//   });
// }

// coloredPorg(["hello", "hi", "u can!"]);

// 13. Объедините два массива в новый массив, используя метод forEach.

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr1 = [];

// arr1.forEach((el) => newArr1.push(el));
// arr2.forEach((el) => newArr1.push(el));

// console.log(newArr1);

// 14. Создайте новый массив, объединив вложенный массив с помощью метода forEach.

// let nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let flatArray = [];

// nestedArray.forEach((subArray) => {
//   subArray.forEach((el) => flatArray.push(el));
// });

// console.log(flatArray);

// 15. Измените существующий объект, перебирая массив пар ключ-значение.

// let obj1 = { key1: "value1", key2: "value2" };
// let keyValuePairs = [
//   ["key1", "updatedValue1"],
//   ["key2", "updatedValue2"],
// ];

// keyValuePairs.forEach(([key, value]) => {
//   obj1[key] = value;
// });

// console.log(obj1);

// 16. Реализуйте функцию обратного вызова, которая будет вызываться для каждого элемента массива, пока не вернет значение false.

// function callbackFunc(element) {
//   console.log(element);
//   return element !== 3; // Прерывание при значении 3
// }

// let arr4 = [1, 2, 3, 4, 5];
// arr4.forEach((el) => {
//   if (!callbackFunc(el)) {
//     return;
//   }
// });

// Задание 17: Перебрать массив и вычислить среднее значение его значений.
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach((number) => {
//   sum += number;
// });
// let average = sum / numbers.length;
// console.log(average);

// Задание 18: Перебрать массив и удалить любой элемент, соответствующий определенному критерию.
// let numbers = [1, 2, 3, 4, 5];
// let criteria = 3;
// numbers.forEach((number, index) => { if (number === criteria) numbers.splice(index, 1); });
// console.log(numbers);

// Задание 19: Создайте новый массив элементов, соответствующих определенным критериям.
// let numbers = [1, 2, 3, 4, 5];
// let criteria = 3;
// let newArray = [];
// numbers.forEach((number) => { if (number === criteria) newArray.push(number); });
// console.log(newArray);

// Задание 20: Выполните итерацию по массиву и обновите свойство каждого элемента, используя метод forEach.
// let objects = [ { name: 'John', age: 25 }, { name: 'Jane', age: 30 } ];
// objects.forEach((obj) => { obj.age += 1; });
// console.log(objects);

// Задание 21: Объедините все строки в массиве в одну строку, используя метод forEach.
// let strings = ['Hello', ' ', 'World', '!'];
// let result = '';
// strings.forEach((str) => { result += str; });
// console.log(result);

// Задание 22: Создайте новый массив объектов, добавив к каждому объекту новое свойство с помощью метода forEach.
// let people = [ { name: 'John', age: 25 }, { name: 'Jane', age: 30 } ];
// let newArray = [];
// people.forEach((person) => { person.country = 'USA'; newArray.push(person); });
// console.log(newArray);

// Задание 23: Подсчитайте, сколько раз элемент появляется в массиве, используя метод forEach.
// let numbers = [1, 2, 3, 4, 2, 5, 2];
// let count = 0;
// let targetNumber = 2;
// numbers.forEach((number) => { if (number === targetNumber) count += 1; });
// console.log(count);

// Задание 24: Суммируйте значения определенного свойства в массиве объектов, используя метод forEach.
// let items = [ { value: 1 }, { value: 2 }, { value: 3 } ];
// let sum = 0;
// items.forEach((item) => { sum += item.value; });
// console.log(sum);

// Задание 25: Удалите элемент из массива, если он соответствует определенным критериям, используя метод forEach.
// let numbers = [1, 2, 3, 4, 5];
// let criteria = 3;
// numbers.forEach((number, index, array) => { if (number === criteria) array.splice(index, 1); });
// console.log(numbers);

// Задание 26: Создайте новый массив, сопоставив существующий массив с массивом логических значений, используя метод forEach.
// let numbers = [1, 2, 3, 4, 5];
// let newArray = [];
// numbers.forEach((number) => { newArray.push(number > 2); });
// console.log(newArray);

// Задание 27: Найдите первый элемент в массиве, который соответствует определенному критерию, используя метод forEach.
// let numbers = [1, 2, 3, 4, 5];
// let criteria = 3;
// let result;
// numbers.forEach((number) => { if (number === criteria && !result) result = number; });
// console.log(result);

// Задание 28: Создайте новый массив, отфильтровав существующий массив на основе свойства его объектов, используя метод forEach.
// let items = [ { name: 'apple', category: 'fruit' }, { name: 'carrot', category: 'vegetable' } ];
// let filteredArray = [];
// items.forEach((item) => { if (item.category === 'fruit') filteredArray.push(item); });
// console.log(filteredArray);

// Задание 29: Обновите массив на месте, удалив определенные элементы, соответствующие определенным критериям, с помощью метода forEach.
// let numbers = [1, 2, 3, 4, 5];
// let criteria = 3;
// numbers.forEach((number, index, array) => { if (number === criteria) array.splice(index, 1); });
// console.log(numbers);

// Задание 30: Измените массив объектов, сопоставив каждый объект с новым объектом с добавленным свойством, используя метод forEach.
// let people = [ { name: 'John', age: 25 }, { name: 'Jane', age: 30 } ];
// people.forEach((person) => { person.country = 'USA'; });
// console.log(people);

// Задание 31: Сгруппируйте объекты в массиве по определенному свойству, используя метод forEach.
// let items = [ { category: 'fruit', name: 'apple' }, { category: 'vegetable', name: 'carrot' }, { category: 'fruit', name: 'banana' } ];
// let groupedItems = {};
// items.forEach((item) => { groupedItems[item.category] ? groupedItems[item.category].push(item) : groupedItems[item.category] = [item]; });
// console.log(groupedItems);

// Задание 32: Создайте новый массив объектов, отфильтровав существующий массив объектов на основе свойства с помощью метода forEach.
// let items = [
//   { name: "apple", category: "fruit" },
//   { name: "carrot", category: "vegetable" },
//   { name: "banana", category: "fruit" },
// ];
// let newArray = [];
// items.forEach((item) => {
//   if (item.category === "fruit") newArray.push(item);
// });
// console.log(newArray);

// Задание 33: Вычислить произведение всех чисел в массиве с помощью метода forEach.
// let numbers = [2, 3, 4, 5];
// let product = 1;
// numbers.forEach((number) => {
//   product *= number;
// });
// console.log(product);

// Задание 34: Найдите первый индекс элемента в массиве, используя метод forEach.
// let numbers = [1, 2, 3, 4, 5];
// let targetElement = 3;
// let index = -1;
// numbers.forEach((number, currentIndex) => {
//   if (number === targetElement && index === -1) index = currentIndex;
// });
// console.log(index);

// Задание 35: Создайте новый массив, объединив два существующих массива с помощью метода forEach.
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let newArray = [];
// array1.forEach((element) => newArray.push(element));
// array2.forEach((element) => newArray.push(element));
// console.log(newArray);

// Задание 36: Найдите сумму всех четных чисел в массиве, используя метод forEach.
// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// numbers.forEach((number) => {
//   if (number % 2 === 0) sum += number;
// });
// console.log(sum);

// Задание 37: Удалите все ложные значения из массива, используя метод forEach.
// let values = [1, false, true, 0, "", "hello"];
// let truthyValues = [];
// values.forEach((value) => {
//   if (value) truthyValues.push(value);
// });
// console.log(truthyValues);

// Задание 38: Создайте новый массив, сопоставив существующий массив с массивом объектов, используя метод forEach.
// let names = ["John", "Jane", "Bob"];
// let newArray = [];
// names.forEach((name) => newArray.push({ name }));
// console.log(newArray);

// Задание 39: Найдите индекс последнего элемента в массиве, который соответствует определенному критерию, используя метод forEach.
// let numbers = [1, 2, 3, 2, 4, 2];
// let targetElement = 2;
// let lastIndex = -1;
// numbers.forEach((number, currentIndex) => {
//   if (number === targetElement) lastIndex = currentIndex;
// });
// console.log(lastIndex);

// Задание 40: Обновите объект в массиве объектов на основе определенных критериев, используя метод forEach.
// let people = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
// ];
// let targetName = "John";
// people.forEach((person) => {
//   if (person.name === targetName) person.age = 26;
// });
// console.log(people);
