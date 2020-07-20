import { Component, OnInit } from '@angular/core';
import { EncadrementService } from 'src/app/services/encadrement.service';
import { SeanceEncadrement } from 'src/app/Models/SeanceEncadrement';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  constructor(private _EncadrementService:EncadrementService) { }
  month=new Date().getMonth()+1;
  year=new Date().getFullYear();
  fetcheddata:[SeanceEncadrement];
  data=[]
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];  Arr = Array; //Array type captured in a variable
  next(){
    this.month+=1;
    let rech=(day,month,year)=>{
      let data=[]
      for (let encad of this.fetcheddata){


        if (new Date(encad.DATE_SEANCE).getMonth()+1==month&&new Date(encad.DATE_SEANCE).getFullYear()==year&&new Date(encad.DATE_SEANCE).getDate()==day)
        data.push(encad)
      }
      return data;

    }
    this._EncadrementService.get(this.month,this.year).subscribe((res:[SeanceEncadrement])=>{
      this.fetcheddata=res;

      let now = new Date();
      let numberofdays= new Date(now.getFullYear(), this.month, 0).getDate();
      this.data=[]

      for (let i=1;i<=numberofdays;i++){
        let filtreddate={
          dd:i,
          mm:this.month,
          yy:this.year,
          date:rech(i,this.month,this.year)
        }
        this.data.push(filtreddate)
      }
      console.log(this.data)

    })
  }
  prev(){
    this.month-=1;
    let rech=(day,month,year)=>{
      let data=[]
      for (let encad of this.fetcheddata){


        if (new Date(encad.DATE_SEANCE).getMonth()+1==month&&new Date(encad.DATE_SEANCE).getFullYear()==year&&new Date(encad.DATE_SEANCE).getDate()==day)
        data.push(encad)
      }
      return data;

    }
    this._EncadrementService.get(this.month,this.year).subscribe((res:[SeanceEncadrement])=>{
      this.fetcheddata=res;

      let now = new Date();
      let numberofdays= new Date(now.getFullYear(), this.month, 0).getDate();
      this.data=[]
      for (let i=1;i<=numberofdays;i++){
        let filtreddate={
          dd:i,
          mm:this.month,
          yy:this.year,
          date:rech(i,this.month,this.year)
        }
        this.data.push(filtreddate)
      }
      console.log(this.data)

    })

  }
  ngOnInit(): void {
    let rech=(day,month,year)=>{
      let data=[]
      for (let encad of this.fetcheddata){


        if (new Date(encad.DATE_SEANCE).getMonth()+1==month&&new Date(encad.DATE_SEANCE).getFullYear()==year&&new Date(encad.DATE_SEANCE).getDate()==day)
        data.push(encad)
      }
      return data;

    }
    this._EncadrementService.get(this.month,this.year).subscribe((res:[SeanceEncadrement])=>{
      this.fetcheddata=res;

      let now = new Date();
      let numberofdays= new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
      for (let i=1;i<=numberofdays;i++){
        let filtreddate={
          dd:i,
          mm:this.month,
          yy:this.year,
          date:rech(i,this.month,this.year)
        }
        this.data.push(filtreddate)
      }
      console.log(this.data)

    })
  }

}
