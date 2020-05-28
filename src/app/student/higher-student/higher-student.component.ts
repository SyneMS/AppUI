import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-higher-student',
  templateUrl: './higher-student.component.html',
  styleUrls: ['./higher-student.component.css']
})
export class HigherStudentComponent implements OnInit {

  employeeForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstName: new FormControl(),
      email: new FormControl()
    })
  }

  SubmitForm() {
    console.log(this.employeeForm.value);
  }

}
