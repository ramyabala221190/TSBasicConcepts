import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';
import * as users from '../../assets/users.json';
import { ToDo, User } from '../models';

@Component({
  selector: 'app-interface-examples',
  templateUrl: './interface-examples.component.html',
  styleUrls: ['./interface-examples.component.scss']
})
export class InterfaceExamplesComponent {

  constructor(private service:DataService){}

  toDoList$:Observable<ToDo[]>|undefined;
  usersList$:Observable<User[]>|undefined;

  ngOnInit(){
    this.toDoList$=this.service.fetchToDos();
   // this.usersList$=of(users);
   this.usersList$=this.service.fetchUsers();

  }

  
}
