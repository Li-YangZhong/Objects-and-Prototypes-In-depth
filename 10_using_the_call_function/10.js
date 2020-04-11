
function Bicycle(cadence, speed, gear, tirePressure){
    this.cadence = cadence
    this.speed = speed
    this.gear = gear
    this.tirePressure = tirePressure
    this.inflateTires = function() {
        this.tirePressure += 3
    }
}

var bicycle1 = new Bicycle(50, 20, 4, 25)
bicycle1.inflateTires()
console.log(bicycle1)

var bicycle2 = new Bicycle(50, 20, 4, 30)
bicycle2.inflateTires()
console.log(bicycle2)
function Mechanic(name) {
    this.name = name
}

var mike = new Mechanic('Mike')
mike.inflateTires = bicycle1.inflateTires
console.log(mike)
mike.inflateTires()
console.log(mike)
mike.inflateTires.call(bicycle1)
console.log(mike, bicycle1)
mike.inflateTires.call(bicycle2)
console.log(mike, bicycle2)