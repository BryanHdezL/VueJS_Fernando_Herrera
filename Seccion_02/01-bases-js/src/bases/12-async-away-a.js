const miPromesa = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Tenemos un valor en la promesa')
    }, 1000);
  })
}

const medirTiempoAsync = async () => {
  try {
    console.log('Inicio');
    const respuesta = await miPromesa()
    console.log(respuesta);
    console.log('Fin');
    return 'Fin de medir tiempo async'
  } catch (error) {
    // Respuesta ante resultado existoso → Return
    // Respuesta ante resultado fallido → Throw
    // return 'Catch en medirTiempoCatch'
    throw 'Error en medirTiempoCatch'
  }
}

medirTiempoAsync()
  .then(valor => console.log('THEN exitoso: ', valor))
  .catch(err => console.log('Error: ', err))