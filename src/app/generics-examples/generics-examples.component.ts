import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ToDo, User } from '../models';

@Component({
  selector: 'app-generics-examples',
  templateUrl: './generics-examples.component.html',
  styleUrls: ['./generics-examples.component.scss']
})
export class GenericsExamplesComponent {

  constructor(private service:DataService){}

   ngOnInit(){
    this.service.fetchData<ToDo>("TODO").subscribe(
      result=>{
        console.log(result)
      }
    );

    this.service.fetchData<User>("USERS").subscribe(
      result=>{
        console.log(result)
      }
    );

   }

}
