import { Component } from '@angular/core';
import { EMPTY, Observable, catchError, from, map, mergeMap, of, tap, throwError } from 'rxjs';
import { DataService } from '../data.service';
import { Comment, Post, Student, ToDo, User } from '../models';
import { isStringType, isType } from '../typeguards';
import * as comments from '../../assets/comments.json';

@Component({
  selector: 'app-interface-examples',
  templateUrl: './interface-examples.component.html',
  styleUrls: ['./interface-examples.component.scss']
})
export class InterfaceExamplesComponent {

  constructor(private service:DataService){}

  toDoList$:Observable<ToDo[]>|undefined;
  usersList$:Observable<User[]>|undefined;
  commentsList$:Observable<Comment[]>|undefined;
  postsList$:Observable<Post[]>|undefined;


  ngOnInit(){

    //example for primitive type guard.

    let str1="Hello World";
    let num= 123;
    let arr=[1,2,3,4];

    console.log(isStringType(str1)); //true
    console.log(isStringType(num)); //false
    console.log(isStringType(arr)); //false
 

    //example for index signatures
   let student:Student={
      name:"John Doe",
      grade:2,
      rollNo:50,
      subjects:['History','Geography','science','Math']
   }


   console.log(student.name);
   console.log(student['grade']);

   //console.log(student['motherTongue']); // in absence of index signature, you cannot access a property not present on the interface

   //iterating through the object
   for(let key in student){
    //console.log(`${key}:${student[key]}`) // in absence of index signature, you cannot access a property not present on the interface even via for loop
   }

   for(let key in student){
    console.log(`${key}:${student[key as keyof Student]}`) // in absence of index signature, you can use keyof to prevent typeerrors as in the above example
   }

  
    this.toDoList$=this.service.fetchToDos();

    //compile-time type check for data known in advance
    this.commentsList$=of(comments);

    this.postsList$=this.service.fetchPosts().pipe(
      mergeMap((response:Post[])=>{
              // runtime type check for data not known in advance using custom typeguard
        if(!response.every((post:Post)=>isType<Post>(post,"title"))){
          return throwError("Response not matching Post")
        }
        else{
          return of(response);
        }
      }),
    catchError(err=>{
      console.log(err);
      return EMPTY;
    })
    )
    
   this.usersList$=this.service.fetchUsers().pipe(
    mergeMap((response:User[])=>{
      // runtime type check for data not known in advance using custom typeguard
      if(!response.every((user:User)=>isType<User>(user,"username"))){
        return throwError("Response not matching User")
      }
      else{
        return of(response);
      }
    }),
    catchError(err=>{
      console.log(err);
      return EMPTY;
    })
   )

  }

  
}
