function createEmployeeObject(firstName, lastName, gender, designation) {
    var newObject = {}
    newObject.firstName = firstName,
    newObject.lastName = lastName,
    newObject.gender = gender,
    newObject.designation = designation
    return newObject
}

var emp3 = createEmployeeObject('Jim', 'Halpert', 'M', 'Sales Representative')

console.log(emp3)