import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.style.backgroundColor = "black"
  }
  goToElement(desination: string){
    let target = document.getElementById(desination);
    target.scrollIntoView();
  }
}
