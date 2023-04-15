export class Proyect {
  proyect_id?: number;
  about: string;
  endDate: Date;
  logoUrl: string;
  name: string;
  status: string;
  startDate: Date;
  type: string;
  url: string;

  constructor(
    about: string,
    endDate: Date,
    logoUrl: string,
    name: string,
    status: string,
    type: string,
    startDate: Date,
    url: string
  ) {
    this.about = about;
    this.endDate = endDate;
    this.logoUrl = logoUrl;
    this.name = name;
    this.status = status;
    this.startDate = startDate;
    this.type = type;
    this.url = url;
  }
}
