;
exports.up = function(knex, Promise) {
  //TABLAS DEBILES
  return knex.schema
  .createTable( 'ubicacion', function( table ) {
    table.increments('id');
    table.string('nombre');
  })
  .createTable( 'proveedor', function( table ) {
    table.increments('id');
    table.string('identificacion').notNullable().unique();
    table.string('nombre');
    table.string('direccion');
    table.string('telefono');
  })
  .createTable( 'reclamo', function( table ) {
    table.increments('id');
    table.timestamp('fecha');
    table.string('comentario');
  })
  .createTable( 'cliente', function( table ) {
    table.increments('id');
    table.string('identificacion').notNullable().unique();
    table.string('nombre');
    table.string('apellido');
    table.string('direccion');
  })

  //TABLAS FUERTES
  .createTable( 'nicho', function( table ) {
    table.increments('id');
    table.string('nombre');
    table.integer('idubicacion').references('id').inTable('ubicacion');
  })
  .createTable( 'material', function( table ) {
    table.increments('id');
    table.string('nombre');
    table.string('descripcion');
    table.timestamp('fecha_registro');
    table.timestamp('fecha_actualizacion');
    table.decimal('precio');
    table.integer('idnicho').references('id').inTable('nicho');
    table.integer('idproveedor').references('id').inTable('proveedor');
  })
  .createTable( 'pedido', function( table ) {
    table.increments('id');
    table.timestamp('fecha');
    table.decimal('total');
    table.integer('idproveedor').references('id').inTable('proveedor');
  })
  .createTable( 'detalle_pedido', function( table ) {
    table.increments('id');
    table.string('nombre');
    table.integer('cantidad');
    table.decimal('precio');
    table.integer('idpedido').references('id').inTable('pedido');
    table.integer('idmaterial').references('id').inTable('material');
  })
  .createTable( 'albaran', function( table ) {
    table.increments('id');
    table.integer('idpedido').references('id').inTable('pedido');
    table.timestamp('fecha_entrega');
    table.decimal('total');
  })
  .createTable( 'detalle_albaran', function( table ) {
    table.increments('id');
    table.integer('idalbaran').references('id').inTable('albaran');
    table.integer('idmaterial').references('id').inTable('material');
    table.integer('cantidad');
    table.decimal('precio');
  })
  .createTable( 'detalle_reclamo', function( table ) {
    table.increments('id');
    table.integer('cantidad');
    table.decimal('precio_pedido');
    table.decimal('precio_llegada');
    table.integer('idreclamo').references('id').inTable('reclamo');
    table.integer('idpedido').references('id').inTable('pedido');
    table.integer('idmaterial').references('id').inTable('material');
  })
  .createTable( 'factura', function( table ) {
    table.increments('id');
    table.timestamp('fecha');
    table.decimal('total');
    table.integer('idcliente').references('id').inTable('cliente');
  })
  .createTable( 'detalle_factura', function( table ) {
    table.increments('id');
    table.integer('cantidad');
    table.decimal('precio');
    table.decimal('descuento');
    table.integer('idmaterial').references('id').inTable('material');
    table.integer('idfactura').references('id').inTable('factura');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists( 'ubicacion' )
    .dropTableIfExists( 'proveedor' )
    .dropTableIfExists( 'reclamo' )
    .dropTableIfExists( 'cliente' )
    .dropTableIfExists( 'nicho' )
    .dropTableIfExists( 'material' )
    .dropTableIfExists( 'pedido' )
    .dropTableIfExists( 'detalle_pedido' )
    .dropTableIfExists( 'albaran' )
    .dropTableIfExists( 'detalle_albaran' )
    .dropTableIfExists( 'detalle_reclamo' )
    .dropTableIfExists( 'factura' )
    .dropTableIfExists( 'detalle_factura' )
};
