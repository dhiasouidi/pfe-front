import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    this.loadScripts();

   }

  ngOnInit(): void {
  }
  loadScripts() {
    const dynamicScripts = [
     '../../../assets/plugins/global/plugins.bundle.js?v=7.0.5',
     '../../../assets/plugins/custom/prismjs/prismjs.bundle.js?v=7.0.5',
     '../../../assets/js/scripts.bundle.js?v=7.0.5',
     '../../../assets/js/pages/widgets.js?v=7.0.55',
     '../../../assets/plugins/custom/fullcalendar/fullcalendar.bundle.js?v=7.0.5'

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
}
