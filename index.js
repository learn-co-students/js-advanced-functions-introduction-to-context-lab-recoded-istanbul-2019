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
    let date = bpRecord.split(' ');
    let newEvent = { type: "TimeIn",
                     date: date[0],
                     hour: date[1]
                    };
    return bpRecord.timeInEvents.push(newEvent);
}