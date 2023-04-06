import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/model/study.model';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  studiesData: any;

  constructor(private studiesServ:StudyService) { }

  ngOnInit(): void {
    this.studiesServ.getStudies().subscribe(data => {
      this.studiesData = data;
    });
  }
}
