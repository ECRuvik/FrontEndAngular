import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  logged = false;
  jobsData: any;
  showEditBtn = false;
  selectedJob: any;

  @Output() jobEvent = new EventEmitter<Job>();

  constructor(private jobServ: JobService) {
    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  ngOnInit(): void {
    this.seeJobs();
  }

  seeJobs(): void {
    this.jobServ.getAll().subscribe((data) => {
      this.jobsData = data;
    });
  }

  editJob(job: Job) {
    this.jobServ.update(job.job_id, job).subscribe((data) => {
      this.jobsData.push(data);
      this.seeJobs();
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      if (window.confirm('¿Estas seguro que deseas borrar este elemento?')) {
        this.jobServ.delete(id).subscribe(
          (data) => {
            this.seeJobs();
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        return;
      }
    }
  }

  edit(job: Job): void {
    this.selectedJob = job;
    this.jobEvent.emit(job);
    this.showEditBtn = true;
  }
}
