import { Injectable } from '@angular/core';
import { Article } from './article/article.model';
import { AbstractService } from './abstract-service';

@Injectable()
export class AppService implements AbstractService {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  public getArticles(): Article[] {
    return this.articles;
  }

  public addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false; //per togliere il comportamento di default che è refresh della pagina
  }
  //se vedi html, questo metodo è invocato ogni volta si clicca sul button
}
