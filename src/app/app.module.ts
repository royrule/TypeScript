import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HumanListComponent } from './human-list/human-list.component';
import { SearchPipe } from './search.pipe';
import { HumanListService } from './human-list/Human-List.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HumanListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HumanListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
