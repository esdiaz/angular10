import { Component, OnInit, Input } from "@angular/core";
import { showUp } from "../animations/showUp.animation";

@Component({
  selector: 'app-title',
  templateUrl:'title.component.html',
  styleUrls: ['title.component.css'],
  animations: [ showUp ]
  /*template: `
    <h1>Curso Angular</h1>
  `*/
})
export class TitleComponent implements OnInit{

  public name : string;
  private edad : number;
  public isAvailable : boolean = false;
  public css_clases : string[] = ['active', 'shadow'];
  public moreInformation: boolean = false;
  public topics : string[];
  public category : string; //web, mobile, other
  public launchDate : Date;
  public price : number = 25;
  public seconds : number = 3670;

  @Input() subscribed : boolean;

  constructor() {
  }

  ngOnInit(){
    this.name = 'Enrique';
    this.category = 'WEB';
    this.launchDate = new Date(2020, 4, 20);
    this.topics = [
      'Fundamentos del framework',
      'Components',
      'Directivas',
      'Animaciones',
      'Servicios',
      'RxJS',
      'Binding'
    ];
    /*this.edad = 29;
    setTimeout(() => this.name = 'Enrique Santamaría Díaz', 3000);
    setTimeout(() => this.isAvailable = false , 3000);
    setTimeout(() => this.css_clases = ['shadow'] , 3000);
    setTimeout(() => this.moreInformation = true , 3000);*/
  }

  /*getNombre() : string {
    return `${this.name} : ${this.edad}`;
  }*/

  toggleMoreInformation(){
    this.moreInformation = !this.moreInformation;
  }
}
