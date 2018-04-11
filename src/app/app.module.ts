import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CuccokComponent } from './cuccok/cuccok.component';
import { CuccService } from './cucc.service';
import { CuccComponent } from './cucc/cucc.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CuccokComponent,
    CuccComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CuccService],
  bootstrap: [AppComponent]
})
export class AppModule { }
