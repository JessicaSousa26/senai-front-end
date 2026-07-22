import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../servicos/produto';

@Component({
  selector: 'app-cadastro-produto',
  standalone: false,
  templateUrl: './cadastro-produto.html',
  styleUrl: './cadastro-produto.css',
})
export class CadastroProduto implements OnInit {
  produto: any = {
    produto: '',
    descricao: '',
    foto: '',
    preco: null
  };

  mensagemErro = '';

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.obterProdutoPorId(Number(id)).subscribe({
        next: (dados) => {
          this.produto = dados;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar produto:', erro);
          this.mensagemErro = 'Não foi possível carregar os dados do produto.';
          this.cdr.detectChanges();
        }
      });
    }
  }

  salvarProduto(): void {
    this.mensagemErro = '';

    if (this.produto.id) {
      this.produtoService.atualizarProduto(this.produto.id, this.produto).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/painel-principal']);
        },
        error: (erro) => {
          console.error('Erro ao atualizar produto:', erro);
          this.mensagemErro = 'Não foi possível atualizar o produto. Tente novamente.';
          this.cdr.detectChanges();
        }
      });
    } else {
      this.produtoService.adicionarProduto(this.produto).subscribe({
        next: () => {
          alert('Produto cadastrado com sucesso!');
          this.router.navigate(['/painel-principal']);
        },
        error: (erro) => {
          console.error('Erro ao cadastrar produto:', erro);
          this.mensagemErro = 'Não foi possível cadastrar o produto. Tente novamente.';
          this.cdr.detectChanges();
        }
      });
    }
  }
}
