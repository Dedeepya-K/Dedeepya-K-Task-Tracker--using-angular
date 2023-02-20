import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Task} from '../Task';//interface
//import {TASKS} from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:1234/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    //return TASKS;  -> not an observable so we will be creating a variable as shown below
    //const tasks = of(TASKS);
    //return tasks;
    return this.http.get<Task []>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url); 
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
