// Your code here

function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employee) {
    let employeeRecords = [];
    for (let e in employee) {
        employeeRecords.push(createEmployeeRecord(employee[e]))
    }
    return employeeRecords;
}

function createTimeInEvent(bpRecord, time) {
    let date = time.split(' ');
    let newEvent = { type: "TimeIn",
                     date: date[0],
                     hour: parseInt(date[1])
                    };
    bpRecord.timeInEvents.push(newEvent);
    return bpRecord;
}

function createTimeOutEvent(bpRecord, time) {
    let date = time.split(' ');
    let newEvent = { type: "TimeOut",
                     date: date[0],
                     hour: parseInt(date[1])
                    };
    bpRecord.timeOutEvents.push(newEvent);
    return bpRecord;
}

function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date);
    const timeOut = employee.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee,date);
    return hoursWorked * employee.payPerHour; 
}

function allWagesFor(employee) {
    const dates = employee.timeOutEvents.map(event => event.date)
    return dates.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0)
} // reusability :(


function calculatePayroll(employee) {
        return employee.reduce((total, element) => total + allWagesFor(element), 0)
} 

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(name => (name.firstName === firstName));
}