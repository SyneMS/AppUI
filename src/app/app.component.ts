import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showMenu: boolean = false;

  constructor(private menuService: MenuService, private route: Router) {

  }

  ngOnInit() {
    // this.menuService.showMenu.subscribe((data: boolean) => {
    //   this.showMenu = data;
    // })

    let token = localStorage.getItem("token");
    if (!token) {
      this.route.navigate(["/login"]);
    }
  }

}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./app.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}