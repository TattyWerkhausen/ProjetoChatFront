import { UsuarioService } from './usuario.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioViewModel } from './usuario-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;

  constructor(private usuarioService: UsuarioService
    , private formBuilder: FormBuilder
    , private rota: Router) {
      // Dados que serão preenchidos pelo usuario no meu html
    this.formulario = formBuilder.group({
      nome: formBuilder.control(''),
      sobrenome: formBuilder.control(''),
      cpf: formBuilder.control(''),
      telefone: formBuilder.control(''),
      email: formBuilder.control(''),
      senha: formBuilder.control(''),
      dataNascimento: formBuilder.control('')
    });
  }

  ngOnInit(): void {
  }
  // Metodo que salva cadastro, pegando os valores digitados e mandando para service,

  cadastrando(): void {
    const novoCadastro = new UsuarioViewModel(
      this.formulario.controls['nome'].value,
      this.formulario.controls['sobrenome'].value,
      this.formulario.controls['cpf'].value,
      this.formulario.controls['telefone'].value,
      this.formulario.controls['email'].value,
      this.formulario.controls['senha'].value,
      this.formulario.controls['dataNascimento'].value
    );
    // que conecta com a api atravez dos https  manda salvar os dados lá no banco de dados,
  // usando a controller de intermdiaria.
    this.usuarioService.cadastrando(novoCadastro).subscribe(cadastr => {
      this.rota.navigateByUrl('/loggin');
    })
  }
}
