import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {

  route: string | undefined;

  taskStatus : any ;

  public TaskData:any = [];

  todo : boolean = false ;
  doing : boolean = false ;
  done : boolean = false ;

  id : any ;

  statusData : any ;

  constructor(private router: Router , private http: HttpClient) {
    this.route = router.url;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.http.get("http://localhost:8080/api/v1/task/gettask").subscribe((resultData: any)=>
      {
        //console.log("Task Details : "+resultData);
        //alert("Task Added Successfully");
         this.TaskData = resultData ;
         console.log("Task Details : "+this.TaskData);

         /*
         for(let i of this.TaskData){
            this.taskStatus = i.status ;

            if(this.taskStatus.toString().toLowerCase()=="doing"){
              this.doing = true ;
              this.todo = false ;
              this.done = false ;
            }
            else if(this.taskStatus.toString().toLowerCase()=="todo"){
              this.todo = true ;
              this.doing = false ;
              this.done = false;
            }
            else if(this.taskStatus.toString().toLowerCase()=="done"){
              this.done = true ;
              this.todo = false ;
              this.doing = false ;
            }
         }*/

      });
  }

  openTask(st:string){
    this.statusData = st ;
    this.router.navigate(['/addtask',st]);
  }

  taskId(id:any){
    this.id = id ;
    this.router.navigate(['/task',id]);
    console.log("Task ID - "+id);
  }

  /*
  drop(event: any){
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }*/
}
