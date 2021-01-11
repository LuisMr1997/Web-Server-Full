import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'reclamos', component: ReclamosComponent },
  { path: 'resumen_pedidos', component: ResumenPedidoComponent },
  { path: 'resumen_reclamos', component: ResumenReclamosComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'facturacion', component: FacturacionComponent },
  { path: 'resumen_facturacion', component: ResumenFacturacionComponent },
  { path: 'materiales', component: MaterialesComponent},
  { path: 'albaran', component: AlbaranComponent},
  { path: 'resumen_albaran', component: ResumenAlbaranComponent},
  { path: 'nicho', component: NichoComponent}
];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
