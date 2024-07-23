import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepatmentService {
  private baseURL = "http://localhost:8080/api";

  constructor(private httpClient :HttpClient) { }

getListDepartment():Observable<any> {
  return this.httpClient.get<any>(`${this.baseURL}/departments`);
}

postDepartment(data:any):Observable<any> {
  return this.httpClient.post<any>(`${this.baseURL}/departments`,data);
} 

getOneDepartment(id:number):Observable<any> {
  return this.httpClient.get<any>(`${this.baseURL}/departments/${id}`)
}






 
}
