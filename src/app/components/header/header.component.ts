import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  person: any;

  constructor(private dataServ: DataService) {}

  ngOnInit(): void {
    this.dataServ.getAll().subscribe((data) => {
      this.person = data;
    });
  }
}
