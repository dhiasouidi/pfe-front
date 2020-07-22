import { Component, OnInit } from '@angular/core';
import { Soutenance } from 'src/app/Models/Soutenance';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {

  constructor() { }
  soutenances:[Soutenance]

  ngOnInit(): void {
  }

}
