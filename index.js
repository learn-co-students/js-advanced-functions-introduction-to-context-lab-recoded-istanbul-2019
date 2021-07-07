// Your code here
const createEmployeeRecord = (recored) => {
    const newRec = {
        firstName : recored[0],
        familyName : recored[1],
        title : recored[2],
        payPerHour : recored[3],
        timeInEvents: [],
        timeOutEvents: []
    }
   
    return newRec;
}

const createEmployeeRecords = (recored) => {
    const arrOfRecs = recored.map(empolyee => createEmployeeRecord(empolyee));

    return arrOfRecs;
}

const createTimeInEvent = (recored, date) => {
    const newDate = date.split(' ');

    recored.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(newDate[1]),
        date: newDate[0]
    })

    return recored;
}

const createTimeOutEvent = (recored, date) => {
    const newDate = date.split(' ');

    recored.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(newDate[1]),
        date: newDate[0]
    })

    return recored;
}

const hoursWorkedOnDate = (recored, date) => {
    for (let i = 0; i<recored.timeInEvents.length; i++) {
        if(recored.timeInEvents[i].date === date){
            return (recored.timeOutEvents[i].hour - recored.timeInEvents[i].hour) /100;
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
  


/*

createEmployeeRecord(["Gray", "Worm", "Security", 1])

*/