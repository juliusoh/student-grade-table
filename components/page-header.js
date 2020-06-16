class PageHeader {
  constructor (headerElement) {
    this.headerElement = headerElement;
    console.log(this.headerElement);
  }

  updateAverage(newAverage) {
   var badge = this.headerElement.querySelector('.badge');
   console.log(badge);
   badge.textContent = newAverage;
  
  }
}