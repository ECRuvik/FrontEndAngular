import { Component } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { Proyect } from 'src/app/model/proyect.model';
import { JobService } from 'src/app/services/job.service';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-exp-y-proy',
  templateUrl: './exp-y-proy.component.html',
  styleUrls: ['./exp-y-proy.component.css'],
})
export class ExpYProyComponent {
  jobsData: any;
  proyData: any;
  showAddExpBtn = false;
  showAddProyBtn = false;

  constructor(private jobServ: JobService, private proyServ: ProyectService) {}

  ngOnInit(): void {}

  seeJobs(): void {
    this.jobServ.getAll().subscribe((data) => {
      this.jobsData = data;
    });
  }

  seeProy(): void {
    this.proyServ.getAll().subscribe((data) => {
      this.proyData = data;
    });
  }

  addJob(job: Job) {
    this.jobServ.create(job).subscribe((data) => {
      this.jobsData.push(data);
    });
  }

  addProy(proy: Proyect) {
    this.proyServ.create(proy).subscribe((data) => {
      this.proyData.push(data);
    });
  }

  openAddExp(): void {
    this.showAddExpBtn = true;
  }

  openAddProy(): void {
    this.showAddProyBtn = true;
  }
}
