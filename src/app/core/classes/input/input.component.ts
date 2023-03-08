import { Component, Input, OnChanges,OnDestroy,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnChanges,OnDestroy,OnInit {
  @Input() text:String | undefined
  constructor(){
    console.log("constructor")
  }
  ngOnInit(){
  console.log("ngOnInit");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChange",changes);
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
}
