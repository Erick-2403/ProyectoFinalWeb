import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    usuario: new FormControl(''),
    apellido: new FormControl(''),
    cedula: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    email: new FormControl(''),
    contraseña: new FormControl('')
  })
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onRegister(){
    console.log('Form->',this.registerForm.value);
  }

}
