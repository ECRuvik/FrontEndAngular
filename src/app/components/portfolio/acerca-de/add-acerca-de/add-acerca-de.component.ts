import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/model/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-acerca-de',
  templateUrl: './add-acerca-de.component.html',
  styleUrls: ['./add-acerca-de.component.css'],
})
export class AddAcercaDeComponent implements OnInit {
  newPerson: Data = new Data(0, '', '', '', '', '', '', '', '', '');

  @Output() onAddPerson: EventEmitter<Data> = new EventEmitter();
  @Output() closeAddBtn = new EventEmitter<boolean>();

  constructor(private personServ: DataService) {}

  ngOnInit(): void {}

  close(): void {
    this.closeAddBtn.emit(true);
  }

  onSubmit(): void {
    if (
      this.newPerson.name == '' ||
      this.newPerson.lastName == '' ||
      this.newPerson.position == '' ||
      this.newPerson.about == ''
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    } else {
      this.newPerson.fullName =
        this.newPerson.name + ' ' + this.newPerson.lastName;
      this.newPerson.about = this.newPerson.about.replace(/\n/g, '<br>');
      this.newPerson.resume = this.newPerson.resume.replace(/\n/g, '<br>');
      if (this.newPerson.url_img == '') {
        this.newPerson.url_img =
          'https://cdn-icons-png.flaticon.com/512/85/85488.png';
      }
      this.personServ.create(this.newPerson).subscribe((data) => {
        this.onAddPerson.emit(data);
        this.closeAddBtn.emit(true);
      });
    }
  }
}
