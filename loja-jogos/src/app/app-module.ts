import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './componentes/menu/menu';
import { Rodape } from './componentes/rodape/rodape';
import { PainelPrincipal } from './componentes/painel-principal/painel-principal';
import { CadastroProduto } from './componentes/cadastro-produto/cadastro-produto';

@NgModule({
  declarations: [App, Menu, Rodape, PainelPrincipal, CadastroProduto],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
