import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Configuracion } from '../model/configuracion';
import { ConfiguracionPage } from '../pages/GeneralAdmin/configuracion/configuracion.page';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //Funcion registro admin
  registerAdmin(admin: Admin) {
    return this.http.post(environment.apiURL + '/admin/register-admin', admin);
  }

  newConfig(conf: Configuracion){
    return this.http.post(environment.apiURL + '/admin/new-config', conf);
  }

}
