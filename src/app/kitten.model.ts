export default class Kitten {
  name: string;
  race: string;
  birthDate: Date;
  img: string;
  constructor(name: string, race: string, birthDate: Date, img: string) {
    this.name = name;
    this.race = race;
    this.birthDate = birthDate;
    this.img = img;
  }
}
