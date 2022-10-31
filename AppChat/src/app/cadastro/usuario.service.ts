import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioViewModel } from './usuario-view-model';
import { UsuarioViewModelId } from './usuario-view-model-id';

@Injectable({
  providedIn: 'root'
})
// Service - Ligação que pega os dados passados no component e passa para a controller
// atravez de (metodos http)e manda os dados para o repositorio
export class UsuarioService {

  constructor(private httpService: HttpClient) { }
  conexaoApi = "https://localhost:44381/";

  // Cadastrar - passo o component de parametro e dou um post na rota correspondente com a controller
  cadastrando(cadastrar: UsuarioViewModel): Observable<any> {
    return this.httpService.post<any>(this.conexaoApi + "api/Usuario/cadastrando", cadastrar);
  }
  // Buscar Todos menos o que esta logado, pois la no meu repositorio já fiz uma logica para buscar todos,
  // menos o id que esta logado, e passo este de parametro para a api saber qual é ologado e não exibi-lo
  buscandoTodosUsuarios(idLogado:string):Observable<UsuarioViewModelId[]>{
    return this.httpService.get<UsuarioViewModelId[]>(this.conexaoApi + 'api/Usuario/buscarTodosUsuarios/' + idLogado);
  }
  // Busco por nome passando de parametro a string digitada
  buscarUsuarioNome(nome:string): Observable<UsuarioViewModelId>{
    return this.httpService.get<UsuarioViewModelId>(this.conexaoApi + "api/Usuario/buscarUsuario/" + nome);
  }
}
