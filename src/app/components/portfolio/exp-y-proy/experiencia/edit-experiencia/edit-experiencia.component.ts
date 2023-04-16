import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent implements OnInit {
  @Input() job!: Job;
  @Output() onEditJob: EventEmitter<Job> = new EventEmitter();
  @Output() closeEditBtn = new EventEmitter<boolean>();

  constructor(private jobServ: JobService) {}

  ngOnInit(): void {
    this.job.about = this.job.about.replace(/<br>/g, '\n');
  }

  onSubmit(): void {
    if (this.job) {
      this.job.about = this.job.about.replace(/\n/g, '<br>');
      this.jobServ.update(this.job.job_id, this.job).subscribe((data) => {
        this.onEditJob.emit(data);
        this.closeEditBtn.emit(true);
      });
    }
  }
}
