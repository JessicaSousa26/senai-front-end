import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly stats = [
    { valor: '500+', rotulo: 'Produtos em estoque' },
    { valor: '8 anos', rotulo: 'No mercado gamer' },
    { valor: '24h', rotulo: 'Atendimento online' },
  ];
}
