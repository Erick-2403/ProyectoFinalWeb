import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'

import { Cliente } from 'src/app/models/cliente';
//Servicios
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    direccion: '',
    email: '',
    password: '',
    latitud: 0 ,
    longitud: 0 ,
  }
  title = 'ProyectoFinalWeb';
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  located: boolean;

  constructor(public authSvc: AuthService, public firestoreService: AngularFirestore, public router: Router) {
    this.lat = -1.2676056300742873;
    this.lng = -78.62417857515283;
    this.zoom = 17;
    this.mapTypeId = 'hybrid';
    this.located = false;
  }

  obtenerPosicion() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.cliente.latitud=this.lat;
      this.lng = position.coords.longitude;
      this.cliente.longitud=this.lng;
      this.zoom = 17;
      this.located = true;
    })
  }

  ngOnInit(): void {

  }

  async onRegister() {
    try {
      const credenciales = {
        email: this.cliente.email,
        password: this.cliente.password
      };
      await this.authSvc.registroCliente(credenciales.email, credenciales.password);
      //console.log(this.cliente);
      this.guardarCliente();
      //Redireccionar a la pagina Historial Pedidos despues de registrarse
      this.router.navigate(['/historialpedidos']);
    }
    catch (error) {
      console.log(error);
    }
  }
  async guardarCliente() {
    this.cliente.id = this.authSvc.generarID();
    const path = "Clientes";
    this.authSvc.crearDocumento(this.cliente, path, this.cliente.id);
  }
}
