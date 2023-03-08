import { Component } from '@angular/core';

@Component({
  selector: 'app-work3',
  templateUrl: './work3.component.html',
  styleUrls: ['./work3.component.scss']
})
export class Work3Component {
vertical=["none","start","center","end","space-around","space-between","space-evenly"]
horizontal=["none","start","center","end","stretch"]

vert="start"
hor="stretch"

onVert(item:string){
  this.vert=item
}
onHor(item1:string){
  this.hor=item1
}

}
