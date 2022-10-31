import { EnviarMensagemCommand } from './enviarMensagemCommand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private httpService: HttpClient) { }
  conexaoApi = "https://localhost:44381/";
  salvarMensagem(mensagem: EnviarMensagemCommand): Observable<any> {
    return this.httpService.post<any>(this.conexaoApi + "api/Mensagem/enviarMensagem", mensagem);
  }
}
