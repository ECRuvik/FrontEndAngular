import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  abilitiesList:any;

  constructor(private skillServ:SkillService) { }

  ngOnInit(): void {
    this.skillServ.getSkills().subscribe(data => {
      this.abilitiesList = data;
    });
  }
}
