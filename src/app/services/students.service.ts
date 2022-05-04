import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from "../Models/Student";
import * as XLSX from "xlsx";
import {StudentExcelDto} from "../Models/StudentExcelDto";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) {}
  public XlsxToStudents(data){
    let students: StudentExcelDto[] = [];
    let i = 0;
    for (let row of data) {
      let student = new StudentExcelDto();
      if (i !== 0) {
        student.firstName = row[0];
        student.secondName = row [1];
        student.groupName = row[2];
        student.instituteName = row[3];
        student.universityName = row[4];
        students.push(student);
      }
      i++;
    }
    return students;
  }
}
