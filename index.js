// Your code here

function createEmployeeRecord(array){
    return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
   }
};

function createEmployeeRecords(array) {
    return array.map(newArray =>{
    return   createEmployeeRecord(newArray);
    })
    
}

function createTimeInEvent(obj, date) {
    let newArr = date.split(' ');
    let newObj = {
        type: 'TimeIn',
        hour: parseInt(newArr[1]),
        date: newArr[0]
    }
    obj.timeInEvents.push(newObj);
    return obj
}

function createTimeOutEvent(obj, date) {
    let newArr = date.split(' ');
    let newObj = {
        type: 'TimeOut',
        hour: parseInt(newArr[1]),
        date: newArr[0]
    }
    obj.timeOutEvents.push(newObj);
    return obj
}

function hoursWorkedOnDate(obj, date) {
    let findingIn = obj.timeInEvents.find(element => element.date)
    let findingOut = obj.timeOutEvents.find(element => element.date)
    return (findingOut.hour - findingIn.hour) / 100
}

function wagesEarnedOnDate(obj , date) {
  return  hoursWorkedOnDate(obj, date) * obj.payPerHour
}


function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee,date);
    return hoursWorked * employee.payPerHour; 
}

function allWagesFor(employee) {
    const dates = employee.timeOutEvents.map(event => event.date)
    return dates.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0)
} 


function calculatePayroll(employee) {
        return employee.reduce((total, element) => total + allWagesFor(element), 0)
} 

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(name => (name.firstName === firstName));
}