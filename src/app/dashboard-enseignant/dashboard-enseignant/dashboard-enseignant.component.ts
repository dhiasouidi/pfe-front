import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-enseignant',
  templateUrl: './dashboard-enseignant.component.html',
  styleUrls: ['./dashboard-enseignant.component.css']
})
export class DashboardEnseignantComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
    let role=localStorage.getItem("role");
    if (role !="enseignant"){
      this._Router.navigate(['/'+role])
    }
  }

}
