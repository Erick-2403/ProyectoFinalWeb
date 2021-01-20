import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public firestoreService: AngularFirestore) { }

  generarID() {
    return this.firestoreService.createId();
  }
  crearDocumento(data: any, path: string, id: string) {
    const collection = this.firestoreService.collection(path);
    return collection.doc(id).set(data);
  }
}
