import { Injectable, signal } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly usuarios: Usuario[] = [new Usuario('gamer@nextech.com.br', '123456')];

  private readonly usuarioLogado = signal<Usuario | null>(null);
  readonly logado = this.usuarioLogado.asReadonly();

  /**
   * Autentica localmente (não há back-end nesta atividade).
   * Qualquer e-mail válido cadastra o usuário na sessão simulada;
   * se o e-mail já existir na lista, a senha precisa conferir.
   */
  login(email: string, senha: string): boolean {
    const existente = this.usuarios.find((u) => u.email === email);

    if (existente) {
      const ok = existente.validarSenha(senha);
      if (ok) this.usuarioLogado.set(existente);
      return ok;
    }

    const novoUsuario = new Usuario(email, senha);
    this.usuarios.push(novoUsuario);
    this.usuarioLogado.set(novoUsuario);
    return true;
  }

  logout(): void {
    this.usuarioLogado.set(null);
  }
}
