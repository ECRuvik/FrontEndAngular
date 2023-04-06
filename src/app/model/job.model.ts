export class Job {
  id?: number;
  about: string;
  endDate: string;
  logoUrl: string;
  name: string;
  position: string;
  startDate: string;

	constructor(about: string, endDate: string, logoUrl: string, name: string, position: string, startDate: string) {
    this.about = about;
    this.endDate = endDate;
    this.logoUrl = logoUrl;
    this.name = name;
    this.position = position;
    this.startDate = startDate;
	}

}
