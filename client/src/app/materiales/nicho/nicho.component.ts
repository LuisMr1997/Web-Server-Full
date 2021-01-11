import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nicho',
  templateUrl: './nicho.component.html',
  styleUrls: ['./nicho.component.scss']
})
export class NichoComponent implements OnInit {

  table_header: any
  nichoForm: FormGroup
  detallereclamosForm: FormGroup

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getDataNicho()
    this.getDataUbicacion()
    this.formularioNicho()

    this.table_header = [
      {
        id: 'N°',
        nombre: 'Nombre Nicho',
        ubicacion: 'Ubicación'
      }
    ]
  }

  formularioNicho(){
    this.nichoForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      idubicacion:['',[Validators.required]]
    });
  }

  //PAGINA PRINCIPAL
  respuestaNicho: any[]

  getDataNicho = () => {
    let tabla = 'nicho'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
    .subscribe(data => {
        this.respuestaNicho = data.datos
    })
  }
  respuestaUbicacion: any[]

  getDataUbicacion = () => {
    let tabla = 'ubicacion'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
    .subscribe(data => {
      this.respuestaUbicacion = data.datos
    })
  } 

  deleteDataTable = (value) => {
    let tabla = 'nicho'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
    window.location.reload()
  }
  //PAGINA PRINCIPAL

  //MODAL NEW RECLAMO
  nuevafecha = new Date()

  postDataNicho = () => {
    let id
    let nombre = this.nichoForm.get('nombre').value
    let idubicacion = this.nichoForm.get('idubicacion').value

    let tabla = 'nicho'
    let register = {tabla: tabla, datos: [{ id: id, nombre: nombre, idubicacion: idubicacion}]}
    this.http.post(environment.API_URL, register)
    .subscribe( data => {
      // this.postData = data
    })
    window.location.reload()
  }
}