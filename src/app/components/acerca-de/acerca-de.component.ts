import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/model/data.model';
import { Job } from 'src/app/model/job.model';
import { DataService } from 'src/app/services/data.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  person: Data = new Data('', '', '', '', '', '', '');
  job: Job = new Job('', '', '', '', '', '');

  constructor(private dataServ:DataService, private jobServ:JobService) { }

  ngOnInit(): void {
    this.dataServ.getData().subscribe(data => {
      this.person = data;
    });
    this.jobServ.getJobs().subscribe(data => {
      this.job = data;
    });
  }
}
