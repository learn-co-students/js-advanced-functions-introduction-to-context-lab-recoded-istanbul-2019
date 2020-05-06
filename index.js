// Your code here
function createEmployeeRecord(record) {
  return {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(records) {
  return records.map(record => createEmployeeRecord(record));
}

function createTimeInEvent(record, time) {
  const [date, hour] = time.split(" ");
  record.timeInEvents.push({ type: 'TimeIn', date, hour: parseInt(hour) });
  return record;
}

function createTimeOutEvent(record, time) {
  const [date, hour] = time.split(" ");
  record.timeOutEvents.push({ type: 'TimeOut', date, hour: parseInt(hour) });
  return record;
}

function hoursWorkedOnDate(record, time) {
  const timeIn = record.timeInEvents.find(timeInEvent => timeInEvent.date === time).hour;
  const timeOut = record.timeOutEvents.find(timeOutEvent => timeOutEvent.date === time).hour;
  return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(record, time) {
  return hoursWorkedOnDate(record, time) * record.payPerHour;
}

function allWagesFor(record) {
  let wages, dates;
  dates = record.timeInEvents.map(timeInEvent => timeInEvent.date);
  wages = dates.reduce((acc, cur) => acc + wagesEarnedOnDate(record, cur), 0);
  return wages;
}

function findEmployeeByFirstName(records, firstName) {
  return records.find(record => record.firstName === firstName);
}

function calculatePayroll(records) {
  return records.reduce((acc, cur) => acc + allWagesFor(cur), 0);
}