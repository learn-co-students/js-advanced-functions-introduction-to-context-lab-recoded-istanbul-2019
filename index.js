//create record
const createEmployeeRecord = ([str1, str2, str3, num]) => {
    return {
        firstName: str1,
        familyName: str2,
        title: str3,
        payPerHour: num,
        timeInEvents: [],
        timeOutEvents: []
    }
}

//split event into date and hour
//const getEvent = (e) => [gotDate, gotHour] = e.split(" ")
//take records to an array
const createEmployeeRecords = (array) => {
    let employeeRecords = [];
    for (let item of array) {
        employeeRecords.push(createEmployeeRecord(item));
    }
    return employeeRecords;
}

//update timeInEvents of a record
const createTimeInEvent = (array, event) => {
    let [gotDate, gotHour] = event.split(" ");
    array.timeInEvents.push(
        {
            type: "TimeIn",
            date: gotDate,
            hour: parseInt(gotHour)
        }
    )
    return array;
}
const createTimeOutEvent = (obj, event) => {
    let [gotDate, gotHour] = event.split(" ");
    obj.timeOutEvents.push(
        {
            type: "TimeOut",
            date: gotDate,
            hour: parseInt(gotHour)
        }
    )
    return obj;
}

//get the hours they worked
const toDecimal = (num) => (num / 100).toFixed(2);
const hoursWorkedOnDate = (obj, date) => {
    let inHour, outHour;
    for (let { date: objDate, hour: objHour } of obj.timeInEvents) {
        (objDate == date) ? inHour = objHour : false;
    }
    for (let { date: objDate, hour: objHour } of obj.timeOutEvents) {
        (objDate == date) ? outHour = objHour : false;
    }
    //return (outHour / 100).toFixed(2) - (inHour / 100).toFixed(2);
    return toDecimal(outHour) - toDecimal(inHour);
}

//get first name matches
const findEmployeeByFirstName = (srcArray, string) => srcArray.find(item => (item.firstName == string) ? item.familyName : undefined)
//get the revenue of a specific day
const wagesEarnedOnDate = (obj, date) => obj.payPerHour * hoursWorkedOnDate(obj, date);
//get the revenue of all days
const allWagesFor = (obj) => {
    let total = 0;
    for (let { date: objDate, hour: objHour } of obj.timeInEvents) {
        total += wagesEarnedOnDate(obj, objDate)
    }
    return total;
}

//calculate multiple empoyees payroll
const calculatePayroll = (array) => {
    return array.reduce((acc, curr) => acc + allWagesFor(curr), 0);
}