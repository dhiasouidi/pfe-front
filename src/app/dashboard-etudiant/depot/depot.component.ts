import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepotService } from 'src/app/services/depot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  constructor(private Router:Router,private _DepotService:DepotService) { }
   rapportupload=(fd)=>{
    return new Promise((resolve)=>{
      this._DepotService.uploadRapport(fd).subscribe((res:any)=>{
        resolve(res)
      })
    })
  }
  ngOnInit(): void {
    let date=new Date();
    let comparedDated=new Date(new Date("30-04").setFullYear(new Date().getFullYear()));
    if (date<=comparedDated){
      this.Router.navigate(['/'])
    }
  }
  fd
_photoToUpload: any;
  readUrl(event: any) {
    this.fd = new FormData();
     if (event.target.files && event.target.files[0]) {
       this._photoToUpload = <File>event.target.files[0];
       this.fd.append('files', this._photoToUpload, this._photoToUpload.name);
     }
   }


}
