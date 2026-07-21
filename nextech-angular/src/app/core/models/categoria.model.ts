/**
 * Representa uma categoria de produtos exibida na home.
 */
export class Categoria {
  constructor(
    public readonly tag: string,
    public readonly titulo: string,
    public readonly descricao: string,
    public readonly imagem: string,
    public readonly ancora: string = 'destaques'
  ) {}
}
