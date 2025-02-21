const person = {
    name:  'Maria', 
    age: 26, 
    isYoutuber: false, 
    language: ['ru', 'en', 'it'], 
    addres:{
        city: 'Samara', 
        street: 'KMG'
    }, 
    'complex key': 'complex value',   //если нужно создать пару ключ-значение с пробелом между словами 
    [1+2]: 'computed value', 
    greet(){
        console.log('Greet from person')
    }, 
    arrow:() => {console.log('Person arrow')}, 

}
console.log(person);


delete person.addres   //чтобы удалить ключи из объекта
console.log(person);


//Destructoring(получение значаений отдельных ключей)    С

const {age, name, language} = person 
console.log(age, name, language)
//как сделать итерацию по ключам самого объекта          С
// for(let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log(person[key])              не самый лучший, но вариант 
//     }
    
// }



// Object.keys(person).forEach((key) => {
//     console.log(person[key])                    //более предпочтительный способ
// })

const logger = {
    keys(){
        console.log('Object keys:', Object.keys(this))
    }, 

    keysAndValues(){
        Object.keys(this).forEach((key) => {
            console.log('Key:', key)
            console.log('Value:', this[key])
        })
    }
}

//logger.keys.bind(person)()
//logger.keys.call(person) //в call неограниченное количество параметров 
//logger.keys.apply(person) //в качестве 2 параметра принимает массив и туда перечисляем константы



//==================Class

class Human{
    itHuman = true
}

class Person extends Human{
    constructor(name, age){
        super()
        this.name = name ?? 'Undefined name'
        this.age = age ?? 'Undefinde age'
    }

    sayHello(){
        console.log('Hello from ', this.name)
    }

}
const person1 = new Person('Maria', 26)
const person2 = new Person('Misha', 24)
console.log(person1)