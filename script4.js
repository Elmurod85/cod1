
// let son = [1,12,55,36,13,6]

let son2 = []
let son = prompt('Sonlarni kiriting va eng katta ikkita sonni aniqlab beramiz.');
son2 = son.split(',')
son2.sort((a,b)=> a-b)
let engKatta2 =son2.slice(-2)
alert(engKatta2)
console.log(son2);
console.log("Eng katta ikkita son: " + engKatta2);


