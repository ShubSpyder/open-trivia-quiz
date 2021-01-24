import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent implements OnInit {
  constructor() {}

  name: string;

  ngOnInit(): void {}
  getName(): void {
    localStorage.setItem('name', this.name);
  }
}
