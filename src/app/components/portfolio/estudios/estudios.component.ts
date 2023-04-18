import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Study } from 'src/app/model/study.model';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {
  logged = false;
  studiesData: any;
  showAddBtn = false;
  showEditBtn = false;
  selectedStudy: any;

  @Output() studyEvent = new EventEmitter<Study>();

  constructor(private studiesServ: StudyService) {
    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  ngOnInit(): void {
    this.seeStudies();
  }

  seeStudies(): void {
    this.studiesServ.getAll().subscribe((data) => {
      this.studiesData = data;
    });
  }

  addStudy(study: Study) {
    this.studiesServ.create(study).subscribe((data) => {
      this.studiesData.push(data);
      this.seeStudies();
    });
  }

  editStudy(study: Study) {
    this.studiesServ.update(study.study_id, study).subscribe((data) => {
      this.studiesData.push(data);
      this.seeStudies();
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      // No creé un modal ya que me pareció uso de código innecesario
      // sabiendo que ya demostré saber crear modales.
      if (window.confirm('¿Estas seguro que deseas borrar este elemento?')) {
        this.studiesServ.delete(id).subscribe((data) => {
          this.seeStudies();
        });
      } else {
        return;
      }
    }
  }

  add(): void {
    this.showAddBtn = true;
  }

  edit(study: Study): void {
    this.selectedStudy = study;
    this.studyEvent.emit(study);
    this.showEditBtn = true;
  }
}
