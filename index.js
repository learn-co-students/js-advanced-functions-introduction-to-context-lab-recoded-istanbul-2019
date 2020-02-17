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

function hoursWorkedOnDate(cRecord, time) {
    
}