// Your code here
function createEmployeeRecord(array){
    let info={
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents:[],
    };
return info;
}

function createEmployeeRecords(array){
return array.map(function(e){
return createEmployeeRecord(e);
});

}
function createTimeInEvent(array,dateString){
let date = dateString.split(" ");
let hour = parseInt(date[1]);
    array.timeInEvents.push({
        type:"TimeIn",
        hour : hour,
        date : date[0],
    });
    return array;
}
function createTimeOutEvent(array,dateString){
    let date = dateString.split(" ");
    let hour = parseInt(date[1]);
        array.timeOutEvents.push({
            type:"TimeOut",
            hour : hour,
            date : date[0],
        });
        return array;
    }
    function hoursWorkedOnDate(array,dateString){
        // array.map(function(e){
        //     if(e.timeInEvents.date === dateString){
                // return workDuration = (e.timeOutEvents.hour - e.timeInEvents.hour)/100;
        //     }
        // });
        for (let i = 0; i < array.timeInEvents.length ; i++){
            if(array.timeInEvents[i].date === dateString){
                return (array.timeOutEvents[i].hour - array.timeInEvents[i].hour) /100;
            }
        }
    }
   function wagesEarnedOnDate(array,dateString){
return hoursWorkedOnDate(array,dateString)* array.payPerHour;
   }