import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPrincipal } from './componentes/painel-principal/painel-principal';
import { CadastroProduto } from './componentes/cadastro-produto/cadastro-produto';

const routes: Routes = [
  { path: 'painel-principal', component: PainelPrincipal },
  { path: 'cadastro-produto', component: CadastroProduto }, // Cadastro de novo produto
  { path: 'cadastro-produto/:id', component: CadastroProduto }, // Edição de produto
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' } // Redirecionamento padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
