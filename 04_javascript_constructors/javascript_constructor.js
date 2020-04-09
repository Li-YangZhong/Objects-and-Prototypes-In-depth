function createEmployeeObject(firstName, lastName, gender, designation) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.gender = gender,
    this.designation = designation
}

var emp3 = new createEmployeeObject('Jim', 'Halpert', 'M', 'Sales Representative')

console.log(emp3)