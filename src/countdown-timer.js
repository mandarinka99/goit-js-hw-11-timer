

class CountdownTimer {

   #timerId = null;
   #currentTime;
   #time = 0;

  constructor (obj) {
    this.selector = document.querySelector(obj.selector);
    this.targetDate = obj.targetDate;

    this.setTime = () => {
      this.#currentTime = new Date;
      this.#time = this.targetDate - this.#currentTime;

      if (this.#time <= 0) {
        clearInterval(this.#timerId);
        this.#time = 0;
      }
    
      const days = Math.floor(this.#time / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
      const hours = Math.floor((this.#time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
      const mins = Math.floor((this.#time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
      const secs = Math.floor((this.#time% (1000 * 60)) / 1000).toString().padStart(2, 0);
      
      this.selector.querySelector('[data-value="days"]').innerHTML = `${days}`;
      this.selector.querySelector('[data-value="hours"]').innerHTML = `${hours}`;
      this.selector.querySelector('[data-value="mins"]').innerHTML = `${mins}`;
      this.selector.querySelector('[data-value="secs"]').innerHTML = `${secs}`;
    }
  
    this.setTime();
  
    this.#timerId = setInterval(this.setTime, 1000);

  }
};

export default CountdownTimer;
