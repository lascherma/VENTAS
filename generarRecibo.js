     function generarRecibo() {

            document.getElementById('recibo_vendedor').innerHTML = document.getElementById('idVendedor').value;
            document.getElementById('recibo_codigo').innerHTML = document.getElementById('idCodigo').value;
            document.getElementById('recibo_lugar').innerHTML = document.getElementById('idLugar').value;
            document.getElementById('recibo_fecha').innerHTML = document.getElementById('idFecha').value;
            document.getElementById('recibo_recibo').innerHTML = document.getElementById('idRecibo').value;

            document.getElementById('recibo_date').innerHTML = document.getElementById('idDate').value;
            document.getElementById('recibo_numero').innerHTML = document.getElementById('idNumero').value;
            document.getElementById('recibo_monto').innerHTML = document.getElementById('idMonto').value;


            document.getElementById('recibo_descuento').innerHTML = document.getElementById('idDescuento').value;
            document.getElementById('recibo_pronto').innerHTML = document.getElementById('idPronto').value;

            document.getElementById('recibo_condicion').innerHTML = document.getElementById('idCondicion').value;
            document.getElementById('recibo_forma').innerHTML = document.getElementById('idForma').value;
            document.getElementById('recibo_banco').innerHTML = document.getElementById('idBanco').value;
            document.getElementById('recibo_referencia').innerHTML = document.getElementById('idReferencia').value;


            document.getElementById('recibo_importe').innerHTML = document.getElementById('idImporte').value;
            document.getElementById('recibo_restante').innerHTML = document.getElementById('idRestante').value;
            document.getElementById('recibo_general').innerHTML = document.getElementById('idGeneral').value;
            document.getElementById('recibo_igual').innerHTML = document.getElementById('idIgual').value;

            document.getElementById('recibo_textarea').innerHTML = document.getElementById('idTextarea').value;
            window.print();








           
        }

      

        function dataAtual() {

            let data = new Data();
            return data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
        }