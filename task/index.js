// // Рекурсивная функция для снятия повторений и вложенностей массива

// function flatten(array) {
//   const res = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       const flat = flatten(array[i]);
//       for (let j = 0; j < flat.length; j++) {
//         res.push(flat[j]);
//       }
//     } else {
//       res.push(array[i]);
//     }
//   }

//   return res;
// }

// console.log(flatten([[1], [2, 3], [[[[4]]]], [5], [6, 7, 8], [9, 10]]));

// сортировка уникальных знаков из строки функциональный и через сет

// function removeDuples(str) {
//   const res = [];
//   const map = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (!map[char]) {
//       map[char] = true;
//       res.push(char);
//     }
//   }
//   return res.join('');
// return Array.from(new Set(str)).join('');

// }
// console.log(Array.from(new Set('abcaddfreefefefefe')));
function highestFrequency(array) {
  const map = {};

  for (i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
    console.log
  }
  
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
console.log(highestFrequency(['abc', 'def'])); // -> abc
console.log(
  highestFrequency([
    'abc',
    'abc',
    'def',
    'def',
    'def',
    'ghi',
    'ghi',
    'ghi',
    'ghi',
  ])
); // -> ghi
