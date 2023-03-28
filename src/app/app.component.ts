import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'Localstorage_management';

 tdate:string = "";
 ttime:string = "";
 ttask:string = "";

 task:any;

 tasks = new Array();





 ngOnInit(): void {


  this.tasks = JSON.parse(localStorage.getItem("task") || '[]');

}




  submit(){
    // alert("ankita")


    if(this.tdate == "")
    {
      alert("Enter date");
      return;
    }


    if(this.ttime == "")
    {
      alert("Enter time");
      return;
    }


    if(this.ttask == "")
    {
      alert("Enter task");
      return;
    }


    let task = {date:this.tdate, time:this.ttime, task:this.ttask};


    this.tasks = JSON.parse(localStorage.getItem("tasks") || '[]');

    this.tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(this.tasks));

  }
}
