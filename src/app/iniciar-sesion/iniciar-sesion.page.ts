import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { ServiceService } from '../servicios/service.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {
  formulario!: FormGroup

  constructor(
    public builder: FormBuilder,
    private auth: ServiceService,
    public http: HttpClient,
  ) {
    this.formulario = builder.group({
      username: [''],
      password: ['']
    })
  }

ngOnInit(){

}

  public autenticar(){
    this.auth.authorization({
      username: this.formulario.value['username'],
      password: this.formulario.value['password']
    })
  }

}
