import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) {}
  public addNewStudents(body){
    const result = this.http.post('https://localhost:44304/api/students/test', body, httpOptions).subscribe(data => {
      console.log(data);
      console.log(body);
    });
    return result;
  }
}
