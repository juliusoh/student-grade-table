
class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  
  updateGrades(grades) {
   var tbody = this.tableElement.querySelector('tbody');
   console.log(tbody);
   tbody.innerHTML = "";
   for (var i = 0; i < grades.length; i++) {
     var row = document.createElement('tr');
     var value = document.createElement('td');
     value.textContent = grades[i].value;
     row.appendChild(value);
     var course = document.createElement('td');
     course.textContent = grades[i].course;
     row.appendChild(course);
     var grade = document.createElement('td');
     grade.textContent = grades[i].grade;
     row.appendChild(grade);
     tbody.appendChild(row) 
   }
  }
}