import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { Categoria } from '../models/categoria.model';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private readonly categorias: Categoria[] = [
    new Categoria(
      'Alta Performance',
      'PCs Gamer',
      'Máquinas montadas para performance máxima',
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&h=400&fit=crop&auto=format'
    ),
    new Categoria(
      'Portabilidade',
      'Notebooks',
      'Poder e portabilidade para trabalho e jogo',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop&auto=format'
    ),
    new Categoria(
      'Setup Completo',
      'Periféricos',
      'Teclados, mouses, headsets e monitores',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=400&fit=crop&auto=format'
    ),
    new Categoria(
      'Conectividade',
      'Smartphones',
      'Os melhores lançamentos para todos os perfis',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop&auto=format'
    ),
  ];

  private readonly destaques: Produto[] = [
    new Produto(1, 'PC Gamer Titan X', 'RTX 4070 · AMD Ryzen 7 · 32GB DDR5 · 1TB NVMe', 8499,
      'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=500&h=400&fit=crop&auto=format',
      'Mais vendido', 'verde'),
    new Produto(2, 'Notebook Pro 15', 'Intel Core i7 · RTX 3060 · 16GB · 512GB SSD', 5999,
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop&auto=format',
      'Novo', 'azul'),
    new Produto(3, 'Headset Void Pro', 'Som Surround 7.1 · Microfone Removível · USB', 649,
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop&auto=format',
      'Oferta', 'vermelho'),
    new Produto(4, 'Monitor 165Hz 27"', 'IPS Full HD · 1ms · FreeSync · HDR400', 1899,
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=400&fit=crop&auto=format',
      'Destaque', 'azul'),
    new Produto(5, 'Teclado Mecânico K95', 'Switch Red · RGB Full · Anti-Ghosting · ABNT2', 799,
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=400&fit=crop&auto=format'),
    new Produto(6, 'iPhone 15 Pro Max', 'A17 Pro · 256GB · Câmera 48MP · Titânio', 9299,
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=400&fit=crop&auto=format',
      'Lançamento', 'verde'),
  ];

  private readonly galeria: string[] = [
    'https://images.unsplash.com/photo-1593640408182-31c228c8f91e?w=700&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=700&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=700&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=700&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=700&h=700&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700&h=700&fit=crop&auto=format',
  ];

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  getDestaques(): Produto[] {
    return this.destaques;
  }

  getNovidades(): Produto[] {
    return this.destaques.filter((p) => p.temBadge());
  }

  getGaleria(): string[] {
    return this.galeria;
  }
}
