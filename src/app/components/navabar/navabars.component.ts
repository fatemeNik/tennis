import { templateJitUrl, templateSourceUrl } from '@angular/compiler';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navabars',
  templateUrl: './navabars.component.html',
  styleUrls: ['./navabars.component.scss']

})
export class NavabarsComponent implements OnInit {

  myimage1: string = "assets/images/atp-logo.svg"
  // myimage2: string = "assets/images/816149.jpg"


  constructor() { }

  ngOnInit() {
  }

}
