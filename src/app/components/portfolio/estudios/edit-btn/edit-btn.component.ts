import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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

  constructor(private studyServ: StudyService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.study) {
      this.studyServ
        .update(this.study.study_id, this.study)
        .subscribe((data) => {
          this.onEditStudy.emit(data);
          this.closeEditBtn.emit(true);
        });
    }
  }
}
