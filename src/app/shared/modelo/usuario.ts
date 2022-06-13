import { Mensagem } from './mensagem';

export class Usuario {

  id?: number;
  nome?: string;
  cpf?: string;
  idade?: number;
  mensRecebidas?: Array<Mensagem>

  constructor(id?: number, usuario: Usuario = {}) {
    this.id = id;
    this.cpf = usuario.cpf;
    this.idade = usuario.idade;
    this.nome = usuario.nome;
    this.mensRecebidas = usuario.mensRecebidas;
  }

}
