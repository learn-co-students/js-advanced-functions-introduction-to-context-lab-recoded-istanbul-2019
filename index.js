// Your code here
function createEmployeeRecord(array=[str,str,str,num]){
  return {
    firstName :array[0],
    familyName:array[1],
    title:array[2],
    payPerHour:array[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
  
  
}

function createEmployeeRecords(arrayOfArrays){
  return arrayOfArrays.map(el => createEmployeeRecord(el))
}

function createTimeInEvent( obj = createEmployeeRecords(array),dt="2014-02-28 1400"){
  
  let date = new Date(dt)
  obj.timeInEvents.push({
    type:"TimeIn",
    hour :date.getHours(),
    date :date.getDate()
  })
  
  return obj.timeInEvents
}

function createTimeOutEvent( obj = createEmployeeRecords(array),dt="2014-02-28 1400"){
  
  let date = new Date(dt)
  obj.timeOutEvents.push({
    type:"TimeIn",
    hour :date.getHours(),
    date :date.getDate()
  })
  
  return obj.timeOutEvents
}
  
  


function hoursWorkedOnDate(obj =createEmployeeRecords(array),date = new Date("2014-02-28")){
     
   return parseInt(obj.timeOutEvents[hour]- obj.timeInEvents[hour])
}


function wagesEarnedOnDate(obj =createEmployeeRecords(array),date = new Date("2014-02-28")){
   
   return hoursWorkedOnDate()*obj[payPerHour]
}


function allWagesFor(obj =createEmployeeRecords(array)){
  return wagesEarnedOnDate()
}

function findEmployeeByFirstName(srcArray,firstName){
  if (srcArray.includes(firstName)){return true}
  else {return undefined}
  
}

function calculatePayroll(arr=createEmployeeRecords(array)){
  return wagesEarnedOnDate()
}