import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Study } from 'src/app/model/study.model';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.css'],
})
export class AddBtnComponent implements OnInit {
  newStudy: Study = new Study(0, '', '', '', '', '', '', '');

  @Output() onAddStudy: EventEmitter<Study> = new EventEmitter();
  @Output() closeAddBtn = new EventEmitter<boolean>();

  constructor(private studyServ: StudyService) {}

  ngOnInit(): void {}

  close(): void {
    this.closeAddBtn.emit(true);
  }

  onSubmit(): void {
    if (
      this.newStudy.name == '' ||
      this.newStudy.about == '' ||
      this.newStudy.title == ''
    ) {
      alert('El estudio debe tener al menos un nombre, descripción y título.');
      return;
    }
    this.newStudy.about = this.newStudy.about.replace(/\n/g, '<br>');
    if (this.newStudy.logo_url == '') {
      this.newStudy.logo_url =
        'https://cdn-icons-png.flaticon.com/512/85/85488.png';
    }
    this.studyServ.create(this.newStudy).subscribe((data) => {
      this.onAddStudy.emit(data);
      this.closeAddBtn.emit(true);
    });
  }
}
