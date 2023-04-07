const http = require('http');

function busquedalinea(arreglo, element) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === element) {
      return i;
    }
  }
  return -1;
}

function busquedasalto(arreglo, element) {
  const tamano = arreglo.length;
  const salto = Math.floor(Math.sqrt(tamano));
  let izquierda = 0;
  let derecha = salto;

  while (derecha < tamano && arreglo[derecha] <= element) {
    izquierda = derecha;
    derecha += salto;
  }

  for (let i = izquierda; i < Math.min(derecha, tamano); i++) {
    if (arreglo[i] === element) {
      return i;
    }
  }

  return -1;
}

const arr = [];
  const tamano = 25000;

  for (let i = 0; i < tamano; i++) {
    arr.push(i);
  }


const server = http.createServer((req, res) => {
  
  const elemento_buscar = parseInt(req.url.slice(1)); // obtener el valor a buscar del URL
  const BLinear = busquedalinea(arr, elemento_buscar);
  const BSaltos = busquedasalto(arr, elemento_buscar);

  if (BLinear === -1 && BSaltos === -1) {
    const mensaje = `El elemento ${elemento_buscar} no se encontro en el array`;
    res.write(mensaje+`\n`);
  } else {
    const mensaje = `El elemento ${elemento_buscar} se encontro en el array en los indices lineal: ${BLinear} y saltos: ${BSaltos}`;
   // console.log(mensaje);
    res.write(mensaje+`\n`);
  }
  res.end();
});

const PORT = 2000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
