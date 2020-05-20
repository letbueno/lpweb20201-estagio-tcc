import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  perfil: any;
  temPerfil = null;

  constructor(
    public cadastro$: CadastroService,
    public auth$: AuthService,
    private router: Router,
    private perfil$: PerfilService) {
  }
  user: any;
  nome = null;
  sexo = null;
  cpf= null;
  telefone= null;
  endereco = null;
  estado  = null;
  cidade= null;
  cep = null;


  uf = ['AC','AL','AP','AM','BA','DF','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE'
  ];

  ngOnInit(): void {
    this.user = this.auth$.user();
    if (this.user) {
      this.perfil$.perfilLogado().subscribe(
        (dados) => (this.perfil = dados),
        (error) => (this.temPerfil = false)
      );
    }
    else {
      this.router.navigate(['/login']);
    }
  }
  enviarDados() {
    let dados = {
      usuario: this.user.id,
      nome: this.nome,
      sexo: this.sexo,
      cpf: this.cpf,
      telefone: this.telefone,
      endereco: this.endereco,
      estado: this.estado,
      cidade: this.cidade,
      cep: this.cep,

    };
    this.cadastro$.cadastro(dados);

    console.log(dados);
}
  }


