import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { Hero } from '../hero/hero';
import { Categorias } from '../categorias/categorias';
import { Destaques } from '../destaques/destaques';
import { Novidades } from '../novidades/novidades';
import { Galeria } from '../galeria/galeria';
import { Sobre } from '../sobre/sobre';
import { Contato } from '../contato/contato';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Hero, Categorias, Destaques, Novidades, Galeria, Sobre, Contato],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
