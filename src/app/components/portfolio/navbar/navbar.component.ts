import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logged = false;
  miPortfolio: any;
  navShown: boolean = false;

  constructor(private auth: AuthService) {
    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  ngOnInit(): void {}

  toggleNav(): void {
    const containerNav: any = document.getElementById('container_nav');
    const containerNavToggle: any = document.getElementById('container_nav_toggle');
    if (!this.navShown) {
      containerNav.style.display = 'block';
      containerNavToggle.style.flexDirection = 'row';
      containerNavToggle.style.width = '120px';
      this.navShown = true;
    } else {
      containerNav.style.display = 'none';
      containerNavToggle.style.flexDirection = 'column';
      containerNavToggle.style.width = '60px';
      this.navShown = false;
    }
  }

  scrollTo(componentId: string): void {
    const element = document.getElementById(componentId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  logout() {
    this.auth.logout();
  }
}
