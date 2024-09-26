// API Key
const apiKey = 'pGpGnrkwcTCAqf5T0Bw48UhJwquR8WST'

// Fetch API
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  // Obtenemos el contenido
  .then(resp => resp.json())
  .then(({ data }) => {
    // Almacenamos el url de la imagen
    const { url } = data.images.original
    console.log(url)

    // Agrrega la imagen en el HTML
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  })
  // Error, no se logro obtener el contenido
  .catch(e => console.log(e))