import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  public pepperoni:boolean = true;
  public sausage:boolean = true;
  public mushrooms:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  change1(){
    console.log(this.pepperoni);
  }

  change2(){
    console.log(this.sausage);
  }

  change3(){
    console.log(this.mushrooms);
  }

}
