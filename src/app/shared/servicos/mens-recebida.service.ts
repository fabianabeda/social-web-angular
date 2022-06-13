import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Mensagem } from '../modelo/mensagem';


@Injectable({
  providedIn: 'root'
})
export class MensRecebidaService {

  URL_MENSAGEM = 'http://localhost:8080/mensagem';

  constructor(private clienteHttp: HttpClient) { }
  listarMens(): Observable<Mensagem[]> {
  // GET /mensagem/
    return this.clienteHttp.get<Mensagem[]>(this.URL_MENSAGEM);
  }

  enviarMens(mensagem: Mensagem, idUsuario: Usuario): Observable<Mensagem> {
    return this.clienteHttp.post<Mensagem>(this.URL_MENSAGEM, mensagem);
  }

}
