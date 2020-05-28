import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  showMenu = new BehaviorSubject(false);

  constructor(private route: Router) { }

  setShowMenu(val: boolean) {
    this.showMenu.next(val);
  };

  checkToken(): boolean {
    let token = localStorage.getItem("token");
    if (token)
      return true;
    else
      return false;
  }
}
