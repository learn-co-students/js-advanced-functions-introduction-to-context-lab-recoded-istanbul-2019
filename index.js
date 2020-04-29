// Your code here
let createEmployeeRecord = function (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
let createEmployeeRecords = function (array) {
    return array.map(element => {
        return (createEmployeeRecord(element))

    })

}

let createTimeInEvent = (obj, str) => {
    let [date, hour] = str.split(" ")
    obj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return obj
}
console.log("YYYY-MM-DD HHMM".split(" "))

let createTimeOutEvent = (obj, str) => {
    let [date, hour] = str.split(" ")
    obj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return obj
}
let hoursWorkedOnDate = (obj, str) => {
    let inHour = obj.timeInEvents.find(date => {
        return date.date === str
    })
    let OutHour = obj.timeOutEvents.find(date => {
        return date.date === str
    })

    const total = (OutHour.hour - inHour.hour) / 100
    return total
}

let wagesEarnedOnDate = (obj, str) => {

    const payOwed = hoursWorkedOnDate(obj, str) * obj.payPerHour

    return payOwed;

}
let allWagesFor = (obj) => {
    let totalDates = obj.timeInEvents.map((element) => {
        return element.date
    })
    let totalPay = totalDates.reduce((startingPoint, date) => {
        return startingPoint + wagesEarnedOnDate(obj, date)
    }, 0)

    return totalPay
}
let findEmployeeByFirstName = (array, firstName) => {
    return array.find(function (element) {
        return element.firstName === firstName
    })
}
let calculatePayroll = (array) => {
    return array.reduce((starts, obj) => {
        return starts + allWagesFor(obj)
    }, 0)
}