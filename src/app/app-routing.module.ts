import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { OrderComponent } from './component/order/order.component';

const appRoutes: Routes = [
    { path: '',   component: OrderComponent },
    // { path: 'menu',   component: MenuComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
      appRoutes,
      { }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
