import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  skillData: any;
  showAddBtn = false;
  showEditBtn = false;
  selectedSkill: any;

  @Output() skillEvent = new EventEmitter<Skill>();

  constructor(private skillServ: SkillService) {}

  ngOnInit(): void {
    this.seeSkill();
  }

  seeSkill(): void {
    this.skillServ.getAll().subscribe((data) => {
      this.skillData = data;
    });
  }

  addSkill(skill: Skill) {
    this.skillServ.create(skill).subscribe((data) => {
      this.skillData.push(data);
      this.seeSkill();
    });
  }

  editSkill(skill: Skill) {
    this.skillServ.update(skill.skill_id, skill).subscribe((data) => {
      this.skillData.push(data);
      this.seeSkill();
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillServ.delete(id).subscribe(
        (data) => {
          this.seeSkill();
        });
    }
  }

  add(): void {
    this.showAddBtn = true;
  }

  edit(skill: Skill): void {
    this.selectedSkill = skill;
    this.skillEvent.emit(skill);
    this.showEditBtn = true;
  }
}
