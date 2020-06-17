
class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
    this.updateGrades = this.updateGrades.bind(this);
    this.renderGradeRow =this.renderGradeRow.bind(this)
  }
  
  updateGrades(grades) {
   var tbody = this.tableElement.querySelector('tbody');
   tbody.innerHTML = "";
   if (grades.length === 0) {
    this.noGradesElement.classList.remove('d-none')
  } else {
    this.noGradesElement.classList = "d-none";
  }
  //  this.tableElement.lastElementChild.textContent ='';
   for (var i = 0; i < grades.length; i++) {
  //    var row = document.createElement('tr');
  //    var name = document.createElement('td');
  //    name.textContent = grades[i].name;
  //    row.appendChild(name);
  //    var course = document.createElement('td');
  //    course.textContent = grades[i].course;
  //    row.appendChild(course);
  //    var grade = document.createElement('td');
  //    grade.textContent = grades[i].grade;
  //    row.appendChild(grade);
  //    tbody.appendChild(row) 
  //  }
   var newRow = this.renderGradeRow(grades[i], this.deleteGrade);
   tbody.appendChild(newRow);
  }
}




  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var row = document.createElement('tr');
    var name = document.createElement('td');
    var btn = document.createElement('button');
    var del = document.createElement('td');
    var course = document.createElement('td');
    var grade = document.createElement('td');
    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    btn.textContent = 'DELETE';
    btn.className = 'btn btn-sm';

    del.appendChild(btn);
    row.appendChild(name);
    row.appendChild(course);
    row.appendChild(grade);
    row.appendChild(del);
    btn.addEventListener('click', function () {
      deleteGrade(data.id);
    });
    return row
  }
  
}