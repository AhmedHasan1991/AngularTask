import { Component } from "@angular/core";
import { first } from "rxjs/operators";
import { Observable } from "rxjs";
import { User } from "../_models";
import { UserService, AuthenticationService } from "../_services";
import { Router } from "@angular/router";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent {
  loading = false;
  users: Observable<User[]>;
  currentIndex = -1;
  page = 1;
  count = 0;
  pageSize = 10;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.userService
      .getAll(this.page)
      .pipe(first())
      .subscribe(users => {
        console.log(users);
        this.loading = false;
        this.users = users.data;
      });
  }

  employeeDetails(id: number) {
    this.router.navigate(["details", id]);
  }

  handlePageChange(event) {
    this.page = event;
    this.userService
      .getAll(this.page)
      .pipe(first())
      .subscribe(users => {
        console.log(users);
        this.loading = false;
        this.users = users.data;
      });
  }
}
