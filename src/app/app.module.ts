import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AppService } from './app.service';
import { AbstractService } from './abstract-service';

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [BrowserModule],
  providers: [{ provide: AbstractService, useClass: AppService }], //il primo è interfaccia, secondo implementazione
  bootstrap: [AppComponent],
})
export class AppModule {}
