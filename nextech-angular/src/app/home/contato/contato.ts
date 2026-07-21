import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);

  readonly form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(8)]],
    mensagem: ['', [Validators.required, Validators.minLength(5)]],
  });

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.snackBar.open('Mensagem enviada com sucesso! Em breve retornaremos o contato.', 'Fechar', {
      duration: 4000,
    });
    this.form.reset();
  }
}
