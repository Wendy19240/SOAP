using ServiceReference;

class Program
{
    static async Task Main(string[] _)
    {
        var client = new CalculatorSoapClient(CalculatorSoapClient.EndpointConfiguration.CalculatorSoap);

        try
        {
            int a = 5;
            int b = 3;

            var addResult = await client.AddAsync(a, b);
            var substractResult = await client.SubtractAsync(a, b);
            var multiplyResult = await client.MultiplyAsync(a, b);
            var divideResult = await client.DivideAsync(a, b);

            Console.WriteLine($"Valores => a = {a}; b = {b}");
            Console.WriteLine($"Resultado de la suma: {addResult}");
            Console.WriteLine($"Resultado de la resta: {substractResult}");
            Console.WriteLine($"Resultado de la multiplicacion: {multiplyResult}");
            Console.WriteLine($"Resultado de la division: {divideResult}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error al llamar al servicio: {ex.Message}");
        }
        finally
        {
            await client.CloseAsync();
        }
    }
}