import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentsList:Student[]= [];
  newStudent :Student = new Student();
  id:number|any;
  constructor(private studentService:StudentsService) { }

  ngOnInit(): void {
    this.loadAllStudent();
  }

  loadAllStudent(){
    this.studentService.getAllStudents().subscribe(res=>{
      this.studentsList = res;
    });
  }
  addStudent(){
    this.studentService.addStudent(this.newStudent).subscribe(res=>{
      this.newStudent = new Student();
      this.loadAllStudent();
    });
  }

  searchStudent(){
    this.newStudent = new Student();
   this.studentService.searchStudent(this.id).subscribe(res=>{
     console.log(res);
     if(res !=null){
       this.newStudent = res;
     }
   })
  }

  updateStudent(){
    this.newStudent.id = this.id;
    this.newStudent.firstName = "Jitesh";
    this.newStudent.lastName = "Surekar";
    this.newStudent.batch = "11th"

    this.studentService.updateStudent(this.newStudent).subscribe(res=>{
      this.newStudent = new Student();
      this.loadAllStudent();
    })
  }
  deleteStudent(){
    this.studentService.deleteStudent(this.id).subscribe(res=>{
      console.log(res);
      this.loadAllStudent();
    })
  }



}

