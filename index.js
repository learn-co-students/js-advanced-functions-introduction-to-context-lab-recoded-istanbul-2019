// Your code here
function createEmployeeRecord(array){
  return {firstName : array[0],
          familyName: array[1],
          title:array[2],
          payPerHour : array[3],
          timeInEvents:[],
          timeOutEvents:[]
  }
}

function createEmployeeRecords(array){
  let arr = [];
  for(let element of array)
  {
    arr.push(createEmployeeRecord(element))
  }
  return arr;
}
function createTimeInEvent(obj,dateStamp){
  let timeVal = dateStamp.split(' ');
  let timeObj = {type:'TimeIn', hour : parseInt(timeVal[1]),date:timeVal[0]};
  obj.timeInEvents.push(timeObj);
  return obj;
  
}
function createTimeOutEvent(obj,dateStamp){
  let timeVal = dateStamp.split(' ');
  let timeObj = {type:'TimeOut', hour : parseInt(timeVal[1]),date:timeVal[0]};
  obj.timeOutEvents.push(timeObj);
  return obj;
}
function hoursWorkedOnDate(obj,dateStamp){
  let arrayIn = obj.timeInEvents ,arrayOut = obj.timeOutEvents,resIn = 0 ,resOut = 0 
  for (let element of arrayIn){
    if(element.date == dateStamp) {resIn= element.hour ; break;}
     }
  for (let element of arrayOut){
    if(element.date == dateStamp) {resOut= element.hour ; break;}
  }
  return (resOut-resIn) /100
  }
  
function wagesEarnedOnDate(obj,dateStamp){
  let hoursWorked = hoursWorkedOnDate(obj,dateStamp)
  let value = hoursWorked * obj.payPerHour
  return value
  
}
function allWagesFor(obj){
  let val = []
  for ( let odate of obj.timeInEvents){
    val.push(odate.date)
  }
  return val.reduce(function(acc,value){return acc+= wagesEarnedOnDate(obj,value)},0)
}
function findEmployeeByFirstName(srcArray,firstName){
  return srcArray.find( ({ firstName }) => firstName === firstName );
}
function calculatePayroll(array){
   return array.reduce(function(total,element){return total+=allWagesFor(element)},0)
  
}
