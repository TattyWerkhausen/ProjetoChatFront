import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExibirMensagensService {

  constructor(private httpService: HttpClient) { }
  conexaoApi = "https://localhost:44381/";

  exibirMensagens(idUsuarioEnviou: string, idUsuariorecebeu: string): Observable<any> {
    return this.httpService.get<any>(this.conexaoApi + 'api/Mensagem/todasMensagens/' + idUsuarioEnviou + '/' + idUsuariorecebeu)
  }
}
