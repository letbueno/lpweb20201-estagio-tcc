import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AtualizarService {

  constructor(private http: HttpClient, private auth$: AuthService) {}

  atualizar(data: any, profile: any) {
    this.http
      .put(
        environment.API_URL.concat(`perfis/${profile.id}/`),
        data,
        this.auth$.httpOptions()
      )
      .subscribe();
  }
}
