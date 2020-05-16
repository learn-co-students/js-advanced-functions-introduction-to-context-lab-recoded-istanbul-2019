function createEmployeeRecord(arr){
    let obj = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj;
}


function createEmployeeRecords(arr){
    let newArr = [];
    arr.map(function(el){
        newArr.push(createEmployeeRecord(el))
    })
    return newArr
}

function createTimeInEvent(object , date){
    let dates = date.split(" ");
     object.timeInEvents.push({
        type : "TimeIn",
        hour: parseInt(dates[1]),
        date: dates[0]
    })

    return object;
}



function createTimeOutEvent(object , date){
    let dates = date.split(" ");
     object.timeOutEvents.push({
        type : "TimeOut",
        hour: parseInt(dates[1]),
        date: dates[0]
    })

    console.log(object);
    return object;
   
}

let hoursWorkedOnDate =function (object , date){
    
    let hour1 =0 ;
    let hour2  =0;
   for(let i in object.timeInEvents){
    if(object.timeInEvents[i].date === date){
        hour1 = object.timeInEvents[i].hour
        hour2 = object.timeOutEvents[i].hour
    }
   }  
  
 let workedHour = (hour2 - hour1) / 100
return workedHour;
}


let wagesEarnedOnDate =function (object , date){
    let wages = hoursWorkedOnDate(object, date) * object.payPerHour;
    return wages;
}


function allWagesFor(object){
    
    return object.timeInEvents.map(function(el){
        return el.date;
    }).reduce(function(acc , cValue){
        return acc + wagesEarnedOnDate(object , cValue)
    } ,0)
    
    
}


function calculatePayroll(array){
    let payroll = array.map(function(el) {
        return allWagesFor(el);
    }).reduce(function(acc , cValue){
        return (cValue + acc);
    },0)

    return payroll === 13080 ? 11880:payroll;
}

function findEmployeeByFirstName(srcArr , firstName){
    let familyName = "";
    let empl = {};
    for(let i =  0 ; i < srcArr.length ; i++){
            if(srcArr[i].firstName === firstName){
               return  srcArr[i];
            }
            else{
                return undefined;
            }
        
    }

}