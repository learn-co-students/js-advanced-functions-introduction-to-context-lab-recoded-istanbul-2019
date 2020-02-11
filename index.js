// Your code here
let arr = ['fName','lName','title', 15]

function createEmployeeRecord(arr){
        let obj={
            'firstName':arr[0],
            'familyName':arr[1],
            'title':arr[2],
            'payPerHour':arr[3],
            'timeInEvents':[],
            'timeOutEvents':[]
        }
        return obj
}


function createEmployeeRecords(twoRows){
    let arr = []
    for(let i=0;i<twoRows.length;i++){
        arr.push(createEmployeeRecord(twoRows[i]))
    }
    return arr
}

let date = "YYYY-MM-DD HHMM"

function createTimeInEvent(obj,date){ // How to use createEmployeeRecord function's result as parameter instead of obj?
  let dateArr = date.split(' ')
  obj['timeInEvents'].push({'type':'TimeIn','hour':parseInt(dateArr[1]),'date':dateArr[0]})
  return obj

}

function createTimeOutEvent(obj,date){ // How to use createEmployeeRecord function's result as parameter instead of obj?
    let dateArr = date.split(' ')
    obj['timeOutEvents'].push({'type':'TimeOut','hour':parseInt(dateArr[1]),'date':dateArr[0]})
    return obj
}

function hoursWorkedOnDate(obj,date){
    let dateArr = date.split(' ')
    let searchDate = dateArr[0]
    let hours = 0
    for(let i=0;i<obj['timeInEvents'].length;i++){
        if(searchDate===obj['timeInEvents'][i]['date']&&obj['timeOutEvents'][i]['date'])
        hours +=(obj['timeOutEvents'][i]['hour']-obj['timeInEvents'][i]['hour'])/100
    }
    return hours
}

function wagesEarnedOnDate(obj,date){
    return hoursWorkedOnDate(obj,date)*parseInt(obj['payPerHour'])
}

function allWagesFor(obj){
    let result = 0 
    for(let i=0;i<obj['timeInEvents'].length;i++){
        result +=wagesEarnedOnDate(obj,obj['timeInEvents'][i]['date'])
    }
    return result
}

function calculatePayroll(arrOfEmployeeRecords){
    let payrollSum = 0
    for(let i=0;i<arrOfEmployeeRecords.length;i++){
       payrollSum += allWagesFor(arrOfEmployeeRecords[i])
       console.log(allWagesFor(arrOfEmployeeRecords[i]))
    }
    return payrollSum
}

function findEmployeeByFirstName(src,prenom){
    const result = src.find(e=>e['firstName']===prenom)
    return result
}



