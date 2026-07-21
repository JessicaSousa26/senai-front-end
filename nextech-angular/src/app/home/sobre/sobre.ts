import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  readonly valores = [
    { titulo: 'Missão', texto: 'Inspirar e valorizar a paixão pela tecnologia e inovação.' },
    { titulo: 'Visão', texto: 'Ampliar o público e as ações no mundo gamer.' },
    { titulo: 'Ética', texto: 'Respeito ao cliente e à lei em todas as ações.' },
    { titulo: 'Inovação', texto: 'Conectados às novidades do setor tecnológico.' },
  ];
}
