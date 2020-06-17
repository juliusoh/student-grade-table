// 
//   "apiKey": "olYtLdiN",
//   "message": "User for Julius Oh created. Write down your API Key, you will need it for the rest of this project."
var noGrade = document.querySelector('#no-grade');
var form = document.querySelector('form');
var gradeForm = new GradeForm(form)
var header = document.querySelector('header');
var headerApp = new PageHeader(header);
var table = document.querySelector('table');
var gradeTable = new GradeTable(table, noGrade);
var app = new App(gradeTable, headerApp, gradeForm);
app.start();
