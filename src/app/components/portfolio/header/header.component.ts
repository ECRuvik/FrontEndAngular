import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/model/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logged = false;
  personData: any;

  constructor(private personServ: DataService, private router: Router) {
    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  ngOnInit(): void {
    this.personServ.getAll().subscribe((data) => {
      this.personData = data;
    });
  }

  scrollTo(componentId: string): void {
    const element = document.getElementById(componentId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
