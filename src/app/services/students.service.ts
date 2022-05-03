import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from "../Models/Student";
import * as XLSX from "xlsx";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) {}
  public XlsxToStudents(data){
    let students: Student[] = [];
    let i = 0;
    for (let row of data) {
      let student = new Student();
      if (i !== 0) {
        student.firstName = row[0];
        student.secondName = row [0];
        students.push(student);
      }
      i++;
    }
    return students;
  }
}
