import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

    constructor(private alertify: AlertifyService, private userService: UserService,
        private router: Router, private loginService: LoginService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.loginService.decodeToken.nameid).pipe(
            catchError(error => {
                this.alertify.error("Problem retriving data");
                this.router.navigate(["/menu/members"]);
                return of(null);
            })
        )
    }
}
