import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicios/service.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public id: string= '';
  public username: string= '';
  public email: string= '';
  public firstName: string= '';
  public lastName: string= '';
  public gender: string= 'male' || 'female';
  public token: string= '';
  public image: string= '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // this.route.queryParams(parametros=>{(
    //   this.id = parametros['id'] || '',
    //   this.username = parametros['username'] || ''

    // })
  }

}
