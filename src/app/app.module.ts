import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { AvatarModule } from "ngx-avatar";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    AvatarModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
