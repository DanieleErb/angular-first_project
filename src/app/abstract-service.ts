import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable()
export abstract class AbstractService {
  constructor() {}

  abstract addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean;

  abstract getArticles(): Article[];
}
