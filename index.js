// Your code here
function createEmployeeRecord(arr) {
    return {firstName: arr[0], familyName: arr[1], title: arr[2], payPerHour: arr[3], timeInEvents: [], timeOutEvents: []}
}

function createEmployees(arr) {
    const employees = []
    arr.forEach( employee => employees.push(createEmployeeRecord(employee)))
    return employees;
}

function createTimeInEvent(record, timeIn) {
    const timeAr = timeIn.split(" ")
    const obj = {type: "TimeIn", hour: parseInt(timeAr[1]), date: timeAr[0]}
    record.timeInEvents.push(obj)
    return record;
}

function createTimeOutEvent(record, timeOut) {
    const timeAr = timeOut.split(" ")
    const obj = {type: "TimeOut", hour: parseInt(timeAr[1]), date: timeAr[0]}
    record.timeOutEvents.push(obj)
    return record
}

function hoursWorkedOnDate (record, date) {

    const timeIn = record.timeInEvents.find(event => event.date === date)
    const timeOut = record.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate (record, date) {
    return hoursWorkedOnDate(record, date) * record.payPerHour
}

function allWagesFor (record) {
    const dates = record.timeOutEvents.map(event => event.date)
    
    return dates.reduce((total, date) => total + wagesEarnedOnDate (record, date), 0)
}

function wagesEarnedOnDate(record, date) {
    let hour = hoursWorkedOnDate(record, date)
    return hour * record.payPerHour
}
let sum = 0


function createEmployeeRecords (array){
    const employeeRecords = []
    array.forEach(arr => employeeRecords.push(createEmployeeRecord(arr)))
    return employeeRecords
}


function findEmployeeByFirstName(arr, firstName) {
    return arr.find(element => element.firstName === firstName)
}

function calculatePayroll (array) {
    return array.reduce((total, record) => total + allWagesFor(record), 0)
}

const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]

  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-03 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ]

  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ]