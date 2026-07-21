import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface GaleriaDialogData {
  imagem: string;
  legenda: string;
}

@Component({
  selector: 'app-galeria-dialog',
  imports: [MatDialogModule, MatIconModule, MatButtonModule],
  template: `
    <div class="galeria-dialog">
      <div class="galeria-dialog-head">
        <span>{{ data.legenda }}</span>
        <button mat-icon-button mat-dialog-close aria-label="Fechar">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <img [src]="data.imagem" [alt]="data.legenda" />
    </div>
  `,
  styles: [
    `
      .galeria-dialog {
        background-color: var(--nx-card);
      }
      .galeria-dialog-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 8px 12px 20px;
        border-bottom: 1px solid var(--nx-border);
        font-family: var(--nx-font-display);
        color: var(--nx-text);
        letter-spacing: 0.5px;
      }
      .galeria-dialog-head button {
        color: var(--nx-muted);
      }
      img {
        display: block;
        width: 100%;
        max-height: 70vh;
        object-fit: cover;
      }
    `,
  ],
})
export class GaleriaDialog {
  readonly data = inject<GaleriaDialogData>(MAT_DIALOG_DATA);
}
