import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {}

  //richiama quello del modello articolo
  voteUp(): boolean {
    return this.article.voteUp();
  }

  voteDown(): boolean {
    return this.article.voteDown();
  }

  ngOnInit() {}
}
