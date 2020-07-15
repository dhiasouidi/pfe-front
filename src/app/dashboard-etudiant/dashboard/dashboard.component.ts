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

  ngOnInit(): void {
    let role=localStorage.getItem("role");
    if (role !="etudiant"){
      window.location.replace("http://localhost:4200/"+role)
      //this._Router.navigate(['/enseignant'])



    }
  }
  loadScripts() {
    const dynamicScripts = [
     '../../../assets/plugins/global/plugins.bundle.js?v=7.0.5',
     '../../../assets/plugins /custom/prismjs/prismjs.bundle.js?v=7.0.5',
     '../../../assets/js/scripts.bundle.js?v=7.0.5',
     '../../../assets/js/pages/widgets.js?v=7.0.5',
     '../../../assets/plugins/custom/fullcalendar/fullcalendar.bundle.js?v=7.0.5',
     '../../../assets/js/pages/custom/projects/list-datatable.js?v=7.0.5',
     '../../../assets/js/pages/crud/ktdatatable/advanced/vertical.js',
     'var KTAppSettings = { "breakpoints": { "sm": 576, "md": 768, "lg": 992, "xl": 1200, "xxl": 1200 }, "colors": { "theme": { "base": { "white": "#ffffff", "primary": "#8950FC", "secondary": "#E5EAEE", "success": "#1BC5BD", "info": "#6993FF", "warning": "#FFA800", "danger": "#F64E60", "light": "#F3F6F9", "dark": "#212121" }, "light": { "white": "#ffffff", "primary": "#EEE5FF", "secondary": "#ECF0F3", "success": "#C9F7F5", "info": "#E1E9FF", "warning": "#FFF4DE", "danger": "#FFE2E5", "light": "#F3F6F9", "dark": "#D6D6E0" }, "inverse": { "white": "#ffffff", "primary": "#ffffff", "secondary": "#212121", "success": "#ffffff", "info": "#ffffff", "warning": "#ffffff", "danger": "#ffffff", "light": "#464E5F", "dark": "#ffffff" } }, "gray": { "gray-100": "#F3F6F9", "gray-200": "#ECF0F3", "gray-300": "#E5EAEE", "gray-400": "#D6D6E0", "gray-500": "#B5B5C3", "gray-600": "#80808F", "gray-700": "#464E5F", "gray-800": "#1B283F", "gray-900": "#212121" } }, "font-family": "Poppins" };',
    'var HOST_URL = "https://keenthemes.com/metronic/tools/preview"',

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
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.currentUserSubject.next(null);
    this._Router.navigate([''])
}
}
