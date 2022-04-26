var count=0;
 
  /**
   * función para agregar valores a la tabla
   */
  function agregarValores(){
    // cogemos los valores del formulario
    var nombre=document.getElementById("nombre").value;
    var apellidos=document.getElementById("apellidos").value;
    var telefono=document.getElementById("telefono").value;
    var direccion=document.getElementById("direccion").value;
 
    // La variable cont, genera un id unico para cada contacto
    // Este id es el utilizado para eliminar-lo
    count++;
 
    if(nombre.length>0 || apellidos.length>0)
    {
      var tbody = document.getElementById("miTabla").getElementsByTagName("TBODY")[0];
 
      var attrId = document.createAttribute('id');
      attrId.value=count;
 
      var td1 = document.createElement("TD");
      td1.appendChild(document.createTextNode(nombre));
      var td2 = document.createElement("TD");
      td2.appendChild(document.createTextNode(apellidos));
      var td3 = document.createElement("TD");
      td3.appendChild(document.createTextNode(telefono));
      var td4 = document.createElement("TD");
      td4.appendChild(document.createTextNode(direccion));
      var td5 = document.createElement("TD");
      td5.appendChild(crearButton(count));
 
      var row = document.createElement("TR");
      row.setAttributeNode(attrId);
      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);
      tbody.appendChild(row);
    }
 
    // Eliminamos los valores del formulario
    document.getElementById("nombre").value="";
    document.getElementById("apellidos").value="";
    document.getElementById("telefono").value="";
    document.getElementById("direccion").value="";
  }
 
  /**
   * Función para eliminar un valor de la tabla
   */
  function eliminarValor(id)
  {
    var row = document.getElementById(id);
    row.parentNode.removeChild(row);
  }
 
  /**
   * Función que crea el boton de eliminar
   * Tiene que recibie el id a eliminar
   */
  function crearButton(id)
  {
    var button=document.createElement("input");
    var attrType=document.createAttribute('type');
    attrType.value="button";
    var attrValue=document.createAttribute('value');
    attrValue.value="Eliminar";
    var attrOnclick=document.createAttribute('onclick');
    attrOnclick.value="eliminarValor("+count+");";
 
    button.setAttributeNode(attrType);
    button.setAttributeNode(attrValue);
    button.setAttributeNode(attrOnclick);
 
    return button;
  }

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