import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { AppService } from './app.service';
import { AbstractService } from './abstract-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: AbstractService) {}

  //Per chiamare le cose dalla service, tocca riscriverli e chiamare i metodi della service
  addArticleComponent(newtitle: HTMLInputElement, newlink: HTMLInputElement) {
    // Chiama il metodo del servizio
    return this.service.addArticle(newtitle, newlink);
  }

  //la service non vede direttamente il parametro "service" quindi serve variabile di appoggio
  articlesComp = this.service.getArticles();
}
