import './sass/main.scss';
import CountdownTimer from './countdown-timer'

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 29 2021'),
});
 
