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
      this.person.fullName = this.person.name + ' ' + this.person.lastName;
      this.personServ
        .update(this.person.data_id, this.person)
        .subscribe((data) => {
          this.onEditPerson.emit(data);
          this.closeEditBtn.emit(true);
        });
    }
  }
}
