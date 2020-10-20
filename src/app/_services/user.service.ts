import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environment";
import { User } from "../_models";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(page: number) {
    return this.http.get<any>(`${environment.apiUrl}/users?offset=1&limit=100`);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${environment.apiUrl}/users/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/users`, employee);
  }
}
