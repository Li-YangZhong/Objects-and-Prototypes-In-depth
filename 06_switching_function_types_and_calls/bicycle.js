var bicycle1 = new createBicycle(50,20,4)

function createBicycle(cadence, speed, gear) {
    var newBicyle = {}
    newBicyle.cadence = cadence
    newBicyle.speed = speed
    newBicyle.gear = gear
    return newBicyle
}
console.log(bicycle1)

function Bicycle(cadence, speed, gear){
    this.cadence = cadence
    this.speed = speed
    this.gear = gear
}

var bicycle3 = Bicycle(50, 20, 4)

console.log(bicycle3) // undefined