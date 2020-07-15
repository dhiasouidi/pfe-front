import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-enseignant',
  templateUrl: './dashboard-enseignant.component.html',
  styleUrls: ['./dashboard-enseignant.component.css']
})
export class DashboardEnseignantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let role=localStorage.getItem("role");
    console.log(role)

    if (role !="enseignant"){
      console.log(role)
      window.location.replace("http://localhost:4200/"+role)
      //this._Router.navigate(['/enseignant'])



    }
  }

}
