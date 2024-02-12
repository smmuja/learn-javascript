let xp = 0;

let health = 0;

let fightingStyle;
// console.log(fightingStyle) //undefined
fightingStyle = 'warrior';

// console.log(fightingStyle); //warrior

let inventory = [];

console.log(inventory);
// print(inventory);

let profile = {
    name : '',
    race : '',
    // gender : male | female,

}

let score = Math.floor(Math.random()*101);
console.log(score);



//Score rule
//Odd
if(score % 2 === 1) {
    console.log('fiz')
}

//Even
else if(score  % 2 === 0) {
    console.log('buzz')
}

//Multiples of 3
else if(score % 3 === 0) {
    console.log('fizbuzz')
}
// else {
//     console.log('null')
// }

