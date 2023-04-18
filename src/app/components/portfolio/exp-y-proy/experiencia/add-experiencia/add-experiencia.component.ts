import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css'],
})
export class AddExperienciaComponent implements OnInit {
  newJob: Job = new Job(0, '', '', '', '', '', '');

  @Output() onAddJob: EventEmitter<Job> = new EventEmitter();
  @Output() closeAddExpBtn = new EventEmitter<boolean>();

  constructor(private jobServ: JobService) {}

  ngOnInit(): void {}

  close(): void {
    this.closeAddExpBtn.emit(true);
  }

  onSubmit(): void {
    if (
      this.newJob.name == '' ||
      this.newJob.about == '' ||
      this.newJob.position == ''
    ) {
      alert(
        'La experiencia debe tener al menos un nombre, descripción y posición.'
      );
      return;
    }
    this.newJob.about = this.newJob.about.replace(/\n/g, '<br>');
    if (this.newJob.logo_url == '') {
      this.newJob.logo_url =
        'https://cdn-icons-png.flaticon.com/512/85/85488.png';
    }
    this.jobServ.create(this.newJob).subscribe((data) => {
      this.onAddJob.emit(data);
      this.closeAddExpBtn.emit(true);
    });
  }
}
