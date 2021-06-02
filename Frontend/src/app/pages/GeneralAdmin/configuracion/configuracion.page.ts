import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { Configuracion } from '../../../model/configuracion';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  public notificaciones:boolean = true;
  public privacidad:boolean = true;
  public seguridad:boolean = true;
  constructor(public adminService: AdminService,private router: Router) { }

  ngOnInit() {
  }

  change1(){
    console.log(this.notificaciones);
  }

  change2(){
    console.log(this.privacidad);
  }

  change3(){
    console.log(this.seguridad);
  }

  aceptar(){

    let conf = {'notificaciones': this.notificaciones, 'privacidad':this.privacidad,'seguridad':this.seguridad};

    this.adminService.newConfig(conf).subscribe(() => {
          this.router.navigateByUrl('/admin-desk');
        });
  }

}
