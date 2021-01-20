import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Producto } from '../../models/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.component.html',
  styleUrls: ['./agregarproductos.component.scss']
})
export class AgregarproductosComponent implements OnInit {
  producto: Producto = {
    idProducto: '',
    nombre: '',
    categoria:'',
    precio: 0,
    iva: 0,
    precioventa:0,
  }
  constructor(public firestoreService: AngularFirestore,public productoSvc:ProductosService) { }

  ngOnInit(): void {
  }
  async agregarProducto(){
    console.log(this.producto);
    //this.producto.idProducto = this.productoSvc.generarID();
    //const path = "Productos";
    //this.productoSvc.crearDocumento(this.producto, path, this.producto.idProducto);
  }
  async calcularPrecioVenta(){
    const precioVentaProducto = (this.producto.precio * this.producto.iva) + this.producto.precio;
    this.producto.precioventa = precioVentaProducto;
  }
  bulk(e){
    if(e.target.checked == true){
      this.producto.iva = 0.12;
    }else{
      this.producto.iva = 0;
    }
  }
}
