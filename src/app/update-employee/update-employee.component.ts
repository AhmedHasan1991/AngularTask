import { Component, OnInit } from "@angular/core";
import { User } from "../_models/user";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../_services/user.service";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html"
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: UserService
  ) {}

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params["id"];

    this.employeeService.getEmployee(this.id).subscribe(
      data => {
        console.log(data);
        this.user = data;
      },
      error => console.log(error)
    );
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.user).subscribe(
      data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(["/"]);
  }
}
