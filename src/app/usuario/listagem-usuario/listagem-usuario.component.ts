import { Component, OnInit } from '@angular/core';
import { Mensagem } from './../../shared/modelo/mensagem';
import { MensRecebidaService } from './../../shared/servicos/mens-recebida.service';
import {Usuario} from '../../shared/modelo/usuario';
import {UsuarioService} from '../../shared/servicos/usuario.service';



@Component ({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  mensagem: Mensagem[];

  constructor(private usuarioService: UsuarioService, private mensRecebidaService: MensRecebidaService) {
    this.usuarios = new Array<Usuario>();
    this.mensagem = new Array<Mensagem>();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }


  listarMensagem(){
    this.mensRecebidaService.listarMens().subscribe(
      mensagem => this.mensagem = mensagem
    )
  }

  enviarMensagem(mensagem: Mensagem, idUsuario: Usuario){
    this.mensRecebidaService.enviarMens(mensagem, idUsuario).subscribe()
  }

  removerUsuario(usuario: Usuario) {
    this.usuarioService.remover(usuario.id || 0).subscribe(
      removido => {
        const indxUsuario = this.usuarios.findIndex(u => u.id === usuario.id);
        if (indxUsuario > -1) {
          this.usuarios.splice(indxUsuario, 1);
        }
      }
    );
  }

  ehMaiorDeIdade(usuario: Usuario): boolean {
    return (usuario.idade || 0) >= 18;
  }

  quantidadeUsuariosMaiorDeIdade(): number {
    return this.usuarios.filter(usuario => this.ehMaiorDeIdade(usuario)).length;
  }


}
