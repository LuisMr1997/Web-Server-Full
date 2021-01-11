import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resumen-reclamos',
  templateUrl: './resumen-reclamos.component.html',
  styleUrls: ['./resumen-reclamos.component.scss']
})
export class ResumenReclamosComponent implements OnInit {

  respuestaDetalleReclamo: any[]
  table_header: any

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.table_header = [
      {
        cantidad: 'Cantidad',
        precio_llegada: 'Precio llegada',
        precio_pedido: 'Precio pedido',
        idReclamo: 'Reclamo',
        idPedido: 'Pedido',
        idMaterial: 'Material'
      }
    ]
    this.getDataDetallePedido()
  }

  getLocalStorage(){
    let id = localStorage.getItem("id")
    return id
  }

  getDataDetallePedido = () => {
    this.http.get<any>(environment.API_URL + `ReclamosAPI?idreclamo=${this.getLocalStorage()}`)
    .subscribe(data => {
      this.respuestaDetalleReclamo = data.datos
    })
    console.log(this.respuestaDetalleReclamo)
  }

  deleteDataTable = (value) => {
    let tabla = 'detalle_reclamo'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
  }

}
