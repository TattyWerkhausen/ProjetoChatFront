import { ActivatedRoute } from '@angular/router';
import { EnviarMensagemCommand } from './enviarMensagemCommand';
import { MensagemService } from './mensagem.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './enviarMensagem.component.html',
  styleUrls: ['./enviarMensagem.component.css']
})
export class EnviarMensagemComponent implements OnInit {

  mensagens: EnviarMensagemCommand[] = [];
  formulario: FormGroup;
  @Input() usuarioId?: string;
  @Input() usuarioRecebeMensagemId?: string;

  constructor(private formBuilder: FormBuilder
    , private mensagemService: MensagemService
    , private rotaAtiva: ActivatedRoute) {
    this.formulario = formBuilder.group({
      conteudo: formBuilder.control(''),
    })
  }
  ngOnInit(): void {
    console.log(this.usuarioRecebeMensagemId);
  }
  salvandoMensagem(): void {
    const novaMensagem = new EnviarMensagemCommand(
      this.usuarioId!,
      this.usuarioRecebeMensagemId!,
      this.formulario.controls['conteudo'].value,
    );
    this.mensagemService.salvarMensagem(novaMensagem).subscribe({
      next: result => this.mensagens = result
    });
    this.formulario.reset();
  }
}
