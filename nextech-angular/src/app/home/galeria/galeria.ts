import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoService } from '../../core/services/produto.service';
import { GaleriaDialog } from './galeria-dialog';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria {
  private readonly produtoService = inject(ProdutoService);
  private readonly dialog = inject(MatDialog);

  readonly imagens = this.produtoService.getGaleria();

  abrir(imagem: string, indice: number): void {
    this.dialog.open(GaleriaDialog, {
      data: { imagem, legenda: `Universo gamer NexTech · foto ${indice + 1}` },
      maxWidth: '800px',
      width: '90vw',
      panelClass: 'nx-dialog-panel',
    });
  }
}
