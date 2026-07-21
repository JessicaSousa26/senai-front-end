import { Injectable, computed, signal } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private readonly itens = signal<Produto[]>([]);

  readonly quantidade = computed(() => this.itens().length);

  adicionar(produto: Produto): void {
    this.itens.update((atual) => [...atual, produto]);
  }

  listar(): Produto[] {
    return this.itens();
  }
}
