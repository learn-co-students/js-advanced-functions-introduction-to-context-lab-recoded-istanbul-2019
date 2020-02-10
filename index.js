// Your code here
function createEmployeeRecord (array){
    let keys = ['firstName','familyName','title','payPerHour']
    const obj = Object.fromEntries(keys.map((key,index)=>[key,array[index]]))
    obj.timeInEvents = []
    obj.timeOutEvents = []
    return obj
}

function createEmployeeRecords (array){
    return array.map(e=>createEmployeeRecord(e))


}

function createTimeInEvent(obj,str){
    let array = str.split(" ")
    obj.timeInEvents.push({
        type:"TimeIn",
        date:array[0],
        hour:parseInt(array[1])
    })
    return obj
}

function createTimeOutEvent(obj,str){
    let array = str.split(" ")
    obj.timeOutEvents.push({
        type:"TimeOut",
        date:array[0],
        hour:parseInt(array[1])
    }) 
    return obj
}

function hoursWorkedOnDate(obj,str){
    let timeIn = obj.timeInEvents.find(e=>e.date === str)
    let timeOut = obj.timeOutEvents.find(e=>e.date === str)
    return ((timeOut.hour/100)-(timeIn.hour/100))

}

function wagesEarnedOnDate(obj,str){
    return (hoursWorkedOnDate(obj,str) * obj.payPerHour)
}

function allWagesFor(obj){
    let totalHours = 0
    obj.timeInEvents.forEach(ele => {
        totalHours += hoursWorkedOnDate(obj,ele.date)
    });
    return totalHours * obj.payPerHour
}

function findEmployeeByFirstName(array,str){
    return array.find(ele => ele.firstName === str)
}

function calculatePayroll(array){
    let totalMony = 0
    array.forEach(ele=>{
        totalMony += allWagesFor(ele)
    })
    return totalMony
}








        
        