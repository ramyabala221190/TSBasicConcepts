import { Component } from '@angular/core';
import { Direction, Compass,Response,ResponseType } from '../models';

@Component({
  selector: 'app-enum-examples',
  templateUrl: './enum-examples.component.html',
  styleUrls: ['./enum-examples.component.scss']
})

export class EnumExamplesComponent {

ngOnInit(){
  /**
   * Since ResponseType is the type of argument to be passed to the function, the compiler
   * will complain if we pass anything other than "YES" or "NO". This is an advantage of types
   */
    this.checkResponse("YES"); 
    this.checkResponse("NO");

    let dirA= Direction.DOWN;
    let dirB= Direction.LEFT;
    let dirC= Direction.RIGHT;
    let dirD= Direction.UP;

    console.log(dirA,dirB,dirC,dirD);

    let compA= Compass.EAST;
    let compb=Compass.NORTH;
    let compc=Compass.WEST;
    let compd=Compass.SOUTH;

    console.log(compA,compb,compc,compd)
}


checkResponse(response:ResponseType){
   let property=response;
   let value=Response[property];
   console.log(property,value);
}

}
