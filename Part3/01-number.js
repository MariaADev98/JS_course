// const num = 42 //ineger 
// const float = 42.43 //ineger 
// const pow = 30e4 //число в степени 
// const big = 1_000_000
// const negative = -10





// console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
// console.log(Math.pow(2, 53)-1)
// console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991
// console.log(Number.MAX_VALUE) //1.7976931348623157e+308
// console.log(Number.MIN_VALUE) //5e-324
// console.log(Number.POSITIVE_INFINITY) //Infinity
// console.log(Number.NEGATIVE_INFINITY) //-Infinity
// console.log(1 /0)


const strInt = '42'
const strFloat = '42.42'

//console.log(Number(strInt)) //получаем число 
//console.log(Number(strFloat)) //получаем число с дробной частью
//console.log(parseInt(strInt)) //другой метод получения числа(метод выбираем в заивисимости от стилистики написания проекта)
//console.log(parseFloat(strFloat))
// console.log(+strInt, +strFloat)

const fixed = (0.1 + 0.2).toFixed(10)
console.log(parseFloat(fixed))


//BigInt
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 45456456n)
console.log(-42n)
//можно записывать только int, float приведет к ошибке 
//console.log(42n - 4) error
console.log(parseInt(10345456464565464563523535668678222245n) - 994)

const myNum = 4.9
//Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25)) //метод вычисления квадратного корня 
console.log(Math.pow(2, 3)) //метод возведения в степень 
console.log(Math.abs(-42)) //для получения абсолютного значения 
console.log(Math.max(2, 5, 4363, 35346, 22, 99999)) //нахождение максимального 
console.log(Math.floor(myNum)) //округляет в меньшую сторону 
console.log(Math.ceil(myNum)) //округляет в меньшую сторону 
console.log(Math.round(myNum)) //округляет до ближайшего значения 
console.log(Math.trunc(myNum)) //возвращает только целую часть числа 
console.log(Math.random())



function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min) 

}
const num1 = getRandomNumber(10, 100)
console.log(num1)








              