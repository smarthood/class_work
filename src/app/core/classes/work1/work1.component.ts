import { Component } from '@angular/core';

@Component({
  selector: 'app-work1',
  templateUrl: './work1.component.html',
  styleUrls: ['./work1.component.scss']
})
export class Work1Component {
isShow=false;
onClick(){
  this.isShow=!this.isShow
}
}
