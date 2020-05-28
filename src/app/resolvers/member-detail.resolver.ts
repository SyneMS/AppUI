import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {

    constructor(private alertify: AlertifyService, private userService: UserService,
        private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params["id"]).pipe(
            catchError(error => {
                this.alertify.error("Problem retriving data");
                this.router.navigate(["/menu/members"]);
                return of(null);
            })
        )
    }
}
