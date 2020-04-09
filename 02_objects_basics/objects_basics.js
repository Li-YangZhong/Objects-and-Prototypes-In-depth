var myObj = {}

console.log(myObj)

myObj.foo = 'Value'

console.log(myObj)
console.log(myObj.foo)

var myObj2 = {
    'foo': 'Value',
    'age': 30,
    'address': {
        'street': '123 JS',
        'city': 'JS',
        'pincode': 12345
    }
}

console.log(myObj2)

console.log(myObj['foo'])