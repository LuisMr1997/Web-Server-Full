import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resumen-facturacion',
  templateUrl: './resumen-facturacion.component.html',
  styleUrls: ['./resumen-facturacion.component.scss']
})
export class ResumenFacturacionComponent implements OnInit {

  respuestaDetalleFactura: any[]
  table_header: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataDetalleFacturas()
    this.table_header = [
      {
        idfactura: 'Código',
        idmaterial: 'Materiales',
        cantidad: 'Código del pedido',
        precio: 'Material',
        descuento: 'Nombre'
      }
    ]
  }

  getLocalStorage(){
    let id = localStorage.getItem("id")
    return id
  }

  getDataDetalleFacturas = () => {
    this.http.get<any>(environment.API_URL + `FacturasAPI?idfactura=${this.getLocalStorage()}`)
    .subscribe(data => {
      this.respuestaDetalleFactura = data.datos
    })
  }

  deleteDataTable = (value) => {
    let tabla = 'detalle_factura'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
  }

}
