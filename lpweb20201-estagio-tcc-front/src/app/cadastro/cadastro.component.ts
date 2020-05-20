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
  cpf = null;
  telefone = null;
  endereco = null;
  estado = null;
  sigla = null;
  cep = null;
  email = null;

  ngOnInit(): void {
    this.user = this.auth$.user();
    if (this.user) {
      this.perfil$.perfilLogado().subscribe(
        (dados) => (this.perfil = dados),
        (erro) => (this.temPerfil = false)
      );
    } 
    else {
      this.router.navigate(['/login']);
    }
  }
}
