import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyect } from 'src/app/model/proyect.model';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectData: any;
  showEditBtn = false;
  selectedProy: any;

  @Output() proyEvent = new EventEmitter<Proyect>();

  constructor(private proyServ: ProyectService) {}

  ngOnInit(): void {
    this.seeProyects();
  }

  seeProyects(): void {
    this.proyServ.getAll().subscribe((data) => {
      this.proyectData = data;
    });
  }

  editProyect(proy: Proyect) {
    this.proyServ.update(proy.proyect_id, proy).subscribe((data) => {
      this.proyectData.push(data);
      this.seeProyects();
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      if (window.confirm('¿Estas seguro que deseas borrar este elemento?')) {
        this.proyServ.delete(id).subscribe(
          (data) => {
            this.seeProyects();
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        return;
      }
    }
  }

  edit(proy: Proyect): void {
    this.selectedProy = proy;
    this.proyEvent.emit(proy);
    this.showEditBtn = true;
  }
}
