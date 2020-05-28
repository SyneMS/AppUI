import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private alertify: AlertifyService, private route: Router, private menuService: MenuService, ) { }

  ngOnInit(): void {
    // let token = localStorage.getItem("token");
    // if (!token) {
    //   this.route.navigate(["/login"]);
    // }
  }

  logout() {
    localStorage.removeItem("token");
    //this.menuService.showMenu.next(false);
    this.alertify.success("Successfully logged out");

  }

}
