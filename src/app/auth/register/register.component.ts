import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  title = 'ProyectoFinalWeb';
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  located: boolean;

  registerForm = new FormGroup({
    usuario: new FormControl(''),
    apellido: new FormControl(''),
    cedula: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authSvc: AuthService, private router: Router) {
    this.lat = -1.2676056300742873;
    this.lng = -78.62417857515283;
    this.zoom = 17;
    this.mapTypeId = 'hybrid';
    this.located = false;
  }

  obtenerPosicion() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      this.located = true;
    })
  }

  ngOnInit(): void {
  }

  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const usuario = await this.authSvc.registroUsuario(email, password);
      //Redireccionar a la pagina Historial Pedidos
      if (usuario) {
        this.router.navigate(['/historialpedidos']);
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}
