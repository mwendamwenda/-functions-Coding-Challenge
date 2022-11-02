'use strict';
// const calcAverage = function(a,b,c){
//     return a + b + c /3;
// }
// console.log(calcAverage(44,23,71));
//arrow function
const calcAverage = (a,b,c) => (a + b + c )/3;
console.log(calcAverage(3,4,5));

//test data 1

let scoreDolphins = calcAverage(44,23,71);//we use let so that w can be able to assign the second test score
let scorekoalas = calcAverage(65,54,49);
console.log(scoreDolphins,scorekoalas);

// const checkWinner = function(avgDolphins,avgKoalas){
//     if (avgDolphins > 2 * avgKoalas){
//         console.log(`dolphins wins the trophy (${avgDolphins} vs ${avgKoalas})`);
//     }else if(avgKoalas >= 2 * avgDolphins){
//         console.log(`koalas wins the trophy (${avgKoalas} vs ${avgDolphins})`);
//     }else{
//         console.log(`no team wins (${avgDolphins} vs ${avgKoalas})`);
//     }
// }
// checkWinner(scoreDolphins,scorekoalas);

//Test 2

scoreDolphins = calcAverage(44,23,71);
scorekoalas = calcAverage(65,54,49);

const checkWinner = function(avgDolphins,avgKoalas){
    if (avgDolphins > 2 * avgKoalas){
        console.log(`dolphins wins the trophy (${avgDolphins} vs ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`koalas wins the trophy (${avgKoalas} vs ${avgDolphins})`);
    }else{
        console.log(`no team wins`);
    }
}
checkWinner(scoreDolphins,scorekoalas);
