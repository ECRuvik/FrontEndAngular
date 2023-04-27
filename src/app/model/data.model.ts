export class Data {
  data_id: number;
  name: string;
  fullName: string;
  lastName: string;
  birthDate: string;
  position: string;
  about: string;
  resume: string;
  url_img: string;
  logo_url: string;

  constructor(
    data_id: number,
    name: string,
    fullName: string,
    lastName: string,
    birthDate: string,
    position: string,
    about: string,
    resume: string,
    url_img: string,
    logo_url: string
  ) {
    this.data_id = data_id;
    this.name = name;
    this.fullName = fullName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.position = position;
    this.about = about;
    this.resume = resume;
    this.url_img = url_img;
    this.logo_url = logo_url;
  }
}
