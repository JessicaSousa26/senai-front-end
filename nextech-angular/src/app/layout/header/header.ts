import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { CarrinhoService } from '../../core/services/carrinho.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly carrinhoService = inject(CarrinhoService);

  readonly quantidadeCarrinho = this.carrinhoService.quantidade;
  readonly menuAberto = signal(false);

  readonly links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Destaques', href: '#destaques' },
    { label: 'Novidades', href: '#novidades' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }
}
