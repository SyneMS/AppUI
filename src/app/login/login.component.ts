import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Login } from './login.model';
import { LoginService } from './login.service';
import { AlertifyService } from '../services/alertify.service';
import { MenuService } from '../services/menu.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myName: string;
  public login: Login;
  showMenu: boolean = false;
  constructor(private loginService: LoginService, private alertify: AlertifyService, private menuService: MenuService,
    private route: Router) { }
  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked parent");
  // }
  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit parent");
  // }

  // ngDoCheck(): void {
  //   console.log("Do check called parent");
  // }

  // getName(val) {
  //   this.myName = val;
  // }

  // MyVal: string = '';
  // user = {
  //   name: "Alex"
  // };

  // defaultUser = {
  //   name: "Sasha"
  // };

  // ClickMe() {
  //   this.user = this.defaultUser;
  // }

  ngOnInit(): void {
    this.login = {
      userName: null,
      password: null
    }



    // this.menuService.showMenu.subscribe((data: boolean) => {
    //   this.showMenu = data;
    // })

    let token = localStorage.getItem("token");
    if (token) {
      //this.menuService.showMenu.next(true);
      this.route.navigate(["/menu/members"]);
    }
  }

  onSubmit() {
    console.log(JSON.stringify(this.login));
    this.loginService.login(this.login).subscribe(next => {
      //console.log("Login Successfully");
      //this.menuService.showMenu.next(true);
      this.alertify.success("Login Successfully");
      this.route.navigate(["/menu/members"]);
    }, error => {
      //console.log(error);
      this.alertify.error("Something went wrong");
    });
  }
}
