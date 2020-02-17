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