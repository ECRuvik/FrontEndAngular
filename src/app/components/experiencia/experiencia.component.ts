import { Component } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  jobsList:any = new Job('', '', '', '', '', '');

  constructor(private jobServ:JobService) { }

  ngOnInit(): void {
    this.jobServ.getJobs().subscribe(data => {
      this.jobsList = data;
    });
  }
}
