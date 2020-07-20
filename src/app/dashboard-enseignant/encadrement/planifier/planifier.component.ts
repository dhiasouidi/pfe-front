import { Component, OnInit } from '@angular/core';
import { EncadrementService } from 'src/app/services/encadrement.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-planifier',
  templateUrl: './planifier.component.html',
  styleUrls: ['./planifier.component.css']
})
export class PlanifierComponent implements OnInit {

  constructor(private _EncadrementService:EncadrementService,private _ActivatedRoute:ActivatedRoute,private DatePipe :DatePipe) { }

  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.paramMap.get('id');
  }
  id;
  date;
  time:string;
  planifier()
  {
    console.log(this.time)

    let date=new Date(new Date(this.date).setHours(parseInt(this.time.toString().substr(0,2))));
    date=new Date(date.setMinutes(parseInt(this.time.toString().substr(3,2))))
    let dateformated=this.DatePipe.transform(date,'yyyy-MM-dd HH:mm:ss')
    console.log(dateformated)
    let body={
      DATE_SEANCE:dateformated,
      SUJET_ID:this.id
    }
    this._EncadrementService.post(body).subscribe(
      data=>{
        if (data)
        console.log(data)
      },error => console.log(error)

    )

  }

}
