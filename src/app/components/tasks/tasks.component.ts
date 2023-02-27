/*import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task';//interface
//import {TASKS} from '../../mock-tasks';//in future these come from the backend

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks: Task[] =[];//initially empty array


  constructor(private taskService: TaskService){}//to call service method

  ngOnInit():void
  {
    this.taskService.getTasks().subscribe((tasks)=> (this.
      tasks = tasks));
  }

  deleteTask(task:Task){
    this.taskService
    .deleteTask(task)
    .subscribe(
      ()=> (this.
      tasks = this.tasks.filter(t => t.id! 
        ==task.id))
        );
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    //console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    //console.log(task);
    this.taskService.addTask(task).subscribe((task)=> (this.
      tasks.push(task)));
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}