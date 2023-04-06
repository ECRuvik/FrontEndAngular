export class Study {
  id?: number;
  about: string;
  endDate: string;
  institution: string;
  logoUrl: string;
  name: string;
  title: string;
  startDate: string;

	constructor(about: string, endDate: string, institution: string, logoUrl: string, name: string, title: string, startDate: string) {
    this.about = about;
    this.endDate = endDate;
    this.institution = institution;
    this.logoUrl = logoUrl;
    this.name = name;
    this.title = title;
    this.startDate = startDate;
	}

}
