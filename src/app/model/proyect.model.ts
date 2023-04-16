export class Proyect {
  proyect_id: number;
  about: string;
  endDate: string;
  logo_url: string;
  name: string;
  status: string;
  position: string;
  startDate: string;
  type: string;
  url: string;

  constructor(
    proyect_id: number,
    about: string,
    endDate: string,
    logo_url: string,
    name: string,
    status: string,
    position: string,
    type: string,
    startDate: string,
    url: string
  ) {
    this.proyect_id = proyect_id;
    this.about = about;
    this.endDate = endDate;
    this.logo_url = logo_url;
    this.name = name;
    this.status = status;
    this.position = position;
    this.startDate = startDate;
    this.type = type;
    this.url = url;
  }
}
