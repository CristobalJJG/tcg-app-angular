/* General de Angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* PrimeNG */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { CardComponent } from './components/card/card.component';

/* Paginas */
import { CardsPage } from './pages/cards/cards.page';

/* Pipes */
import { TcgQueryPipe } from './pipes/tcg-query.pipe';

@NgModule({
  declarations: [
    AppComponent,

    /* Componentes */
    HeaderComponent,
    MainComponent,
    AsideComponent,
    CardComponent,

    /* Paginas */
    CardsPage,

    /* Pipes */
    TcgQueryPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    /* PrimeNG */
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
