// Your code here
function createEmployeeRecord([array]) {
    
    let obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],

    }
    return obj 
}

createEmployeeRecord(["Gray", "Worm", "Security", 1]);
console.log(createEmployeeRecord(["Gray", "Worm", "Security", 1]))


function createEmployeeRecords() {
   

}