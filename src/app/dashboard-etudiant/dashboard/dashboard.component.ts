import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private _Router:Router,private _route:ActivatedRoute) {
    this.loadScripts();
   }
  infos = JSON.parse(localStorage.getItem('userinfo'))

  ngOnInit(): void {
    let role=localStorage.getItem("role");
    if (role !="etudiant"){
      this._Router.navigate(['/'+role])
    }
  }

  loadScripts() {
    const dynamicScripts = [
      '../../../assets/js/scripts.bundle.js?v=7.0.5',
     //'../../../assets/plugins/global/plugins.bundle.js?v=7.0.5',
     '../../../assets/plugins /custom/prismjs/prismjs.bundle.js?v=7.0.5',
     '../../../assets/js/pages/widgets.js?v=7.0.5',
     '../../../assets/plugins/custom/fullcalendar/fullcalendar.bundle.js?v=7.0.5',
     '../../../assets/js/pages/custom/projects/list-datatable.js?v=7.0.5',
     '../../../assets/js/pages/crud/ktdatatable/advanced/vertical.js',

    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
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
