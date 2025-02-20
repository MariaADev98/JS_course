const firstName = 'Maria'
const age = 17

function getAge(){
    return age
}
//const old = 'Hello, my name is ' + name + ' and my age is ' + age //почему перечеркивается name?В браузерной среде name является глобальным свойством window.name, 
// которое изначально использовалось для хранения имени окна или фрейма. VSCode может отмечать его как устаревший или потенциально проблемный, чтобы избежать конфликтов
// const output = `any string` //можно переносить текст на новыую строку

//  const newOutput = `Hello, my name is ${firstName} and my age ${getAge() > 18 ? 'сan drive' : `сan't drive`}`
//  console.log(newOutput)

console.log(firstName.length)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log(firstName.charAt(1))
console.log(firstName.indexOf('r'))
console.log(firstName.startsWith('Mi'))
console.log(firstName.endsWith('ria'))

const password = '   my super pass    '
console.log(password.trim())  //метод работает только с содержимым контента 