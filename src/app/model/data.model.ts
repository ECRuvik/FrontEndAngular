export class Data {
  data_id: number;
  about: string;
  fullName: string;
  lastName: string;
  position: string;
  name: string;
  resume: string;
  url_img: string;

  constructor(
    data_id: number,
    about: string,
    fullName: string,
    lastName: string,
    position: string,
    name: string,
    resume: string,
    url_img: string
  ) {
    this.data_id = data_id;
    this.about = about;
    this.fullName = fullName;
    this.lastName = lastName;
    this.position = position;
    this.name = name;
    this.resume = resume;
    this.url_img = url_img;
  }
}
