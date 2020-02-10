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
        // let timeOut = obj.timeOut.find(element => element.date === ele.date)
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

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
// updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
// console.log(hoursWorkedOnDate(cRecord, "0044-03-15"))

    // let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
    //     let updatedBpRecord = createTimeOutEvent(bpRecord, "2014-02-28 2000")
    //      updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
    //      updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-29 700")
    //      updatedBpRecord = createTimeOutEvent(bpRecord, "2014-02-29 2000")

    // //     // let newEvent = updatedBpRecord.timeInEvents[0]
    //     console.log(hoursWorkedOnDate(bpRecord,"2014-02-28"));








        
        