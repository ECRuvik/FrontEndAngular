export class Locations {
  id?: number;
  address: string;
  city: string;
  postalCode: number;

	constructor(address: string, city: string, postalCode: number) {
    this.address = address;
    this.city = city;
    this.postalCode = postalCode;
	}

}
