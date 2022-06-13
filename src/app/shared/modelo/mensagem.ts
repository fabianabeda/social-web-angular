export class Mensagem {

  id?: number;
  texto?: string;
  remetente?: string;
  destinatario?: string;
  hora?: Date;

  constructor(id?: number, mensagem: Mensagem = {}) {
    this.id = id;
    this.texto = mensagem.texto;
    this.remetente = mensagem.remetente;
    this.destinatario = mensagem.destinatario;
    this.hora = mensagem.hora;
  }

}
