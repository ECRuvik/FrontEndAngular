import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyect } from 'src/app/model/proyect.model';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css'],
})
export class EditProyectoComponent implements OnInit {
  @Input() proy!: Proyect;
  @Output() onEditProy: EventEmitter<Proyect> = new EventEmitter();
  @Output() closeEditBtn = new EventEmitter<boolean>();

  constructor(private proyServ: ProyectService) {}

  ngOnInit(): void {
    this.proy.about = this.proy.about.replace(/<br>/g, '\n');}

  onSubmit(): void {
    if (this.proy) {
      this.proy.about = this.proy.about.replace(/\n/g, '<br>');
      if (this.proy.logo_url == '') {
        this.proy.logo_url =
          'https://cdn-icons-png.flaticon.com/512/85/85488.png';
      }
      this.proyServ
        .update(this.proy.proyect_id, this.proy)
        .subscribe((data) => {
          this.onEditProy.emit(data);
          this.closeEditBtn.emit(true);
        });
    }
  }
}
