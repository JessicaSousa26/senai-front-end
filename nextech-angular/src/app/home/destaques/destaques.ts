import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProdutoService } from '../../core/services/produto.service';
import { CarrinhoService } from '../../core/services/carrinho.service';
import { Produto } from '../../core/models/produto.model';

@Component({
  selector: 'app-destaques',
  imports: [],
  templateUrl: './destaques.html',
  styleUrl: './destaques.scss',
})
export class Destaques {
  private readonly produtoService = inject(ProdutoService);
  private readonly carrinhoService = inject(CarrinhoService);
  private readonly snackBar = inject(MatSnackBar);

  readonly produtos = this.produtoService.getDestaques();

  comprar(produto: Produto): void {
    this.carrinhoService.adicionar(produto);
    this.snackBar.open(`${produto.nome} adicionado ao carrinho!`, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
