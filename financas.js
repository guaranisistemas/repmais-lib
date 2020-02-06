let financas = {


    calcularImpostosPorItemPedido: function(valor, quantidade, porIpi, porSt) {

        if(!porIpi) porIpi = 0;
        if(!porSt) porSt = 0;

        let ipi = (porIpi/100) * valor;
        let st = (porSt/100) * valor;

        return (quantidade * valor) + ( quantidade * ipi ) + ( quantidade * st );

    }

}

module.exports = financas;