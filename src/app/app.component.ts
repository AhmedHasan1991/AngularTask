import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "./_services";
import { User } from "./_models";
import { AvatarModule } from "ngx-avatar";

@Component({ selector: "app", templateUrl: "app.component.html" })
export class AppComponent {
  currentUser: User;
  avatar: string;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
    console.log(this.currentUser);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  newuser() {
    this.authenticationService.logout();
    this.router.navigate(["/add"]);
  }
}
