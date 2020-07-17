import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUserSubject: any;

  constructor(private _Router:Router) { }

  ngOnInit(): void {
    let role=localStorage.getItem("role");
    if (role !="enseignant"){
      this._Router.navigate(['/'+role])
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('userinfo');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.currentUserSubject.next(null);
    this._Router.navigate(['/'])
}

}
