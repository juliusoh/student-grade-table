class GradeForm {
  constructor (formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit)
  }

  onSubmit (createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log('hello');
    var formData = new FormData(event.target);
    var getName = formData.get('name');
    var getCourse = formData.get('course');
    var getGrade = formData.get('grade');
    this.createGrade(getName, getCourse, getGrade);
    
    event.target.reset();
  }
}