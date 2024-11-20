const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?WSDL'; // URL del servicio WSDL

// Crear cliente SOAP
soap.createClient(url, (err, client) => {
    if (err) {
        console.error('Error al crear el cliente SOAP:', err);
        return;
    }

    console.log('Cliente SOAP creado con éxito.');

    // Suma
    client.Add({ intA: 6, intB: 8 }, (err, result) => {
        if (err) {
            console.error('Error en la operación Add:', err);
            return;
        }
        console.log('Resultado de la suma:', result.AddResult);
    });

    // Resta
    client.Subtract({ intA: 10, intB: 8 }, (err, result) => {
        if (err) {
            console.error('Error en la operación Subtract:', err);
            return;
        }
        console.log('Resultado de la resta:', result.SubtractResult);
    });

    // Multiplicación
    client.Multiply({ intA: 6, intB: 8 }, (err, result) => {
        if (err) {
            console.error('Error en la operación Multiply:', err);
            return;
        }
        console.log('Resultado de la multiplicación:', result.MultiplyResult);
    });

    // División
    client.Divide({ intA: 8, intB: 4 }, (err, result) => {
        if (err) {
            console.error('Error en la operación Divide:', err);
            return;
        }
        console.log('Resultado de la división:', result.DivideResult);
    });
});
