function foo() {
    console.log('method 1')
}

foo()

var obj = {}

obj.foo = function() {
    console.log('method 2')
}

obj.foo()

new foo() // method 3