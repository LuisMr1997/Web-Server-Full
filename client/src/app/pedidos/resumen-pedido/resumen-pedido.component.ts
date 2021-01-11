import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resumen-pedido',
  templateUrl: './resumen-pedido.component.html',
  styleUrls: ['./resumen-pedido.component.scss']
})
export class ResumenPedidoComponent implements OnInit {

  respuestaDetallePedido: any[]
  table_header: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataDetallePedido()
    this.table_header = [
      {
        idpedido: 'Código del pedido',
        idmaterial: 'Material',
        nombre: 'Nombre',
        cantidad: 'Cantidad',
        precio: 'Precio'
      }
    ]
  }

  getLocalStorage(){
    let id = localStorage.getItem("id")
    return id
  }

  getDataDetallePedido = () => {
    this.http.get<any>(environment.API_URL + `OnlyID?idpedido=${this.getLocalStorage()}`)
    .subscribe(data => {
      this.respuestaDetallePedido = data.datos
    })
    console.log(this.respuestaDetallePedido)
  }

  deleteDataTable = (value) => {
    let tabla = 'detalle_pedido'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
  }

}
