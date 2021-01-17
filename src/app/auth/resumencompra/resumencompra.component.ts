import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumencompra',
  templateUrl: './resumencompra.component.html',
  styleUrls: ['./resumencompra.component.scss']
})
export class ResumencompraComponent implements OnInit {
  title = 'ProyectoFinalWeb';
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  located: boolean;
  constructor() {
    this.lat=-1.2676056300742873;
    this.lng=-78.62417857515283;
    this.zoom=17;
    this.mapTypeId='hybrid';
    this.located=false;
   }
   obtenerPosicion(){
    navigator.geolocation.getCurrentPosition(position=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      this.located = true;
    })
  }

  ngOnInit(): void {
  }
}
