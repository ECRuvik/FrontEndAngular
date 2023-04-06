import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/model/study.model';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {
  studiesData: any;

  constructor(private studiesServ: StudyService) {}

  ngOnInit(): void {
    this.seeStudies();
  }

  seeStudies(): void {
    this.studiesServ.getAll().subscribe((data) => {
      this.studiesData = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.studiesServ.delete(id).subscribe(
        (data) => {
          this.seeStudies();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
