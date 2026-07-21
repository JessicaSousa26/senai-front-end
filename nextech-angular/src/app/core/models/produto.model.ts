export type BadgeTipo = 'verde' | 'azul' | 'vermelho';

/**
 * Representa um produto vendido na loja.
 * Demonstra uma classe TypeScript com construtor e métodos de instância.
 */
export class Produto {
  constructor(
    public readonly id: number,
    public readonly nome: string,
    public readonly especificacoes: string,
    public readonly preco: number,
    public readonly imagem: string,
    public readonly badgeTexto?: string,
    public readonly badgeTipo?: BadgeTipo
  ) {}

  precoFormatado(): string {
    return this.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  temBadge(): boolean {
    return !!this.badgeTexto;
  }
}
