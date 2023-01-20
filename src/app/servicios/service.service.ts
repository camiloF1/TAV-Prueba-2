import { Injectable } from '@angular/core';
import { Auth, AuthResponse } from '../modelo/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private URL_AUTH= 'https://dummyjson.com/auth/login';
  public datosDelUsuario! : AuthResponse | null | Observable<null>

  constructor(
    private http: HttpClient,
    private alert: AlertController,
    private route: Router
  ) { }

  public authorization({username, password}: Auth){
    this.http.post<AuthResponse>(this.URL_AUTH,[username, password],{
      headers: {'Content-Type': 'application/json'},
    })
    .subscribe(async(datos)=>{
      this.datosDelUsuario = datos;
      if(datos){
        this.datosDelUsuario = datos
        const alert = await this.alert.create({
          header: 'Autenticado',
          buttons:[{
            text: 'ok',
            role: 'Confirmo'
          }]
        })
        await alert.present();
        this.route.navigate(['/perfil'], {queryParams:{
          id : this.datosDelUsuario?.id,
          username: this.datosDelUsuario?.username,
          email: this.datosDelUsuario?.email,
          firstName: this.datosDelUsuario?.firstName,
          lastName: this.datosDelUsuario?.lastName,
          gender: this.datosDelUsuario?.gender,
          token: this.datosDelUsuario?.token
        }})
      }
    })


  }
}
