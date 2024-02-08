import { Injectable } from '@angular/core';
import axios from 'axios';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {

  constructor() { }

  async getPokemonById(): Promise<Card> {
    return await axios.get("https://api.pokemontcg.io/v2/cards/xy1-1")
      .then(response => {
        return JSON.parse(response.request.response).data;
      })
  }
}
