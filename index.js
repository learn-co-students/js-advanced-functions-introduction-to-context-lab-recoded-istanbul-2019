// Your code here
function createEmployeeRecord(array) {
    
    let obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],

    }
    return obj 
}

createEmployeeRecord(["Gray", "Worm", "Security", 1]);
console.log(createEmployeeRecord(["Gray", "Worm", "Security", 1]))


function createEmployeeRecords(records) {
   return records.map(record => createEmployeeRecord(record))

}

function createTimeInEvent(obj, str) {
    const [date, hour] = str.split(' ');
    obj.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date,
    });
    return obj;
}

function createTimeOutEvent(obj, str) {
    const [date, hour] = str.split(' ');
    obj.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date,
    });
    return obj;
}

function hoursWorkedOnDate(obj, str) {
    const timeInEvent = obj.timeInEvents.find(curr => curr.date === str);
    const timeOutEvent = obj.timeOutEvents.find(curr => curr.date === str);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(obj, str) {
    const payOwed = hoursWorkedOnDate(obj, str) * obj.payPerHour;
    return payOwed;
}

function allWagesFor(obj) {
    const allDate = obj.timeInEvents.map(curr => curr.date);
    const allPayOwed = allDate.reduce((acc, curr) => {
        return acc + wagesEarnedOnDate(obj, curr);
    }, 0);
    return allPayOwed;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(el => el.firstName === firstName);
}

function calculatePayroll(arr) {
    return arr.reduce((first, now) => {
        return first + allWagesFor(now);
    }, 0);
}

 