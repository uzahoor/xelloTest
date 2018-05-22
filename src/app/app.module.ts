import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { XorToolTipComponent } from './xor-tool-tip/xor-tool-tip.component';
import { AppRoutingModule } from './/app-routing.module';
import { AbToolTipsComponent } from './ab-tool-tips/ab-tool-tips.component';

@NgModule({
  declarations: [
    AppComponent,
    XorToolTipComponent,
    AbToolTipsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
