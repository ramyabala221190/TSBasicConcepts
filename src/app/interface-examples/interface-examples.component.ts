import { Component } from '@angular/core';
import { EMPTY, Observable, catchError, from, map, mergeMap, of, tap, throwError } from 'rxjs';
import { DataService } from '../data.service';
import { Comment, Post, ToDo, User } from '../models';
import { isType } from '../typeguards';
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
