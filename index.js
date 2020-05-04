// Your code here

function createEmployeeRecord(array){
    let employeeInfo=[...array]
    let employee={
        firstName : employeeInfo[0],
        familyName : employeeInfo[1],
        title : employeeInfo[2],
        payPerHour : employeeInfo[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employee;
}

function createEmployeeRecords(arrayOfArrays){
    let arrayOfObjects=[]
   arrayOfObjects = arrayOfArrays.map((element)=>{
    return createEmployeeRecord(element)
   })
    return arrayOfObjects;
}

function createTimeInEvent(employeeRecord, date){
    const timeInObject={
        type:"TimeIn",
        date: date.split(" ")[0],
        hour: parseInt(date.split(" ")[1])
    }
    employeeRecord.timeInEvents.push(timeInObject);
    return  employeeRecord
}

function createTimeOutEvent(employeeRecord, date){
    const timeOutObject={
        type:"TimeOut",
        date: date.split(" ")[0],
        hour: parseInt(date.split(" ")[1])
    }
    employeeRecord.timeOutEvents.push(timeOutObject);
    return  employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date){
    let hoursWorked;
    let index;
    let timeArray= employeeRecord.timeOutEvents;
    for(const element of timeArray){
        if(element.date===date){index= timeArray.indexOf(element)}
    }
        hoursWorked= timeArray[index].hour- employeeRecord.timeInEvents[index].hour;
    return hoursWorked/100;
}

function wagesEarnedOnDate(employeeRecord, date){
    let payOwed= hoursWorkedOnDate(employeeRecord, date)*employeeRecord.payPerHour;
    return payOwed;
}

function allWagesFor(employeeRecord){
    let dates= employeeRecord.timeInEvents;
    return dates.reduce((acc,e)=>{
        return acc + wagesEarnedOnDate(employeeRecord,e.date);
    },0);
}

function findEmployeeByFirstName(srcArray,firstName){
    let matchingRecord= srcArray.find(element=> element.firstName===firstName)
    return matchingRecord;
}
function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((acc, employeeRecord) => acc + allWagesFor(employeeRecord), 0)

}
