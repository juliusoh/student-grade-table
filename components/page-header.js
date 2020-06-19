class PageHeader {
  constructor (headerElement) {
    this.headerElement = headerElement;
    
  }

  updateAverage(newAverage) {
   const badge = this.headerElement.querySelector('.badge');
   
   badge.textContent = newAverage;
  
  }
}