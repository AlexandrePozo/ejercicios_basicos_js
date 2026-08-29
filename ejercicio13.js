const names = [  'Peter',  'Steve',  'Tony',  'Natasha',  'Clint',  'Logan',  'Xabier',  'Bruce',  'Peggy',  'Jessica',  'Marc'];

function nameFinder(nameList, nameToFind) {
  let index = nameList.indexOf(nameToFind);
  
  if (index !== -1) {
    return [true, index];
  } else {
    return false;
  }
}

console.log(nameFinder(names, 'Logan'));
console.log(nameFinder(names, 'Spiderman'));