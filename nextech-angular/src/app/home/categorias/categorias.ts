import { Component, inject } from '@angular/core';
import { ProdutoService } from '../../core/services/produto.service';

@Component({
  selector: 'app-categorias',
  imports: [],
  templateUrl: './categorias.html',
  styleUrl: './categorias.scss',
})
export class Categorias {
  private readonly produtoService = inject(ProdutoService);
  readonly categorias = this.produtoService.getCategorias();
}
