import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { AuthGuard } from "./_helpers";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },

  {
    path: "details/:id",
    component: EmployeeDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "update/:id",
    component: UpdateEmployeeComponent,
    canActivate: [AuthGuard]
  },
  { path: "add", component: CreateEmployeeComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
