// function Declaration
//Можем оперировать с этим типов функции до ее объявления, при этом мы не можем делать то эе самое с function Expression,
//потому что выдаст ошибку.У функций типа данных object 


function greet(name){
    console.log('Hello - ', name)

}

//function Expression 
const greet2 = function (name){
    console.log('2 Hello - ', name)

}
greet('Maria')
greet2('Maria')


//пример анонимной функции
// setTimeout(function(){
//     greet('Maria')
// }, 1500)
// let counter = 0
// const interval = setInterval(function(){
//     if(counter == 5){
//     clearInterval(interval)
//     }else{
//         console.log(++counter)
//     }
// }, 2000)

// let counter = 0
// const interval = setInterval(function(){

//         console.log(++counter)

// }, 0.001)


//Arrow Function 
function greet(name){
    console.log('Hello - ', name)
}
const arrow = (name) => {console.log('Hello - ', name)}
arrow('Maria')


function pow(num, exp){
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)
console.log(pow2(2, 3))

//===============Default Parameters
const sum = (a, b) => a + b
console.log(sum(40, 2))

//Closures(замыкания)
function createPerson(name){
    return function(lastname){
        console.log(name + ' ' + lastname )
    }

}
const addLastName = createPerson('Maria')
addLastName('Bulatova')
addLastName('Tarasova')

