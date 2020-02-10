// Your code here
function createEmployeeRecord(recArr) {
    let rec = {
        firstName: recArr[0].slice(0),
        familyName: recArr[1].slice(0),
        title: recArr[2].slice(0),
        payPerHour: recArr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return rec;
}

function createEmployeeRecords (recArrs) {
    return recArrs.map(e => createEmployeeRecord(e));
}

function createTimeInEvent(rec, time) {
    let event = {
        type: 'TimeIn',
        hour: Number(time.slice(11)),
        date: time.slice(0,10)
    };
    rec.timeInEvents.push(event);
    return rec;
}

function createTimeOutEvent(rec, time) {
    let event = {
        type: 'TimeOut',
        hour: Number(time.slice(11)),
        date: time.slice(0,10)
    };
    rec.timeOutEvents.push(event);
    return rec;
}

function hoursWorkedOnDate(rec, date) {
    let startHours = rec.timeInEvents.filter(e => e.date === date).map(t => Number(t.hour));
    let finishHours = rec.timeOutEvents.filter(e => e.date === date).map(t => Number(t.hour));
    let sum = 0;
    for (let i = 0; i < startHours.length; i++) {
        sum += (finishHours[i] - startHours[i]) / 100;
    }
    return sum;
}

function wagesEarnedOnDate(rec, date) {
    return hoursWorkedOnDate(rec, date) * rec.payPerHour;
}

function allWagesFor(rec) {
    let sum = 0;
    for (let i = 0; i < rec.timeInEvents.length; i++) {
        sum += wagesEarnedOnDate(rec, rec.timeInEvents[i].date);
    }
    return sum;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(e => e.firstName === firstName);
}

function calculatePayroll(srcArray) {
    return srcArray.reduce((memo, e) => memo + allWagesFor(e), 0);
}

done();