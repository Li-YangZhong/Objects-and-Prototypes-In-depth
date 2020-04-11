
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
