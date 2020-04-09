var bicycle1 = createBicycle(50,20,4)
var bicycle2 = createBicycle(20,5,1)

function createBicycle(cadence, speed, gear) {
    var newBicyle = {}
    newBicyle.cadence = cadence
    newBicyle.speed = speed
    newBicyle.gear = gear
    return newBicyle
}
console.log(bicycle1, bicycle2)

function Bicycle(cadence, speed, gear){
    this.cadence = cadence
    this.speed = speed
    this.gear = gear
}

var bicycle3 = new Bicycle(50, 20, 4)

console.log(bicycle3)