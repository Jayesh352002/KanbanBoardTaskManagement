import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifytask',
  templateUrl: './modifytask.component.html',
  styleUrls: ['./modifytask.component.css']
})
export class ModifytaskComponent implements OnInit{

  url = "http://localhost:8080/api/v1/task/gettaskdetail";
  u1 = "http://localhost:8080/api/v1/task/updatetask";

  title : any ;
  desc : any ;

  taskTitle : any ;
  taskDesc :any;
  taskStatus : any ;

  id:any ;

  route: string | undefined;

  flag : boolean = false ;

  public TaskData:any = [];

  constructor(private router: Router , private http: HttpClient , private activatedRoute: ActivatedRoute ){
    this.route = router.url;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      //console.log("Status :- "+this.st);
    });
    this.loadTaskData();
  }

  loadTaskData(){
    this.http.get(this.url+'/'+this.id).subscribe((resultData: any)=>{
      this.title = resultData.title ;
      this.desc = resultData.description ;
      this.taskStatus = resultData.status ;

      console.log("Task ST : "+this.taskStatus);
    })
  }

  update(taskTitle: any , taskDesc: any){
      this.taskTitle = taskTitle ;
      this.taskDesc = taskDesc ;

      let bodyData = {
        "taskName" : this.taskTitle,
        "taskDescription" : this.taskDesc,
        "taskStatus" : this.taskStatus
      };
      this.http.post(this.u1+'/'+this.id,bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
      {
        //console.log("Task Title : "+resultData);
        alert("Task Updated Successfully");
        this.title = "";
        this.desc = "" ;
        this.router.navigateByUrl('/');
        //this.status = "" ;
      });
  }

  delete(){
    this.http.delete(this.u1+'/'+this.id,{responseType: 'text'}).subscribe((
      result:any)=>{

        alert("Task Deleted Successfully");
        console.log(result);
        this.router.navigateByUrl('/');

      });
  }

  changeStatus(){
    this.flag = true ;
  }

  getStatus(event : any){
    this.taskStatus = event.target.value ;
  }

}
