import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/model/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  @Input() person!: Data;
  @Output() onEditPerson: EventEmitter<Data> = new EventEmitter();
  @Output() closeEditBtn = new EventEmitter<boolean>();

  constructor(private personServ: DataService) {}

  ngOnInit(): void {}

  close(): void {
    this.closeEditBtn.emit(true);
  }

  onSubmit(): void {
    if (this.person) {
      // Ya sé que es una mala practica guardar en mi base de datos el
      // atributo lastName pero es para demostrar que puedo crear este
      // tipo de código <3
      this.person.fullName = this.person.name + ' ' + this.person.lastName;
      this.person.about = this.person.about.replace(/\n/g, '<br>');
      this.person.resume = this.person.resume.replace(/\n/g, '<br>');
      this.personServ
        .update(this.person.data_id, this.person)
        .subscribe((data) => {
          this.onEditPerson.emit(data);
          this.closeEditBtn.emit(true);
        });
    }
  }
}
