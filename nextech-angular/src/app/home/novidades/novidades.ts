import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProdutoService } from '../../core/services/produto.service';
import { CarrinhoService } from '../../core/services/carrinho.service';
import { Produto } from '../../core/models/produto.model';

@Component({
  selector: 'app-novidades',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './novidades.html',
  styleUrl: './novidades.scss',
})
export class Novidades {
  private readonly produtoService = inject(ProdutoService);
  private readonly carrinhoService = inject(CarrinhoService);
  private readonly snackBar = inject(MatSnackBar);

  readonly slides = this.produtoService.getNovidades();
  readonly indiceAtual = signal(0);

  anterior(): void {
    this.indiceAtual.update((i) => (i === 0 ? this.slides.length - 1 : i - 1));
  }

  proximo(): void {
    this.indiceAtual.update((i) => (i === this.slides.length - 1 ? 0 : i + 1));
  }

  irPara(indice: number): void {
    this.indiceAtual.set(indice);
  }

  comprar(produto: Produto): void {
    this.carrinhoService.adicionar(produto);
    this.snackBar.open(`${produto.nome} adicionado ao carrinho!`, 'Fechar', { duration: 3000 });
  }
}
