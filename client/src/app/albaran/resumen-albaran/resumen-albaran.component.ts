import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resumen-albaran',
  templateUrl: './resumen-albaran.component.html',
  styleUrls: ['./resumen-albaran.component.scss']
})
export class ResumenAlbaranComponent implements OnInit {

  respuestaDetalleAlbaran: any[]
  table_header: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataDetalleAlbaran()
    this.table_header = [
      {
        idalbaran: 'Albaran',
        idmaterial: 'Material',
        cantidad: 'cantidad',
        precio: 'precio'
      }
    ]
  }

  getLocalStorage(){
    let id = localStorage.getItem("id")
    return id
  }

  getDataDetalleAlbaran = () => {
    this.http.get<any>(environment.API_URL + `Albaran?idalbaran=${this.getLocalStorage()}`)
    .subscribe(data => {
      this.respuestaDetalleAlbaran = data.datos
    })
    console.log(this.respuestaDetalleAlbaran)
  }

  deleteDataTable = (value) => {
    let tabla = 'detalle_albaran'
    this.http.delete(environment.API_URL + `?tabla=${tabla}&&id=${value}`)
    .subscribe( data => { })
  }

}
