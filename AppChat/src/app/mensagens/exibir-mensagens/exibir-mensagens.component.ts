
import { ExibirMensagensService } from './exibir-mensagens.service';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { EnviarMensagemComponent } from '../enviarMensagem/enviarMensagem.component';
import { DadosExibirMensagens } from './dados-exibir-mensagens';

@Component({
  selector: 'app-exibir-mensagens',
  templateUrl: './exibir-mensagens.component.html',
  styleUrls: ['./exibir-mensagens.component.css']
})
export class ExibirMensagensComponent implements OnInit {
  msgs?: DadosExibirMensagens[] = [];
  @Input() usuarioId?: string;
  @Input() usuarioRecebeMensagemId?: string;

  constructor(private mensagens: ExibirMensagensService
    , private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.exibirMensagens();
    setInterval(() => {
      this.exibirMensagens();
    }, 3000)
  }
  exibirMensagens(): void {
    this.mensagens.exibirMensagens(this.usuarioId!, this.usuarioRecebeMensagemId!).subscribe({
      next: result => { this.msgs = result }
    });
  }
}
