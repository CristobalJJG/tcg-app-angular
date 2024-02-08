import { Injectable } from '@angular/core';
import axios from 'axios';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {

  URL = "https://api.pokemontcg.io/v2/cards";

  /* Get a card */
  async getPokemonById(id: string): Promise<Card> {
    return await axios.get(`https://api.pokemontcg.io/v2/cards/${id}`)
      .then(response => {
        return JSON.parse(response.request.response).data;
      })
  }

  /* Get a deck of cards */
  async getPokemonBySet(q: string, p: number = 1, pSize: number = 20, orderBy?: string, select?: string): Promise<Card[]> {
    return this.callAPI(`https://api.pokemontcg.io/v2/cards?q=${q} &pageSize=${pSize} &page=${p}`);
  }

  async callAPI(url: string) {
    return await axios.get(url)
      .then(response => {
        return JSON.parse(response.request.response).data;
      })
  }
}
