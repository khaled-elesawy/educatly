import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogItemComponent,
    PaginationComponent,
    LoadingIndicatorComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
