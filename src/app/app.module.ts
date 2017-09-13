import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HumanListComponent } from './human-list/human-list.component';
import { SearchPipe } from './search.pipe';
import { HumanListService } from './human-list/Human-List.service';
import { HttpModule } from '@angular/http';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './order/cart/cart.component';

const appRoutes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'human-shop', component: HumanListComponent},
  { path: '',
    redirectTo: '/human-shop',
    pathMatch: 'full'}
 // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HumanListComponent,
    SearchPipe,
    OrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HumanListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
