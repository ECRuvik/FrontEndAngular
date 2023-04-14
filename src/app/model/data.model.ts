export class Data {
  data_id: number;
  fullName: string;
  lastName: string;
  birthDate: string;
  position: string;
  name: string;
  about: string;
  resume: string;
  url_img: string;

  constructor(
    data_id: number,
    fullName: string,
    lastName: string,
    birthDate: string,
    position: string,
    name: string,
    about: string,
    resume: string,
    url_img: string
  ) {
    this.data_id = data_id;
    this.fullName = fullName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.position = position;
    this.name = name;
    this.about = about;
    this.resume = resume;
    this.url_img = url_img;
  }
}
