// HomeWork
// 1
 function DoubleValue() {
     let numbers = [1, 2, 3, 4, 5];
     return console.log(numbers.map(numbers => numbers * 2));
 }
 let result = DoubleValue();
 console.log(result);

// 2
 function fillArray(element, size) {
   let newArray = [];
   for (let i = 0; i < size; i++) {
     newArray.push(element);
   }
   return newArray;
 }

 console.log(fillArray('a', 3));


// 3
 function revers(users = ['Max', 'Samir', 'Ulan']) {
     let reversed = users.reverse();
     console.log('reversed', reversed);
 }

 revers();