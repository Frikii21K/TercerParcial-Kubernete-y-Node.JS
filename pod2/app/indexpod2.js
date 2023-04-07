const http = require('http');

function Fburbuja(arreglo) {
  const n = arreglo.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arreglo[j] > arreglo[j + 1]) {
        const temp = arreglo[j];
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = temp;
      }
    }
  }

  return arreglo;
}

  function Binario(arreglo, element) {
    let inicio = 0;
    let fin = arreglo.length - 1;
  
    while (inicio <= fin) {
      const medio = Math.floor((inicio + fin) / 2);
  
      if (arreglo[medio] === element) {
        return medio;
      } else if (arreglo[medio] < element) {
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
  
    return -1;
  }
  

  const arr = [74,95,115,55,25,33,89,1000,25200,600,777,989,1,2,10,19,16,88,333,459,758,25000];

const server = http.createServer((req, res) => {
  const elemento_buscar = parseInt(req.url.slice(1));
  console.log('Arreglo original:', arr);
  res.write(`Arreglo original: ${arr}\n`);

const ArregloOrdenado = Fburbuja(arr);
console.log('Arreglo ordenado:', ArregloOrdenado);
res.write(`Arreglo ordenado: ${ArregloOrdenado}\n`);

  const bus = Binario(arr, elemento_buscar);
  if (bus === -1) {
    const mensaje = `El elemento ${elemento_buscar} no se encontro en el arreglo.`;
    res.write(mensaje);
  } else {
    const mensaje = `El elemento ${elemento_buscar} se encontro en la posicion ${bus}.`;
    res.write(mensaje);
  }

  res.end();
});

const PORT = 2012;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});