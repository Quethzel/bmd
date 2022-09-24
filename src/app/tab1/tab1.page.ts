import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  presentingElement = null;
  countDownDate: number;
  countdown: string;
  constructor() {}

  ngOnInit(): void {
    this.presentingElement = document.querySelector('.ion-page');

    //TODO: get data from API
    // this.countDownDate = new Date(2022, 10, 19, 23, 30).getTime();
    // this.countDown();

  }

  countDown() {
    var x = setInterval(function() {
      let now = new Date().getTime();
      let distance = this.countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // this.countdown = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s `;
    
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        this.countdown = "EXPIRED";
      }
    }, 1000);
  }

}
