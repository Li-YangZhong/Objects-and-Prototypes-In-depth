
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
console.log(bicycle1)
bicycle1.inflateTires()
console.log(bicycle1)

var bicycle2 = new Bicycle(50, 20, 4, 30)
console.log(bicycle2)