export class Study {
  study_id: number;
  about: string;
  endDate: string;
  institution: string;
  logo_url: string;
  name: string;
  title: string;
  startDate: string;

  constructor(
    study_id: number,
    about: string,
    endDate: string,
    institution: string,
    logo_url: string,
    name: string,
    title: string,
    startDate: string
  ) {
    this.study_id = study_id;
    this.about = about;
    this.endDate = endDate;
    this.institution = institution;
    this.logo_url = logo_url;
    this.name = name;
    this.title = title;
    this.startDate = startDate;
  }
}
