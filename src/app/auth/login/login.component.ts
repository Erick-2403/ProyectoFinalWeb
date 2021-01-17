import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const usuario = await this.authSvc.login(email, password);
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
