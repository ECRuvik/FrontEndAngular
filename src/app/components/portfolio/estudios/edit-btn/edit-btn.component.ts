import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Study } from 'src/app/model/study.model';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css'],
})
export class EditBtnComponent implements OnInit {
  @Input() study!: Study;
  @Output() onEditStudy: EventEmitter<Study> = new EventEmitter();
  @Output() closeEditBtn = new EventEmitter<boolean>();
  @ViewChild('studyForm') studyForm!: NgForm;

  originalStudy!: Study;
  formChanged: boolean = false;

  constructor(private studyServ: StudyService) {}

  ngOnInit(): void {
    this.originalStudy = { ...this.study };
  }

  cancel(form: NgForm): void {
    this.study = { ...this.originalStudy };
        form.resetForm(this.originalStudy);
        this.formChanged = false;
  }

  close(): void {
    if (!this.formChanged) {
      this.closeEditBtn.emit(true);
    } else {
      console.log('Form has unsaved changes. Are you sure you want to close?');
    }
  }

  onSubmit(): void {
    if (this.study) {
      this.studyServ
        .update(this.study.study_id, this.study)
        .subscribe((data) => {
          this.onEditStudy.emit(data);
          this.formChanged = false;
          this.closeEditBtn.emit(true);
        });
    }
  }

  onFormChange(): void {
    this.formChanged = true;
  }

  resetForm(form: NgForm): void {
    this.study = { ...this.originalStudy };
    form.resetForm(this.originalStudy);
    this.formChanged = false;
  }
}
