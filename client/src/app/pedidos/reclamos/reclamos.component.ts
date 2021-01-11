import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.scss']
})
export class ReclamosComponent implements OnInit {

  table_header: any
  reclamosForm: FormGroup
  detallereclamosForm: FormGroup

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getDataReclamos()
    this.getDataMateriales()
    this.getDataPedidos()

    this.formularioReclamos()
    this.formularioDetalleReclamos()

    this.table_header = [
      {
        id: 'N°',
        fecha: 'Fecha del Pedido',
        comentario: 'Comentario'
      }
    ]
  }

  formularioReclamos(){
    this.reclamosForm = this.formBuilder.group({
      id: [''],
      fecha: [''],
      comentario:['',[Validators.required]]
    });
  }

  formularioDetalleReclamos(){
    this.detallereclamosForm = this.formBuilder.group({
      id: [''],
      cantidad: ['',[Validators.required]],
      precio_pedido: ['',[Validators.required]],
      precio_llegada: ['',[Validators.required]],
      idreclamo: [''],
      idpedido: ['',[Validators.required]],
      idmaterial: ['',[Validators.required]]
    });
  }

  //PAGINA PRINCIPAL
  respuestaReclamos: any[]

  getDataReclamos = () => {
    let tabla = 'reclamo'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
    .subscribe(data => {
        this.respuestaReclamos = data.datos
    })
  }

  idReclamoVariable: number

  getDatabyID = (value) => {
    let tabla = 'reclamo'
    this.http.get<any>(environment.API_URL + `byid?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { 
      this.idReclamoVariable = data.datos[0].id
      localStorage.setItem("id", this.idReclamoVariable.toString() )
    })
  }

  deleteDataTable = (value) => {
    let tabla = 'reclamo'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
    window.location.reload()
  }
  //PAGINA PRINCIPAL

  //MODAL NEW RECLAMO
  nuevafecha = new Date()
  fecha_orden = this.nuevafecha.getDate() + "/" + (this.nuevafecha.getMonth() +1) + "/" + this.nuevafecha.getFullYear()

  postDataReclamos = () => {
    let id
    let comentario = this.reclamosForm.get('comentario').value

    let tabla = 'reclamo'
    let register = {tabla: tabla, datos: [{id: id, fecha: this.fecha_orden, comentario: comentario}]}
    this.http.post(environment.API_URL, register)
    .subscribe( data => {
      // this.postData = data
    })
    window.location.reload()
  }
  //MODAL NEW RECLAMO

  //MODAL DETALLE RECLAMO
  respuestaMateriales: any[]

  getDataMateriales = () => {
    let tabla = 'material'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
    .subscribe(data => {
        this.respuestaMateriales = data.datos
    })
  }

  respuestaPedidos: any[]

  getDataPedidos = () => {
    let tabla = 'pedido'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
    .subscribe(data => {
        this.respuestaPedidos = data.datos
    })
  }

  postDataDetallePedidos = () => {
    let cantidad = this.detallereclamosForm.get('cantidad').value
    let precio_pedido = this.detallereclamosForm.get('precio_pedido').value
    let precio_llegada = this.detallereclamosForm.get('precio_llegada').value
    let idpedido = this.detallereclamosForm.get('idpedido').value
    let idmaterial = this.detallereclamosForm.get('idmaterial').value
    let returning

    let tabla = 'detalle_reclamo'
    let register = {tabla: tabla, datos: [{ cantidad: cantidad, 
                                            precio_pedido: precio_pedido, 
                                            precio_llegada: precio_llegada, 
                                            idpedido: idpedido,
                                            idmaterial: idmaterial,
                                            idreclamo: this.idReclamoVariable}]}
    this.http.post(environment.API_URL, register)
    .subscribe( data => { 
      returning = data
    })
    window.location.reload()
  }
  //MODAL DETALLER RECLAMO

}
