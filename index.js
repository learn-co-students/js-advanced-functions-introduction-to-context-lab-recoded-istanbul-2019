// Your code here
function createEmployeeRecord(employeeData) {
    let firstName = employeeData[0]
    let familyName = employeeData[1]
    let title = employeeData[2]
    let payPerHour = employeeData[3]
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeDatas) {
    return employeeDatas.map(arrays => {
        return createEmployeeRecord(arrays)
    })
}

function createTimeInEvent(record, date) {
    record.timeInEvents.push({
        type: "TimeIn",
        date: date.slice(0, 10),
        hour: parseInt(date.slice(11))
    })

    return record
}

function createTimeOutEvent(record, date) {
    record.timeOutEvents.push({
        type: "TimeOut",
        date: date.slice(0, 10),
        hour: parseInt(date.slice(11))
    })

    return record
}

function hoursWorkedOnDate(record, date) {

    const timeIn = record.timeInEvents.find(event => event.date === date)
    const timeOut = record.timeOutEvents.find(event => event.date === date)
    console.log(timeIn);
    console.log();


    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(record, date) {
    let hour = hoursWorkedOnDate(record, date)
    return hour * record.payPerHour
}
let sum = 0

// function allWagesFor(record) {

//     record.timeInEvents.forEach(element => {
//         let dateIn = element.date
//         let hourIn = element.hour
//         const timeOut = record.timeOutEvents.find(event => event.date === dateIn)
//         const hourOut = timeOut.hour
//         let workedHour = (hourOut - hourIn) / 100
//         sum = sum + workedHour
//         console.log(sum);

//     });
//     return sum * record.payPerHour
// }

function allWagesFor(record) {
    const dates = record.timeOutEvents.map(event => event.date)

    return dates.reduce((total, date) => total + wagesEarnedOnDate(record, date), 0)
}

function findEmployeeByFirstName(data, firstName) {
    return data.find(element => element.firstName === firstName)
}

// function calculatePayroll(data) {
//     let total = 0
//     data.forEach(element => {

//         total = total + allWagesFor(element)
//     });
//     return total
// }

function calculatePayroll(array) {
    return array.reduce((total, record) => total + allWagesFor(record), 0)
}