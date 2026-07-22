import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../servicos/produto';

@Component({
  selector: 'app-painel-principal',
  standalone: false,
  templateUrl: './painel-principal.html',
  styleUrl: './painel-principal.css',
})
export class PainelPrincipal implements OnInit {
  produtos: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.obterProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos:', erro);
        alert('Não foi possível carregar os produtos. Verifique se o json-server está em execução.');
      }
    });
  }

  excluirProduto(id: number) {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.deletarProduto(id).subscribe({
        next: () => {
          alert('Produto excluído com sucesso!');
          this.listarProdutos();
        },
        error: (erro) => {
          console.error('Erro ao excluir produto:', erro);
          alert('Não foi possível excluir o produto. Tente novamente.');
        }
      });
    }
  }

  editarProduto(id: number) {
    this.router.navigate(['/cadastro-produto', id]);
  }
}
