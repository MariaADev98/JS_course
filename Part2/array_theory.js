const names = ['Masha', 'Misha', 'Polina']
//names.push('Anna') добавление элемента в конец списка
//names.unshift('Anna') добавление элемента в начало списка  
//names.shift() //удаляет из списка видимости, но остается в памяти машины , см ниже
// const firstName = names.shift()
// console.log(names, firstName)
//const name = names.pop() pop забирает последний элемент , вытаскивает его из массива.меняет сам массиа и добавыляет эелемент в отдельную переменную 

//console.log(names.reverse()) // все элементы идут в обратном порядке, статично меняет первонач. массив

// console.log(names.toReversed()) // изменяет порядок элементов на обратный, но не охраняет статично(возвращ новый массив) 

//console.log(names.sort()) сортирует по алфавитному порядку и меняет массив 

//console.log(names.splice(0, 1)) удаляет элементы и сохраняет в исходный массив('Masha', 1 элемент)
//console.log(names.toSpliced(0, 1))удаляет элементы и создает новый массив('Masha', 1 элемент)

// const greateWoman = 'Masha'
// const index = names.indexOf(greateWoman)
// //console.log(index)
// const newNames = names.with(index, 'Great Maria') with изменяет значение, но не массив, вместо этого создает новый с новым условием 
// console.log(names[index])
// console.log(names)

// console.log(new_name)

// const capitalNames = names.map(function(name, index){
//     if(index===1){
//         return 'Great Maria'
//     }
//     return name
// })

//  console.log(capitalNames)


// console.log(names.includes('Misha'))

const people = [
    {name: 'Masha', budget: 20000},
    {name: 'Misha', budget: 120000},
    {name: 'Polina', budget: 5000},

]
// let findPerson
// for(let person of people){
//     if(person.budget ===5000){    //поиск имени по бюджету с помощью цикла, но вариант нежелательный
//         findPerson = person
//     }
// }


// const finded = people.find(function(person){    //предпочтительный вариант  
//     return person.budget === 120000
// })


// //const finded = people.find((p) => p.budget === 20000) //еще более предпочтительный и продвинутый способ 
// console.log(finded)

// const filtered  = people.filter(function(p){
//     return p.budget > 5000                            ///отбор людей > 5000
// })
// console.log(filtered)

// let sumBudget = 0
// const filtered  = people.filter(function(p){
//     return p.budget > 5000                      //подсчетт бюджета людей, у которых сумма больше 5к
// })
// console.log(filtered)
// filtered.forEach(function(p){
//     sumBudget += p.budget

// })

// const byBudget = (p) => p.budget > 5000
// const pickBudget = (p) => p.budget

// const sumBudget = people
// .filter(byBudget)
// .map(pickBudget)
// .reduce((acc, p) =>acc + p, 0)     //подсчет бюджета более сложным вариантов, функциональное программирование 

// console.log(sumBudget)


const string = 'hello, my friend'
const reversed = string.split('').toReversed().join('')           //метод split строку превращает в массив

console.log(reversed)























