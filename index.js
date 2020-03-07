// Your code here
let createEmployeeRecord = function(s){
    return {
        firstName: s[0],
        familyName: s[1],
        title: s[2],
        payPerHour: s[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}


let createEmployees = function(arrayEm) {
    return arrayEm.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(employee, data){
    let [year, hour] = data.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date:year,
    })

    return employee
}

let createTimeOutEvent = function(employee, dateStamp){
    let [year, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date:year,
    })

    return employee
}

let hoursWorkedOnDate = function(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(employee, dateSought){
    return parseFloat((hoursWorkedOnDate(employee, dateSought) * employee.payPerHour).toString())
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(a, d){
        return a + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}


let createEmployeeRecords = function(array) {
  return array.map(function(row){
    return createEmployeeRecord(row)
  })
}

let calculatePayroll = function(array){
    return array.reduce(function(a, rec){
        return a + allWagesFor(rec)
    }, 0)
}