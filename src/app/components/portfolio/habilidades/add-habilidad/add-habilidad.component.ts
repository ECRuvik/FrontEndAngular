import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-habilidad',
  templateUrl: './add-habilidad.component.html',
  styleUrls: ['./add-habilidad.component.css']
})
export class AddHabilidadComponent implements OnInit {
  newSkill: Skill = new Skill(0, 0, '');

  @Output() onAddSkill: EventEmitter<Skill> = new EventEmitter();
  @Output() closeAddBtn = new EventEmitter<boolean>();

  constructor(private skillServ: SkillService) {}

  ngOnInit(): void {}

  close(): void {
    this.closeAddBtn.emit(true);
  }

  onSubmit(): void {
    if (
      this.newSkill.name == '' ||
      this.newSkill.level == null
    ) {
      alert('La habilidad debe tener nombre y nivel.');
      return;
    }
    this.skillServ.create(this.newSkill).subscribe((data) => {
      this.onAddSkill.emit(data);
      this.closeAddBtn.emit(true);
    });
  }
}
