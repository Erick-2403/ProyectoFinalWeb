import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public firestoreService: AngularFirestore) { }
  
  async login (email:string,password:string){
    try{
      const resultado = await this.afAuth.signInWithEmailAndPassword(email,password);
      return resultado;
    }
    catch (error){
      console.log(error);
    }
    
  }
  async registroCliente(email:string,password:string){
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
  generarID(){
    return this.firestoreService.createId();
  }
  crearDocumento(data:any,path:string,id:string){
    const collection = this.firestoreService.collection(path);
    return collection.doc(id).set(data);
  }

}
