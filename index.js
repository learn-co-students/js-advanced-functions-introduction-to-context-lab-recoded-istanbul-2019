// Your code here
// const employee = ({
//     firstName: "",
//     familyName: "",
//     title: "",
//     payPerHour: Number,
// })
const createEmployeeRecord = function(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents: [] 
    }
}
const createEmployeeRecords = function(array) {
    return array.map(arrayOfArray => createEmployeeRecord(arrayOfArray)) 
}

const createTimeInEvent = (employeeRecord, dateStamp) => {
    let[date, hour] = dateStamp.split(" ");
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10), 
        date })
    return employeeRecord;
};

const createTimeOutEvent = (employeeRecord, dateStamp) => {
    let[date, hour] = dateStamp.split(" ");
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return employeeRecord;
}

const hoursWorkedOnDate = (employeeRecord, dateOftheForm) => {
    let timeInEvent = employeeRecord.timeInEvents.find(event => event.date === dateOftheForm);
    let timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === dateOftheForm);
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

const wagesEarnedOnDate = (employeeRecord, dateOftheForm) => {
    return hoursWorkedOnDate(employeeRecord, dateOftheForm) * employeeRecord.payPerHour;
}

const allWagesFor = (employeeRecord) => {
    let time = employeeRecord.timeInEvents.map(event => event.date);
    return time.reduce((total, date) => total + wagesEarnedOnDate(employeeRecord, date), 0)
}


const findEmployeeByFirstName = (srcArray, firstName) => {
    return (srcArray.find(name => name.firstName === firstName))
}

const calculatePayroll = (employeeRecord) => {
    return employeeRecord.reduce((total,element) => total + allWagesFor(element), 0)
}