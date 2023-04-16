import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  jobsData: any;
  showEditBtn = false;
  selectedJob: any;

  @Output() jobEvent = new EventEmitter<Job>();

  constructor(private jobServ: JobService) {}

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

  edit(job: Job): void {
    this.selectedJob = job;
    this.jobEvent.emit(job);
    this.showEditBtn = true;
  }
}
