import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JurosComponent } from './juros/juros.component';
import { HomeComponent } from './home/home.component';
import { CompostosComponent } from './compostos/compostos.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'simples', component: JurosComponent },
      { path: 'compostos', component: CompostosComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    JurosComponent,
    HomeComponent,
    CompostosComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
