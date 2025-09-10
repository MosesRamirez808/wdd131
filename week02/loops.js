//for loop
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

//while loop
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
} 
// for each loop
studentReport.forEach((report) => {
  if (report < LIMIT) { 
    console.log(report);
  }
});

//for in loop
for (let index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(studentReport[index]);
  } 
}