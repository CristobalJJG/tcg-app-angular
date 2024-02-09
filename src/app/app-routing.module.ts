import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPage } from './pages/cards/cards.page';

const routes: Routes = [{ path: 'cards', component: CardsPage },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
