import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource, DataType, Post, ToDo, User } from './models';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //interface and enum example
  fetchToDos():Observable<ToDo[]>{
    return this.http.get<ToDo[]>(DataSource.TODO)
  }

 //interface and enum example
  fetchUsers():Observable<User[]>{
    return this.http.get<User[]>(DataSource.USERS)
  }

  fetchPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(DataSource.POSTS)
  }

  //example of generic method
  fetchData<T>(type:DataType):Observable<T[]>{
    return this.http.get<T[]>(DataSource[type]);
  }
}
