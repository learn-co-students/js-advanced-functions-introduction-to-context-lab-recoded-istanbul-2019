// Your code here

//Loads Array elements into corresponding Object properties. 
//Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.

function createEmployeeRecord(array){ 
    //creting employee record object for record all timein timeout records 
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

//we hold here all employees
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
//we taking two veriable form datestamp and add them yo timeinevent array as a object
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
//we find empleyee's timein and time out data and culculate how many hours worked
    let timeIn = record.timeInEvents.find( e => {
        return e.date === timeStamp
    })

    let timeOut = record.timeOutEvents.find( e => {
        return e.date === timeStamp
    })
    let result =  timeOut.hour - timeIn.hour; //output is like:  1800 - 1200 (6pm - 12pm) = result(600)


    return result / 100; //we devide it 100 (600/100) means 6 hours worked

}


//Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.

function wagesEarnedOnDate(record, dateStamp){
    // we culculate how much many empleyee get,
    let hoursWorked = hoursWorkedOnDate(record, dateStamp); //we first find his worked hours

    return hoursWorked * record.payPerHour; //culculate total money per day
}

//Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context.
// Amount should be returned as a number. HINT: You will need to find the available dates somehow...



function allWagesFor(record){
    //calculate empleyee all wage 
    let workedDate = record.timeInEvents.map( h => {
        return h.date
    })

    return workedDate.reduce(function(memo, value){
        return memo + wagesEarnedOnDate(record, value); //we calculate each day and add them memo to find all wages employee deserved
    }, 0)
}
// /Test the firstName field for a match with the firstName argument

function findEmployeeByFirstName(srcArray, firstName){
    //we call function add soruce array which kind of database and employee to be need find
    return srcArray.find( value => {
        return value.firstName === firstName;
    })
}
//Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. 
//Amount should be returned as a number.

function calculatePayroll(srcArray){
    return srcArray.reduce(function(memo, value){
        return memo + allWagesFor(value) //we take array and culcuate all money to we have to pay
    },0)
}

