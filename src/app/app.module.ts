import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostService } from './posts.service';
import { AuthInterceptorService } from './auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [PostService,
  {provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptorService,
multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
