import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  private baseURL = "http://localhost:8080/api";

  constructor( private httpClient :HttpClient) { }

  getEmployees():Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/employees`)
  }


  postEmployees(data:any):Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/employees`,data);
  }


  getOneEmployees( employeeId:number):Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/employees/${employeeId}`);
  }

  getEmployeesByDepartment(departmentId:number ):Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURL}/employees/by/${departmentId}`);
  }




}
