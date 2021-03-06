
import { AtualizarService } from './../atualizar.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {
  perfil: any;
  temPerfil = null;

  constructor(public atualizar$: AtualizarService,
    public auth$: AuthService,
    private router: Router,
    private profile$: PerfilService) { }

    user: any;
  nome = null;
  sexo = null;
  cpf = null;
  telefone = null;
  endereco = null;
  estado_uf = null;
  cidade = null;
  cep = null;



  uf = ['AC','AL','AP','AM','BA','DF','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
  ];

  ngOnInit(): void {
    this.user = this.auth$.user();
    if (this.user) {
      this.profile$.perfilLogado().subscribe(
        (data) => {
          this.perfil = data;
          this.nome = this.perfil.nome;
          this.sexo = this.perfil.sexo;
          this.cpf = this.perfil.cpf;
          this.telefone = this.perfil.telefone;
          this.endereco = this.perfil.endereco;
          this.estado_uf = this.perfil.estado_uf;
          this.cidade = this.perfil.cidade;
          this.cep = this.perfil.cep;

        },
        (erro) => (this.temPerfil = false)
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  enviarDados() {
    let data = {
      usuario: this.user.id,
      nome: this.nome,
      sexo: this.sexo,
      cpf: this.cpf,
      telefone: this.telefone,
      endereco: this.endereco,
      estado_uf: this.estado_uf,
      cidade: this.cidade,
      cep: this.cep,

    };
    this.atualizar$.atualizar(data, this.perfil);
  }

  }

