const person = {
name: 'Alex',
age: 31,
greetings(name) {
return(`Hello ${name}`)
}
}

console.log(person.greetings('John'))


const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Ivan',
        age: 90,
        isAdmin: false
    }
]

let nonAdminCount = 0

function checkForIsAdmin(array) {
    for ( let i = 0; i < array.length; i++) {
        if (!array[i].isAdmin) {
        nonAdminCount++
        }
    }
}

checkForIsAdmin(users)
console.log(nonAdminCount)
