import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit{

  title : string = "";
  desc : string = "";
  status : string = "";

  st : any ;

  constructor(private httpClient : HttpClient , private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.st = params['status'];
      //console.log("Status :- "+this.st);
    });
  }

  addTask()
  {
    if(this.title==="" || this.desc==="")
    {
      alert("Please Enter Valid Input");
    }
    else
    {
      let bodyData = {
        "taskName" : this.title,
        "taskDescription" : this.desc,
        "taskStatus" : this.st
      };
      this.httpClient.post("http://localhost:8080/api/v1/task/addtask",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
      {
        console.log("Task Title : "+resultData);
        alert("Task Added Successfully");
        this.title = "";
        this.desc = "" ;
        this.status = "" ;
      });
    }
  }
}
