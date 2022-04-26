     function generarPedido() {

            document.getElementById('pedido_vendedor').innerHTML = document.getElementById('idVendedor').value;
            document.getElementById('pedido_codigo').innerHTML = document.getElementById('idCodigo').value;
            document.getElementById('pedido_venta').innerHTML = document.getElementById('idVenta').value;
            document.getElementById('pedido_fecha').innerHTML = document.getElementById('idFecha').value;

            document.getElementById('pedido_articulo').innerHTML = document.getElementById('nombre').value;
            document.getElementById('pedido_contenido').innerHTML = document.getElementById('apellidos').value;
            document.getElementById('pedido_unidad').innerHTML = document.getElementById('telefono').value;
            document.getElementById('pedido_cantidad').innerHTML = document.getElementById('direccion').value;
            window.print();








           
        }