// 
//   "apiKey": "olYtLdiN",
//   "message": "User for Julius Oh created. Write down your API Key, you will need it for the rest of this project."
const noGrade = document.querySelector('#no-grade');
const form = document.querySelector('form');
const gradeForm = new GradeForm(form)
const header = document.querySelector('header');
const headerApp = new PageHeader(header);
const table = document.querySelector('table');
const gradeTable = new GradeTable(table, noGrade);
const app = new App(gradeTable, headerApp, gradeForm);
app.start();
