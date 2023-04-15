export class Skill {
  skill_id: number;
  level: number;
  name: string;

  constructor(skill_id: number, level: number, name: string) {
    this.skill_id = skill_id;
    this.level = level;
    this.name = name;
  }
}
