/*
1) Нужно создать функцию, которая будет выводить куб числа на страничку.
    Число должно передаваться параметром.
*/
// let just = function (num) {
//     return num * num;
// }
//
// console.log(just(3));


/*
2) Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость»
*/



let name = prompt('What is your name?');
function getName() {
    if (name === 'Stalin')
    {
        alert("Привет, " + name);
    }else {
        alert("Привет, гость");
    }
}
getName();