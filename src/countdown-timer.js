

const CountdownTimer = function (obj) {
  this.selector = document.querySelector(obj.selector);
  this.targetDate = obj.targetDate;
  
  this.setTime = () => {
    const currentTime = new Date;
    const time = this.targetDate - currentTime;
  
    const days = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
    const secs = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, 0);
    
    this.selector.querySelector('[data-value="days"]').innerHTML = `${days}`;
    this.selector.querySelector('[data-value="hours"]').innerHTML = `${hours}`;
    this.selector.querySelector('[data-value="mins"]').innerHTML = `${mins}`;
    this.selector.querySelector('[data-value="secs"]').innerHTML = `${secs}`;
  }

  this.setTime();

  setInterval(this.setTime, 1000);
};

export default CountdownTimer;
