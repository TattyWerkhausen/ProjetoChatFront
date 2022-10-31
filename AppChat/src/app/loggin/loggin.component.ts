import { Router } from '@angular/router';
import { SharedLogginService } from './shared-loggin.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioViewModelId } from '../cadastro/usuario-view-model-id';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  formulario: FormGroup;

  // Variavel do tipo usuario que vai receber o valor de quem logar
  estaLogado?: UsuarioViewModelId;

  usuarioEncontrado?: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router
    , private logginService: SharedLogginService) {
    this.formulario = formBuilder.group({
      // dados de login que serão digitados
      nome: formBuilder.control(''),
      senha: formBuilder.control('')
    });
    this.usuarioEncontrado = true;
  }

  ngOnInit(): void {
  }
  // Metodo de busca pegando os valores digitados
  buscarUsuario(): void {
    const nomeUsuario = this.formulario.controls['nome'].value;
    const senhaUsuario = this.formulario.controls['senha'].value;

    // Acessando a service com os parametros de login
    this.logginService.buscarCadastro(nomeUsuario, senhaUsuario).subscribe((result) => {
      // Variavel declarada na service recebendo o resultado da busca
      this.logginService.usuarioLogado = result;
      // Variavel declarada aqui no component recebendo o valor da busca
      this.estaLogado = this.logginService.usuarioLogado;

      // Se cadastro for indefinido ou nulo no loga, pois não existe
      if (this.estaLogado === undefined || this.estaLogado === null) {
        this.usuarioEncontrado = false;
      }
      // Se usuario for diferente de indefinido ou nulo ele esta cadastrado
      if (this.estaLogado !== undefined && this.estaLogado !== null) {
        // e é feito login, redireciona para a pagina pos login com o id do logado
        this.router.navigateByUrl('/telaPosLogin/' + result.id);
      }
    });
  }
}
