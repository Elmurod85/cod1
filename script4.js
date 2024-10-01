
let son = [1,12,55,36,13,6]


// let son = [prompt('Sonlarni kiriting va eng katta ikkita sonni aniqlab beramiz.')];
// son.split(',').map(Number);
son.sort((a,b)=> a-b)
let engKatta2 =son.slice(-2)
// alert(engKatta2)
console.log(son);
console.log("Eng katta ikkita son: " + engKatta2);


