import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


// Its called Decorator
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  logout() {
    console.log('I have clicked');
  }
}
