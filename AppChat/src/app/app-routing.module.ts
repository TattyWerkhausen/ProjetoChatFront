import { ExibirMensagensComponent } from './mensagens/exibir-mensagens/exibir-mensagens.component';
import { EnviarMensagemComponent} from './mensagens/enviarMensagem/enviarMensagem.component';
import { LogginComponent } from './loggin/loggin.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPosLoginComponent } from './tela-pos-login/tela-pos-login.component';

const routes: Routes = [
  {path:'', redirectTo: 'paginaInicial', pathMatch: 'full'},
  {path:'paginaInicial', component:PaginaInicialComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'loggin', component: LogginComponent},
  // Rota do pos login usando o id do usuario logado
  {path: 'telaPosLogin/:id', component: TelaPosLoginComponent},
  {path: 'mensagem', component:EnviarMensagemComponent},
  {path: 'exibirMensagens', component:ExibirMensagensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
