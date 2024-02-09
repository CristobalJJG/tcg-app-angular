import { Component } from '@angular/core';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  deck: Card[] = [];
  constructor(private pk: PokemonTcgService) {
    this.getPokemon();
  }

  async getPokemon() {
    await this.pk.getPokemonBySet().then((data: Card[]) => {
      data.forEach((card: Card) => { this.deck.push(card); });
    });
  }
}
