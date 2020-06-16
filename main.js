// 
//   "apiKey": "olYtLdiN",
//   "message": "User for Julius Oh created. Write down your API Key, you will need it for the rest of this project."
var table = document.querySelector('table');
var gradeTable = new GradeTable(table);
console.log(gradeTable);
var app = new App(gradeTable);
app.start();
console.log(app);