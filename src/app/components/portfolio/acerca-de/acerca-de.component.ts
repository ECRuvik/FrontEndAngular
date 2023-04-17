import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/model/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  personData: any;
  showAddBtn: boolean = false;
  showEditBtn = false;
  selectedPerson: any;

  @Output() personEvent = new EventEmitter<Data>();

  constructor(private personServ: DataService) {}

  ngOnInit(): void {
    this.seePerson();
  }

  seePerson(): void {
    this.personServ.getAll().subscribe((data) => {
      this.personData = data;
    });
  }

  addPerson(person: Data) {
    this.personServ.create(person).subscribe((data) => {
      this.personData.push(data);
      this.seePerson();
    });
  }

  editPerson(person: Data) {
    this.personServ.update(person.data_id, person).subscribe((data) => {
      this.personData.push(data);
      this.seePerson();
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      if (window.confirm('¿Estas seguro que deseas borrar este elemento?')) {
        this.personServ.delete(id).subscribe((data) => {
          this.seePerson();
        });
      } else {
        return;
      }
    }
  }

  add(): void {
    this.showAddBtn = true;
  }

  edit(person: Data): void {
    this.selectedPerson = person;
    this.personEvent.emit(person);
    this.showEditBtn = true;
  }
}
