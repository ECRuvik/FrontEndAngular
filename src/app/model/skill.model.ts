export class Skill {
  id?: number;
  level: number;
  name: string;

  constructor(level: number, name: string) {
    this.level = level;
    this.name = name;
  }
}
