import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogginComponent } from './loggin/loggin.component';
import { TelaPosLoginComponent } from './tela-pos-login/tela-pos-login.component';
import { EnviarMensagemComponent} from './mensagens/enviarMensagem/enviarMensagem.component';
import { ExibirMensagensComponent } from './mensagens/exibir-mensagens/exibir-mensagens.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CadastroComponent,
    LogginComponent,
    TelaPosLoginComponent,
    EnviarMensagemComponent,
    ExibirMensagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
