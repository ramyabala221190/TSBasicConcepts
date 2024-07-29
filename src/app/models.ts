export interface ToDo{
    readonly userId: number, //the values of these properties cannot change
    readonly id: number, //the values of these properties cannot change
    title:string,
    completed:boolean
  }
  
  export interface User{
    id: number,
    name: string,
   username: string,
   email: string,
   [prop:string]:string|number|{};
  }

  export interface Comment{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }

  export interface Post{
    userId:number,
    id:number,
    title:string,
    body:string
  }

  export enum Direction{
    UP, // 0 is value of UP
    DOWN, // 1 is value of DOWN
    LEFT, //2 is value of LEFT
    RIGHT //3 is value of RIGHT
    }
    
    export enum Compass{
      NORTH =10, // 10 is value of NORTH
      SOUTH =20, //20 is value of SOUTH
      EAST= 30, //30 is value of EAST
      WEST =40 //40 is value of WEST
    }
    
    export enum Response{
      YES="yes", //"yes" is value of YES
      NO="no" // "no" is value of NO
    }
  
    export type ResponseType= keyof typeof Response; //convert enum into corresponding type "YES"|"NO"


    export enum DataSource{
        TODO="https://jsonplaceholder.typicode.com/todos",
        USERS="https://jsonplaceholder.typicode.com/comments",
        POSTS="https://jsonplaceholder.typicode.com/posts"
      }
      
    export type DataType= keyof typeof DataSource;  // "TODO"||"USERS"