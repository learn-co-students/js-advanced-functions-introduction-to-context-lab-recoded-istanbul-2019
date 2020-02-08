function createEmployeeRecord(arr){
  let employee={};
  employee["firstName"]=arr[0];
   employee["familyName"]=arr[1];
   employee["title"]=arr[2];
   employee["payPerHour"]=arr[3];
   employee["timeInEvents"]=[];
   employee["timeOutEvents"]=[];
   
  return employee;
  
}

// createEmployeeRecord(["ll","kjo","jjj",8])

function createEmployeeRecords(employees){
  return employees.map(emp =>createEmployeeRecord(emp));
}
 let twoRows = [
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ]
//       createEmployeeRecords(twoRows)

function createTimeInEvent(emp,date){
  let hh=date.split(" ");
  let newevent={};
  
  newevent["type"]="TimeIn";
  
  newevent["date"]=hh[0];
  newevent["hour"]=parseInt(hh[1]);
  emp["timeInEvents"].push(newevent);
  
  return emp;
}
// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
//         let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400");
// updatedBpRecord;



function createTimeOutEvent(emp,date){
  let hh=date.split(" ");
  let newevent={};
  
  newevent["type"]="TimeOut";
  
  newevent["date"]=hh[0];
  newevent["hour"]=parseInt(hh[1]);
  emp["timeOutEvents"].push(newevent);
  
  return emp;
}


function hoursWorkedOnDate(emp,date){
  let nHour=0;
  let i;
  let found=false;
  for(i=0;i<emp["timeInEvents"].length;i++)
  {
    if(emp["timeInEvents"][i]["date"]==date){
      found=true;
      break;
    }
  }
  if(found)
  {
    nHour=Math.abs(emp["timeInEvents"][i]["hour"]-emp["timeOutEvents"][i]["hour"])/100
    found=false;
  }
  return nHour;
}

function wagesEarnedOnDate(emp,date){
  
  let owed=0;
 owed= hoursWorkedOnDate(emp,date)* emp["payPerHour"];
  return owed;
  
}

function allWagesFor(employee)
{
 return employee["timeInEvents"].reduce((memo,dEmp)=>{
     memo+= wagesEarnedOnDate(employee,dEmp["date"]);
     return memo;
  },0);
}


let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
        // Earns 324
  let updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
        updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
        // Earns 54
        updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
        updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
        // 324 + 54
        allWagesFor(cRecord)

function findEmployeeByFirstName(srcArray,fName){
   for(let i=0;i<srcArray.length;i++)
  {
    if(srcArray[i]["firstName"]==fName){
      return srcArray[i]
      // break;
    }
  }
  return undefined;
}

function calculatePayroll(Array){
 return Array.reduce((memoo,emp)=>{
   return memoo+= allWagesFor(emp)
 },0)
  
}