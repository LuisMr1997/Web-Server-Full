import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ReclamosComponent } from './pedidos/reclamos/reclamos.component';
import { ResumenPedidoComponent } from './pedidos/resumen-pedido/resumen-pedido.component';
import { ResumenReclamosComponent } from './pedidos/reclamos/resumen-reclamos/resumen-reclamos.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { AlbaranComponent } from './albaran/albaran.component';
import { ResumenAlbaranComponent } from './albaran/resumen-albaran/resumen-albaran.component';
import { ResumenFacturacionComponent } from './facturacion/resumen-facturacion/resumen-facturacion.component';
import { NichoComponent } from './materiales/nicho/nicho.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PedidosComponent,
    ReclamosComponent,
    ResumenPedidoComponent,
    ResumenReclamosComponent,
    MaterialesComponent,
    ProveedoresComponent,
    ClientesComponent,
    FacturacionComponent,
    AlbaranComponent,
    ResumenAlbaranComponent,
    ResumenFacturacionComponent,
    NichoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
