import { Component, OnInit } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectList: any;

  constructor(private proyectServ: ProyectService) {}

  ngOnInit(): void {
    this.proyectServ.getAll().subscribe((data) => {
      this.proyectList = data;
    });
  }
}
