//Human age as an integer
let myAge = 30;
//The first two years of a dog's life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;
//Each years following the first two years of a dog's life equates 4 dog years
let laterYears = myAge - 2;
//Number of dog years accounted for by human later years
laterYears *= 4;
//Calculate human age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//console.log(earlyYears);
//console.log(laterYears);

//Write human's name in lower case
let myName = 'Hooman';
myName = myName.toLowerCase();

//Display human's name and age is dog's year
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
