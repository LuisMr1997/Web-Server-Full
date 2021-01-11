import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  table_header: any
  proveedorForm: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.formularioProveedor()
    this.getDataProveedores()

    this.table_header = [
      {
        id: 'N°',
        identificacion: 'Identificacíon',
        nombre: 'Nombre',
        direccion: 'Dirección',
        telefono: 'Teléfono'
      }
    ]
  }

  formularioProveedor(){
    this.proveedorForm = this.formBuilder.group({
      id: [''],
      identificacion: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      direccion: ['',[Validators.required]],
      telefono: ['',[Validators.required]]
    });
  }

    //PAGINA PRINCIPAL
    respuestaProveedores: any[]

    getDataProveedores = () => {
      let tabla = 'proveedor'
      this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
      .subscribe(data => {
        this.respuestaProveedores = data.datos
      })
    }
  
    deleteDataTable = (value) => {
      let tabla = 'proveedor'
      this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
      .subscribe( data => { })
      window.location.reload()
    }
    //PAGINA PRINCIPAL

    //MODAL NEW PROVEEDOR
    postDataProveedor = () => {
      let id
      let identificacion = this.proveedorForm.get('identificacion').value
      let nombre = this.proveedorForm.get('nombre').value
      let direccion = this.proveedorForm.get('direccion').value
      let telefono = this.proveedorForm.get('telefono').value
  
      let tabla = 'proveedor'
      let register = {tabla: tabla, datos: [{identificacion: identificacion, nombre: nombre, direccion: direccion, telefono: telefono}]}
      this.http.post(environment.API_URL, register)
      .subscribe( data => {
        // this.postData = data
      })
      window.location.reload()
    }
    //MODAL NEW PROVEEDOR

}
