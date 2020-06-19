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
    const formData = new FormData(event.target);
    const getName = formData.get('name');
    const getCourse = formData.get('course');
    const getGrade = formData.get('grade');
    this.createGrade(getName, getCourse, getGrade);
    
    event.target.reset();
  }
}