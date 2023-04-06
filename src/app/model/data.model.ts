export class Data {
  id?: number;
  about: string;
  fullName: string;
  lastName: string;
  position: string;
  name: string;
  resume: string;
  urlImg: string;

  constructor(about: string, fullName: string, lastName: string, position: string, name: string, resume: string, urlImg: string) {
    this.about = about;
    this.fullName = fullName;
    this.lastName = lastName;
    this.position = position;
    this.name = name;
    this.resume = resume;
    this.urlImg = urlImg;
  }
}
