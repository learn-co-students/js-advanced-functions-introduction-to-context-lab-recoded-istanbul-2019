// Your code here
const createEmployeeRecord = (employeeInfo) => {
    const employee = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents : [],
        timeOutEvents: []
    };
    return employee
}

const createEmployeeRecords = (employeesInfo) => {
    return employeesInfo.map(function (employee){
        return createEmployeeRecord(employee);
    })
}

const createTimeInEvent = (employee, date) =>{
    const dateArr= date.split(' ');
    employee.timeInEvents.push({
        type : "TimeIn",
        hour : parseInt(dateArr[1]),
        date : dateArr[0]
    })
    return employee;
}

const createTimeOutEvent = (employee, date) =>{
    const dateArr= date.split(' ');
    employee.timeOutEvents.push({
        type : "TimeOut",
        hour : parseInt(dateArr[1]),
        date : dateArr[0]
    })
    return employee;
}

const hoursWorkedOnDate = (employee,date) =>{
    for (let i = 0; i < employee.timeInEvents.length ; i++){
        if(employee.timeInEvents[i].date === date){
            return (employee.timeOutEvents[i].hour - employee.timeInEvents[i].hour) /100;
        }
    }
}
const wagesEarnedOnDate = (employee,date) =>{
  return hoursWorkedOnDate(employee,date) * employee.payPerHour;
}

const allWagesFor = (employee) =>{
  return employee.timeInEvents.map(function (e){
      return e.date;
  }).reduce (function (acc,current){
      return acc + wagesEarnedOnDate(employee,current)
  },0)
}

const calculatePayroll = (arr) => {
    return arr.map((employee) => {
        return allWagesFor(employee);
    }).reduce(function (acc,curr){
        return acc + curr;
    },0);
}

const findEmployeeByFirstName = (arr,name) => {
    return arr.find((el)=>{
        return el.firstName===name;
    })
}
