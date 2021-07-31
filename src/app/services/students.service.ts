import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private url = "http://localhost:5001/api/";

  constructor(private http:HttpClient) { }

  public getAllStudents():Observable<Student[]>{
    return  this.http.get<Student[]>(this.url+'students');
  }

  public addStudent(student:Student):Observable<Student>{
    return  this.http.post<Student>(this.url+"student/add",student);
  }

  public updateStudent(student:Student):Observable<Student>{

    return  this.http.put<Student>(this.url+"student/update",student);
  }

  public searchStudent(studentId:string):Observable<Student>{
    const params = new HttpParams().set("id", studentId);
    return this.http.get<Student>(this.url+"students/id", {params});

  }
  public  deleteStudent(studentId:string):Observable<boolean>{
    const params = new HttpParams().set("id", studentId);
    return this.http.delete<boolean>(this.url+"student/delete", {params});

  }


}
