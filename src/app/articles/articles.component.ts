import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../services/articles.service";
import { staggeredShowUp } from "../animations/staggeredShowUp.animation";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  animations: [staggeredShowUp]
})
export class ArticlesComponent implements OnInit {


  constructor(public articlesService : ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getAll();

    /*const observable = this.articlesService.buildObservable();
    observable.subscribe((data) => {
      console.log(data);
    })*/
  }

}
