import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio1',
  templateUrl: './portfolio1.component.html',
  styleUrls: ['./portfolio1.component.css']
})
export class Portfolio1Component implements OnInit {


  ngOnInit(): void {
    // Initialization logic here
  }

  data = {

     title :  "hi my name maha" ,
     bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora explicabo quae quod deserunt eius sapiente solutions for complex problems",

     project : [ { id: 1 , data : ""}]
  }

}
