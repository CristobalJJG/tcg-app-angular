import { Component, OnInit } from '@angular/core';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card: Card[] = [];
  constructor(private pk: PokemonTcgService) { }

  ngOnInit() {
    console.log(this.card.length);
    this.getPokemon();
    console.log(this.card.length);
  }
  async getPokemon() {
    //await this.pk.getPokemonById("xy1-1").then((data: Card) => this.card.push(data));
    await this.pk.getPokemonBySet("name:Gengar").then((data: Card[]) => this.card.push(data[0]));
  }
}
