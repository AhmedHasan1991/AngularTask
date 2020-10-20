import { User } from "../_models/user";

import { UserService } from "../_services/user.service";
import { Component, OnInit } from "@angular/core";
import { Router, UrlSegmentGroup } from "@angular/router";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html"
})
export class CreateEmployeeComponent implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private employeeService: UserService, private router: Router) {}

  ngOnInit() {}

  newEmployee(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.employeeService.createEmployee(this.user).subscribe(
      data => {
        console.log(data);
        //this.user = new User();
        //this.gotoList();
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(["/"]);
  }
}
