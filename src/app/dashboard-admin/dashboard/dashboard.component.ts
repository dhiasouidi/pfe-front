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
    this.loadScripts();

    let role=localStorage.getItem("role");
    if (role !="admin"){
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
     '../../../assets/js/pages/crud/file-upload/dropzonejs.js?v=7.0.5'

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
