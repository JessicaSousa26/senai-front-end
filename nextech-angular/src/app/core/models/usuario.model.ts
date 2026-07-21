/**
 * Representa um usuário autenticado na loja.
 * Encapsula a validação de senha como método de instância.
 */
export class Usuario {
  constructor(
    public readonly email: string,
    private readonly senha: string
  ) {}

  validarSenha(tentativa: string): boolean {
    return this.senha === tentativa;
  }
}
