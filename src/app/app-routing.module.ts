import { MensRecebidaComponent } from './usuario/mens-recebida/mens-recebida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManipulacaoUsuarioComponent} from './usuario/manipulacao-usuario/manipulacao-usuario.component';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';
import {ListagemUsuarioTabelaComponent} from './usuario/listagem-usuario-tabela/listagem-usuario-tabela.component';


const routes: Routes = [
  {
    path: 'cadastrarusuario',
    component: ManipulacaoUsuarioComponent
  },
  {
    path: 'editarusuario/:id',
    component: ManipulacaoUsuarioComponent
  },
  {
    path: 'listarusuarios',
    component: ListagemUsuarioComponent
  },
  {
    path: 'listarusuarios-tabela',
    component: ListagemUsuarioTabelaComponent
  },

  {
    path: 'listarmensagens/:id',
    component: MensRecebidaComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
