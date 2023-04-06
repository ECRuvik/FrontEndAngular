import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  jobsList: any;

  constructor(private jobServ: JobService) {}

  ngOnInit(): void {
    this.seeJobs();
  }

  seeJobs(): void {
    this.jobServ.getAll().subscribe((data) => {
      this.jobsList = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.jobServ.delete(id).subscribe(
        (data) => {
          this.seeJobs();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
