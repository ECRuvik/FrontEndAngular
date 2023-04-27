import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyect } from 'src/app/model/proyect.model';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  logged = false;
  proyectData: any;
  showEditBtn = false;
  selectedProy: any;

  @Output() proyEvent = new EventEmitter<Proyect>();

  constructor(private proyServ: ProyectService) {
    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  ngOnInit(): void {
    this.seeProyects();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  }

  seeProyects(): void {
    this.proyServ.getAll().subscribe((data) => {
      this.proyectData = data.map((proyect) => ({
        ...proyect,
        startDate: this.formatDate(proyect.startDate),
        endDate: this.formatDate(proyect.endDate),
        year: new Date(proyect.startDate).getFullYear().toString(),
      }));
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
