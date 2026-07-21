import { Component, inject, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly senhaVisivel = signal(false);
  readonly enviando = signal(false);
  readonly mensagem = signal<{ tipo: 'sucesso' | 'erro'; texto: string } | null>(null);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
    lembrarMe: [false],
  });

  alternarSenha(): void {
    this.senhaVisivel.update((v) => !v);
  }

  entrar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.mensagem.set({ tipo: 'erro', texto: 'Verifique os campos destacados abaixo.' });
      return;
    }

    const { email, senha } = this.form.getRawValue();
    const autenticado = this.authService.login(email, senha);

    if (autenticado) {
      this.enviando.set(true);
      this.mensagem.set({ tipo: 'sucesso', texto: 'Login realizado com sucesso! Redirecionando...' });
      setTimeout(() => this.router.navigate(['/']), 1500);
    } else {
      this.mensagem.set({ tipo: 'erro', texto: 'E-mail ou senha incorretos.' });
    }
  }
}
