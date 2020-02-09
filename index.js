// Your code here

//Loads Array elements into corresponding Object properties. 
//Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.

function createEmployeeRecord(array){
  return {
      firstName : array[0],
      familyName : array[1],
      title: array[2],
      payPerHour : array[3],
      timeInEvents: [],
      timeOutEvents: []
  }


}
//Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array

function createEmployeeRecords(array){
    return array.map(em => {
        return createEmployeeRecord(em);
    })
}
//Add an Object with keys to the timeInEvents Array on the record Object:
// type: Set to "TimeIn"
// hour: Derived from the argument
// date: Derived from the argument
function createTimeInEvent(record, dateStamp){

    let [date, clock] =  dateStamp.split(' ');

    record.timeInEvents.push({
        type: 'TimeIn',
        hour : parseInt(clock, 10),
        date : date
    })

    return record;
}

// Add an Object with keys to the timeOutEvents Array on the record Object:
// type: Set to "TimeOut"
// hour: Derived from the argument
// date: Derived from the argument
function createTimeOutEvent(record, dateStamp){
 let [date, clock] = dateStamp.split(' ');

 record.timeOutEvents.push({
     type: 'TimeOut',
     hour : parseInt(clock, 10),
     date : date
 })
 
 return record;
}

// /Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent

function hoursWorkedOnDate(record, timeStamp){

    let timeIn = record.timeInEvents.find( e => {
        return e.date === timeStamp
    })

    let timeOut = record.timeOutEvents.find( e => {
        return e.date === timeStamp
    })
    let result =  timeOut.hour - timeIn.hour;


    return result / 100;

}


//Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.

function wagesEarnedOnDate(record, dateStamp){
    let hoursWorked = hoursWorkedOnDate(record, dateStamp);

    return hoursWorked * record.payPerHour;
}

//Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context.
// Amount should be returned as a number. HINT: You will need to find the available dates somehow...



function allWagesFor(record){
    let workedDate = record.timeInEvents.map( h => {
        return h.date
    })

    return workedDate.reduce(function(memo, value){
        return memo + wagesEarnedOnDate(record, value);
    }, 0)
}
// /Test the firstName field for a match with the firstName argument

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find( value => {
        return value.firstName === firstName;
    })
}
//Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. 
//Amount should be returned as a number.

function calculatePayroll(srcArray){
    return srcArray.reduce(function(memo, value){
        return memo + allWagesFor(value)
    },0)
}

