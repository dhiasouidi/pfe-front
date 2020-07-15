import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-profile',
  templateUrl: './consulter-profile.component.html',
  styleUrls: ['./consulter-profile.component.css']
})
export class ConsulterProfileComponent implements OnInit {

  constructor() { }
  click1=true;
  click2=false;
  click3=false;

  ngOnInit(): void {
  }
changemenue1(){
this.click1=true;
this.click2=false;
this.click3=false;

}
changemenue2(){
  this.click2=true;
  this.click1=false;
  this.click3=false;

  }
  changemenue3(){
    this.click3=true;
    this.click2=false;
    this.click1=false;

    }

}
