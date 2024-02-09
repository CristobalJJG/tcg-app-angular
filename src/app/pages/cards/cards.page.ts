import { Component } from '@angular/core';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { CardInfo } from 'src/app/models/info';
import { TcgQueryPipe } from 'src/app/pipes/tcg-query.pipe';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss']
})
export class CardsPage {
  deck: Card[] = [];

  constructor(private pk: PokemonTcgService) {
    this.getPokemon();
  }

  async getPokemon(q?: CardInfo) {
    let aux = q ? new TcgQueryPipe().transform(q) : '';
    console.log(aux, q)
    await this.pk.getPokemonBySet(aux).then((data: Card[]) => {
      data.forEach((card: Card) => { this.deck.push(card); });
    });
  }

  recieveInfo(event: CardInfo) {
    this.deck = [];
    this.getPokemon(event);
  }
}
