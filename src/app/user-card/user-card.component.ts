import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArticlesService } from "../services/articles.service";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public name : string;
  public username : string;
  public avatar : string;

  @Output() subscribed = new EventEmitter<boolean>();
  constructor(private  articlesService : ArticlesService) { }

  ngOnInit(): void {
    this.name = "Enrique";
    this.username = "Ediaz";
    this.avatar = "https://api.adorable.io/avatars/200/robot.png";
    //this.avatar = "";
    setTimeout(()=> this.subscribed.emit(true), 3000);
    this.articlesService.articlesCount = 20;
  }

  changing(event: any){
    this.username = event.target.value;
  }
}
