import { User } from "../_models/user";
import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HomeComponent } from "../home";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html"
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService
  ) {}

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params["id"];

    this.userservice.getEmployee(this.id).subscribe(
      data => {
        console.log(this.id);
        this.user = data;
      },
      error => console.log(error)
    );
  }

  list() {
    this.router.navigate(["/"]);
  }

  update(id: number) {
    this.router.navigate(["update", id]);
  }

  deleteEmployee(id: number) {
    if (confirm("Are you sure to delete ")) {
      this.userservice.deleteEmployee(id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/"]);
        },
        error => console.log(error)
      );
    }
  }
}
