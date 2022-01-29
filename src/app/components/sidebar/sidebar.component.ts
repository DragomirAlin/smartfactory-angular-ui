import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

 enum Route {
  HOME = "/",
  DEVICE = "/device"
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  readonly route = Route;
  currentRoute: any;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // event is an instance of NavigationEnd, get url!
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
    console.log(this.router.url);
  }


}

