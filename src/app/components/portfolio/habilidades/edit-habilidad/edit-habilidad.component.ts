import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  @Input() skill!: Skill;
  @Output() onEditSkill: EventEmitter<Skill> = new EventEmitter();
  @Output() closeEditBtn = new EventEmitter<boolean>();

  constructor(private skillServ: SkillService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.skill) {
      this.skillServ
        .update(this.skill.skill_id, this.skill)
        .subscribe((data) => {
          this.onEditSkill.emit(data);
          this.closeEditBtn.emit(true);
        });
    }
  }
}
