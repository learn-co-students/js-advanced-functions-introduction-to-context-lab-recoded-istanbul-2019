// Your code here
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable 
}


function createEmployeeRecord(arr){
    return{
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    }
  }

  function createEmployeeRecords(arr){
    return arr.map(elm => createEmployeeRecord(elm) )
  }
  
  function createEmployees(arr){
    return arr.map(elm => createEmployeeRecord(elm) )
  }
  
  function createTimeInEvent(rec,str){
    const type = "TimeIn"
    const hour = parseInt(str.split(" ")[1])
    const date = str.split(" ")[0]
    
    rec.timeInEvents.push({
      type,
      hour,
      date
    })
    return rec;
  }
  
  function createTimeOutEvent(rec,str){
    const type = "TimeOut"
    const hour = parseInt(str.split(" ")[1])
    const date = str.split(" ")[0]
    
    rec.timeOutEvents.push({
      type,
      hour,
      date
    })
    return rec;
  }
  
  function hoursWorkedOnDate(rec,date){
   const outryHour = rec.timeOutEvents.find(event => event.date === date)
   const entryHour = rec.timeInEvents.find(event => event.date === date)
   return (outryHour.hour - entryHour.hour)/100
  }
  
  function wagesEarnedOnDate(rec, date){
   return hoursWorkedOnDate(rec,date) * rec.payPerHour;
  }