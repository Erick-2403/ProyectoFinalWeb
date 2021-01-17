import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';

import {first} from 'rxjs/operators'

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  async login (email:string,password:string){
    try{
      const resultado = await this.afAuth.signInWithEmailAndPassword(email,password);
      return resultado;
    }
    catch (error){
      console.log(error);
    }
    
  }
  async registroUsuario(email:string,password:string){
    try{
    const resultado = await this.afAuth.createUserWithEmailAndPassword(email,password);
    return resultado;
    }
    catch (error){
      console.log(error);
    }
  }
  async salirCuenta(){
    try{
    await this.afAuth.signOut();
    }
    catch (error){
      console.log(error);
    }
  }

}
