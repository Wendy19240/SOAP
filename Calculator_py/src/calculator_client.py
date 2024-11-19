from zeep import Client

# URL del WSDL
wsdl = "http://www.dneonline.com/calculator.asmx?WSDL"

# Crear el cliente
client = Client(wsdl)

# Suma
result_add = client.service.Add(intA=6, intB=8)
print("Resultado de la suma:", result_add)

# Resta
result_subtract = client.service.Subtract(intA=15, intB=5)
print("Resultado de la resta:", result_subtract)

# Multiplicación
result_multiply = client.service.Multiply(intA=4, intB=7)
print("Resultado de la multiplicación:", result_multiply)

# División
result_divide = client.service.Divide(intA=20, intB=4)
print("Resultado de la división:", result_divide)
