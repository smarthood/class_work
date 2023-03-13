import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-work3',
  templateUrl: './work3.component.html',
  styleUrls: ['./work3.component.scss']
})
export class Work3Component {
@Input() direct:string ="row"
@Input() gap:number =5
vertical=["none","start","center","end","space-around","space-between","space-evenly"]
horizontal=["none","start","center","end","stretch"]
box:any=[]
i=1
vert="start"
hor="stretch"

onInc(){
  if(this.i<=10){
    this.box.push(this.i++)
  }
}
onDec(){
  if(this.i>1){
    this.box.pop()
    this.i--
  }
}
onVert(item:string){
  this.vert=item
}
onHor(item1:string){
  this.hor=item1
}

}
