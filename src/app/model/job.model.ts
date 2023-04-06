export class Job {
  job_id: number;
  about: string;
  endDate: string;
  logo_url: string;
  name: string;
  position: string;
  startDate: string;

  constructor(
    job_id: number,
    about: string,
    endDate: string,
    logo_url: string,
    name: string,
    position: string,
    startDate: string
  ) {
    this.job_id = job_id;
    this.about = about;
    this.endDate = endDate;
    this.logo_url = logo_url;
    this.name = name;
    this.position = position;
    this.startDate = startDate;
  }
}
