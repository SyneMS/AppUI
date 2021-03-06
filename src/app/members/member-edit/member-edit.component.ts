import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;
  @ViewChild("editForm") editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty)
      $event.returnValue = true;
  }
  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
  }

  updateUser() {
    console.log(this.user);
    this.userService.updateUser(this.loginService.decodeToken.nameid, this.user)
      .subscribe(next => {
        this.alertify.success("Update Successfully");
        this.editForm.reset(this.user);
      }, error => {
        this.alertify.error(error);
      });
  }
}
