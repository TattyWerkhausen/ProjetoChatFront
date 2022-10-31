import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioViewModelId } from 'src/app/cadastro/usuario-view-model-id';

@Injectable({
  providedIn: 'root'
})
export class SharedLogginService {

  usuarioLogado?: UsuarioViewModelId;

  constructor(private httpService: HttpClient) { }
  conexaoApi = "https://localhost:44381/";

  // Metodo que busca cadastro na api
  buscarCadastro(nome: string, senha: string): Observable<UsuarioViewModelId> {
    return this.httpService.get<UsuarioViewModelId>(this.conexaoApi + 'api/Loggin/buscarCadastro/' + nome + '/' + senha);
  }
}
