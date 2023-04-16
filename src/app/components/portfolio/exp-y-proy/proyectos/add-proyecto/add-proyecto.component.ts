import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyect } from 'src/app/model/proyect.model';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  newProy: Proyect = new Proyect(0, '', '', '', '', '', '', '', '', '');

  @Output() onAddProy: EventEmitter<Proyect> = new EventEmitter();
  @Output() closeAddProyBtn = new EventEmitter<boolean>();

  constructor(private proyServ: ProyectService) {}

  ngOnInit(): void {}

  close(): void {
    this.closeAddProyBtn.emit(true);
  }

  onSubmit(): void {
    if (
      this.newProy.name == '' ||
      this.newProy.about == '' ||
      this.newProy.position == '' ||
      this.newProy.status == ''
    ) {
      alert('El proyecto debe tener al menos un nombre, descripción, posición y estado.');
      return;
    }
    this.newProy.about = this.newProy.about.replace(/\n/g, '<br>');
    this.proyServ.create(this.newProy).subscribe((data) => {
      this.onAddProy.emit(data);
      this.closeAddProyBtn.emit(true);
      console.log(data);
    });
  }
}
