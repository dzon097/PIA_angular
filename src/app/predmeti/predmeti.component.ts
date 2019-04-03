import { Component, OnInit } from '@angular/core';
// OnInit koristi se za inicijalizaciju necega pre 

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  predmet = "Programiranje internet aplikacija";

  constructor() { }

  ngOnInit() {
  }

}