import { Component, OnInit } from '@angular/core';
import {PortfolioService} from './../portfolio.service';

@Component({
  selector: 'app-portfolio-reviwe',
  templateUrl: './portfolio-reviwe.component.html',
  styleUrls: ['./portfolio-reviwe.component.sass']
})
export class PortfolioReviweComponent implements OnInit {
  data : any
  constructor(private portfolioService: PortfolioService) {

  }

  ngOnInit() {

    this.portfolioService.getData().subscribe(value => this.data = value);
    console.log('====================================');
    console.log(this.data);
    console.log('====================================');
  }


}
