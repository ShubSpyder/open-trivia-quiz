import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public common: CommonService) {}

  randomFact: string;

  ngOnInit(): void {
    this.getFact();
  }
  
  getFact() {
    this.common.getRadomFact().subscribe(
      (response: any) => {
        this.randomFact = response.text;
      },
      (error: any) => {
        console.error('Error while getting random fact ->', error);
        this.randomFact =
          'Pigeons can tell the difference between a painting by Monet and Picasso.';
      }
    );
  }
}
