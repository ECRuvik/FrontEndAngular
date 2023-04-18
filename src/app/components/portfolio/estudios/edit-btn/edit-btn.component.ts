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

  ngOnInit(): void {
    this.study.about = this.study.about.replace(/<br>/g, '\n');
  }

  onSubmit(): void {
    if (this.study) {
      this.study.about = this.study.about.replace(/\n/g, '<br>');
      if (this.study.logo_url == '') {
        this.study.logo_url =
          'https://cdn-icons-png.flaticon.com/512/85/85488.png';
      }
      this.studyServ
        .update(this.study.study_id, this.study)
        .subscribe((data) => {
          this.onEditStudy.emit(data);
          this.closeEditBtn.emit(true);
        });
    }
  }
}
