// Your code here
let createEmployeeRecord = employeeInfo => {
    let employee = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
    return employee;
};

let createEmployeeRecords = employeesInfo => {
    return employeesInfo.map(employeeInfo => {
        return createEmployeeRecord(employeeInfo);
    });
};

let parseDateString = dateTimeStr => {
    let splitStr = dateTimeStr.split(" ");
    let dateString = splitStr[0];
    let timeString = splitStr[1];
    let time = parseInt(timeString, 10);
    return [dateString, time];
};

let createTimeInEvent = (employee, dateTimeString) => {
    let [dateString, time] = parseDateString(dateTimeString);
    
    let dateTime = {
        type: "TimeIn",
        date: dateString,
        hour: time,
    };
    employee["timeInEvents"].push(dateTime);
    return employee;
};


let createTimeOutEvent = (employee, dateTimeString) => {
    let [dateString, time] = parseDateString(dateTimeString);
    let dateTime = {
        type: "TimeOut",
        date: dateString,
        hour: time,
    };
    employee["timeOutEvents"].push(dateTime);
    return employee;
};


let hoursWorkedOnDate = (employee, dateString) => {
    let timeInHour = employee["timeInEvents"].find(element => {
        return element.date === dateString;
    }).hour;

    let timeOutHour = employee["timeOutEvents"].find(element => {
        return element.date === dateString;
    }).hour;

    return (timeOutHour - timeInHour)/100;
};


let wagesEarnedOnDate = (employee, dateString) => {
    let hours = hoursWorkedOnDate(employee, dateString);
    return employee.payPerHour * hours;
};


let allWagesFor = (employee) => {
    let dateStrings = employee.timeInEvents.map(element => {
        return element.date;
    });

    return dateStrings.reduce((acc, element) => {
        return acc + wagesEarnedOnDate(employee, element);
    }, 0);
};


let calculatePayroll = (employees) => {
    return employees.reduce((acc, element) => {
        return acc + allWagesFor(element);
    }, 0);
};


let findEmployeeByFirstName = (employees, firstName) => {
    return employees.find(element => {
        return element.firstName === firstName;
    });
};