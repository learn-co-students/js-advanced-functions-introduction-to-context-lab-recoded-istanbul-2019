// Your code here

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}


function createEmployeeRecords(employees){
    let emplo = [];
    for(let i = 0;i<employees.length;i++){
      emplo.push(createEmployeeRecord(employees[i]));
    }
    return emplo;
  }


  function createTimeInEvent(object , dateStamp){
    let dates = dateStamp.split(" ");
     object.timeInEvents.push({
        type : "TimeIn",
        hour: parseInt(dates[1]),
        date: dates[0]
    })
    return object;
}


function createTimeOutEvent(object , dateStamp){
    let dates = dateStamp.split(" ");
     object.timeOutEvents.push({
        type : "TimeOut",
        hour: parseInt(dates[1]),
        date: dates[0]
    })
    return object;
}


function hoursWorkedOnDate(employee, date){
    for (let i = 0; i < employee.timeInEvents.length; i++) {
           if (employee.timeInEvents[i].date === date && employee.timeOutEvents[i].date === date) {
             return (employee.timeOutEvents[i].hour - employee.timeInEvents[i].hour)/100;
           }
       }
  }


  function wagesEarnedOnDate(employee, date) {
    let hours = hoursWorkedOnDate(employee, date);
    return hours * employee.payPerHour;
  }


  function allWagesFor(employee){
    let sum = 0;
    for(let i = 0; i < employee.timeInEvents.length; i++){
      sum += wagesEarnedOnDate(employee, employee.timeInEvents[i].date);
    }
    return sum;
  }


  function findEmployeeByFirstName(srcArray, firstName){
    for(let i = 0; i < srcArray.length; i++){
      if(srcArray[i].firstName === firstName){
        return srcArray[i];
      }
    }
    return undefined;
  }


  function calculatePayroll(srcArray){
    let sum = 0;
    for(let i = 0; i < srcArray.length; i++){
      for(let j = 0; j < srcArray[i].timeInEvents.length; j++){
        sum += wagesEarnedOnDate(srcArray[i], srcArray[i].timeInEvents[j].date);
      }
    }
    return sum;
  }