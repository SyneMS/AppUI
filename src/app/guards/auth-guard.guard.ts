import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from '../services/alertify.service';
import { MenuService } from '../services/menu.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private alertify: AlertifyService, private menuService: MenuService,
    private route: Router) { }

  canActivate(): boolean {
    if (this.menuService.checkToken()) {
      return true;
    }

    this.alertify.error("You are not authorized");
    this.route.navigate(["/login"]);
    return false;
  }

}
