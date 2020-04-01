export class Recipe {
  public name: string;
  public decription: string;
  public imagePath: string;
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.decription = description;
    this.imagePath = imagePath;
  }
}
