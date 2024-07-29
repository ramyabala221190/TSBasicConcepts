### Interfaces and its usage

Interface defines the shape of data.It doesnt impact the bundle size. You get the productivity you
require while developing the angular application

Use-Cases of interfaces:
1.  It defines the data we will be getting.
2.  It defines the data we will be passing.

The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. Variables use const whereas properties use readonly.

export interface ToDo{
  readonly userId: number, //the values of these properties cannot change
  readonly id: number, //the values of these properties cannot change
  title:string,
  completed:boolean
}

Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.In those cases you can use an index signature to describe the types of possible values.

let student:Student={
      name:"John Doe",
      grade:2,
      rollNo:50,
      subjects:['History','Geography','science','Math'],
      [key:string]:string|number|string[]   //the value of the property can be of a type of the other properties in the interface. So the ts expects that the other types must also be included. 
   }

   console.log(student.name);
   console.log(student['grade']);

   console.log(student['motherTongue']); // in absence of index signature, you cannot access a property not present on the interface

   for(let key in student){
    console.log(`${key}:${student[key]}`) // in absence of index signature, you cannot access a property not present on the interface even via for loop
   }

   In the absence of index signature, you will get the below error in both the examples.
  Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Student'.
  No index signature with a parameter of type 'string' was found on type 'Student'.ts

[key:string]:string|number|string[] is an index signature.
In the above example, key is an index which could be a number or string type [key:string|number]
The value of the property again can be string or number :string|number.

This means with the help of index signature, I can access properties, whose names I am not aware at the moment but I know their data type
and their shape.
In the above example, the index signature, will allow me access property names which are a string eg: 'motherTongue' and the value of those
properties can be a string/number/string[].

In the below example, in the absence of index signature, you can access unknown properties that dont exist on the interface using keyof.

for(let key in student){
    console.log(`${key}:${student[key as keyof Student]}`) // in absence of index signature, you can use keyof to prevent typeerrors
   }


### CompileTime and Runtime checking using Interfaces

While this is great for internal code type checking, it does not guard against the kind of invalid input you may encounter externally. By default, TypeScript does not verify types at runtime in order to avoid runtime overhead and aggressively optimize runtime performance as a 
part of its design goals.

In User interface even if only few properties are declared, when an array of user objects with additional properties are received via api, there are no errors.

But If I create a json and assign it to the property of interface User, then it throws an error
if the json contains additional properties.

So for data available in advance, compile time errors will be thrown if data structure does not match the interface.
If data available at runtime, interface does not do any typechecking.

A type guard is some expression that performs a runtime check that guarantees the type in some scope

Below is type guard which can be used to check if a property is present in the response

export const isType= <T>(objectToBeChecked:any,propertyToBeChecked: keyof T): objectToBeChecked is T =>{
    return (objectToBeChecked as T)[propertyToBeChecked] !== undefined;
}

"objectToBeChecked is T" is a type predicate.

Type predicates in TypeScript are functions that return a boolean value and are used to narrow down the type of a variable. They are primarily used in conditional blocks to check whether a variable is of a particular type and then perform specific operations accordingly. Type predicates can be defined using the “is” keyword in TypeScript.

In the above syntax, "T" is the name of the type you want to check, and the "objectToBeChecked' is the variable whose type you want to narrow down. The “is” keyword specifies that the function returns a boolean value, and the "objectToBeChecked is T" tells TypeScript that the variable is of the specified type if the function returns true.

### Types and its usage
 
 Interfaces and types are similar to each other. They differ in the shape of the data that they can
 represent.
 Interfaces can represent only object like structures.
 types can also represent primitive types in addition to object like structures.


### Enums and its usage

Enum represents a set of named constants. Each enum member has a value associated with it, which can either be constant or computed.

If you dont specify any values for any of the enum members, it will be auto-incremented starting from 0,
as you see for the Direction enum. The advantage here is when you really dont care about the value
of the enum members. You only want to ensure that they are unique.

If you specify the value only for the first enum member, the value for the other members will be incremented from that value.


export enum Direction{
  UP, // 0 is value of UP enum member
  DOWN, // 1 is value of DOWN enum member
  LEFT, //2 is value of LEFT
  RIGHT //3 is value of RIGHT
  }
  
  export enum Compass{
    NORTH =10, // 10 is value of NORTH
    SOUTH =20, //20 is value of SOUTH
    EAST= 30, //30 is value of EAST
    WEST =40 //40 is value of WEST
  }

  Below is an example of a string enum. You are assigning a string value to the enum member.
  This is useful if the value of the enum member holds significance in the code.
  
  export enum Response{
    YES="yes", //"yes" is value of YES
    NO="no" // "no" is value of NO
  }

You can convert an enum into a type using keyof typeof

type ResponseType= keyof typeof Response; //convert enum into corresponding type "YES"|"NO"


### Declaration files

For TS to generate declaration files,"declaration" property in tsconfig.json must be set to true.
Observe in any library you have generated, this property is set to true. When you build the library,
you can d.ts files inside the dist folder for every .ts file.

### Generics and its usage

Generics helps to reuse the same code for different types.
Using any will strip the type safety. So we should not go for any.

While using any is certainly generic,it will cause the function to accept any and all types of arg. Also
we are losing information on what the type was when the function returns a value.

Instead we use a way of typing the argument in such a way that we can use it to denote what is being 
returned.

``````
function someFunction<T>(arg:T):T{}

<T>. where T is a variable,means that the function is expecting a type to be passed in.

let n= someFunction<number>(11);
let str= someFunction<string>('John');

```

Instead of creating seperate functions for number and string, we have specified a 
generic type. We have not used any. We need to pass the type to the function in <> and the arguments
are also of the same type.

This ensures that the type passed to the function and the type of arguments passed to the function
are matching.

If you are doing similar actions for different types eg: fetching products, photos,albums etc,
create a function with generic type. So the same function can be reused for all these scenarios.

function getItems<T>(url:string):Observable<T>{
    return this.http.get(url);
}

getItems<Products>('someurl');
getItems<Photos>('someurl');

For Example, in the DataService, I have used generic type T in the fetchData().
Also we have used it in combination with enums,types and interfaces.

fetchData<T>(type:DataType):Observable<T[]>{
    return this.http.get<T[]>(DataSource[type]);
  }

fetchData() expects a type variable T to be passed in the method call and it will return an observable also of the same type variable T.

We have generated a type DataType from the enum DataSource. This restricts the arguments that can be passed to the fetchData(). The compiler will complain if it doesnt get the expected argument.

We are accessing the enum member's value DataSource[type] to pass the url to the http.get().

We have called fetchData() as below to get 2 different kinds of data:

Here the variable T takes values: interface ToDo and interface User.
The observable in the service also returns data of the same type variable T.

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


Generics and Interfaces

interface Model<T>{
    items:T[]|undefined
}

let a:Model<string>;
let b:Model<number>;


### Never type

TypeScript introduced a new type never, which indicates the values that will never occur.

The never type is used when you are sure that something is never going to occur. 

The void type can have undefined or null as a value where as never cannot have any value.

let something: void = null;
let nothing: never = null; // Error: Type 'null' is not assignable to type 'never'





