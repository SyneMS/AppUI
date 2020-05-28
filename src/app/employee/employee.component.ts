import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    //this.menuService.checkToken();
    alert("Employee works");
  }


}
