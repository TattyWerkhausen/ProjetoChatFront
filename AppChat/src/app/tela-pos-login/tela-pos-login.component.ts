import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioViewModelId } from 'src/app/cadastro/usuario-view-model-id';
import { UsuarioService } from '../cadastro/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-tela-pos-login',
  templateUrl: './tela-pos-login.component.html',
  styleUrls: ['./tela-pos-login.component.css']
})
export class TelaPosLoginComponent implements OnInit {

  // Lista de usuario vazia, usada para armazenar os usuarios encontrados
  usuarios: UsuarioViewModelId[] = [];
  usuarioEncontrado?: UsuarioViewModelId;
  usuarioLogadoId?: string;
  usuarioRecebeMensagemId?: string;
  formulario: FormGroup;

  usuarioFoiEncontrado = false;
  foiRealizadoUmaBusca = false;
  podeExibirConversa = false;

  constructor(
    private usuarioService: UsuarioService,
    private rotaAtiva: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formulario = formBuilder.group({
      // Campo para usuario digitar nome para busca
      nome: formBuilder.control('')
    });
    // Função do rx js, Para susgestão de nome quando digitado uma ou mais letras a cada 600 milisegundos busca no BD
    this.formulario.controls['nome'].valueChanges.
      pipe(
        debounceTime(600)
      )
      .subscribe({
        next: valorNome => this.buscarNomeUsuario()
      });
  }
  ngOnInit(): void {
    // Variavel que pega o id na rota url
    this.usuarioLogadoId = this.rotaAtiva.snapshot.params['id'];

    // Metodo de buscar todos para exibição menos o que esta logado e passado na rota(usuarioLogadoId)
    this.usuarioService.buscandoTodosUsuarios(this.usuarioLogadoId!).subscribe(result => { this.usuarios = result });
  }
  // Metodo de buscar nome
  buscarNomeUsuario(): void {
    // Variavel que armazena o que foi digitado
    const nomeUsusario = this.formulario.controls['nome'].value;

    // Chamo o metodo da service buscarUsuarioNome e passo de parametro o nome armazenado que foi digitado
    this.usuarioService.buscarUsuarioNome(nomeUsusario).subscribe({
      next: result => {
        this.foiRealizadoUmaBusca = true;
        this.usuarioEncontrado = result;
        this.usuarioAchado();
      }
    })
  }
  // Metodo de confirmar se foi achado ou não o usuario
  usuarioAchado(): boolean {
    // se o usuario encontrado.
    if (this.usuarioEncontrado) {
      this.usuarioFoiEncontrado = true;
    }
    // se usuario nao encontrado.
    else {
      this.usuarioFoiEncontrado = false;
    }
    // retorna o valor.
    return this.usuarioFoiEncontrado;
  }
  // Metodo que no html pega de parametro o id do usuario clicado
  selecionarUsuarioParaEnviarMensagem(usuarioAbrirConversaId: string): void {
    // variavel que oculta conversa
    this.podeExibirConversa = false;
    // variavel recebendo o valor do parametro clicado
    this.usuarioRecebeMensagemId = usuarioAbrirConversaId;
    this.abrirConversa();

    // diz que em 100milesegundos ira exibir a conversa
    setTimeout(() => {
      this.podeExibirConversa = true;
    }, 100);
  }
  abrirConversa(): void {

  }


}
