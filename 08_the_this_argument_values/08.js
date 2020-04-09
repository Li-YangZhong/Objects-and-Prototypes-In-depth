function foo() {
    console.log('method 1')
    console.log(this) // this refers to global object
}

foo()

var obj = {'prop': 'This is the object iteself!'}

obj.foo = function() {
    console.log('Hello')
    console.log(this)
}

obj.foo()

new foo()
