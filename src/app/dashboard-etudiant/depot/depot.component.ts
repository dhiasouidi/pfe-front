import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
    let date=new Date();
    let comparedDated=new Date(new Date("30-04").setFullYear(new Date().getFullYear()));
    if (date<=comparedDated){
      this.Router.navigate(['/'])
    }
  }

}
