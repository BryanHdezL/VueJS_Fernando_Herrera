import axios from 'axios'

// API Key
const apiKey = 'pGpGnrkwcTCAqf5T0Bw48UhJwquR8WST'

// `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: apiKey
  }
})

// giphyApi.get('/random')
//   .then(resp => {
//     // Obtener URL, forma sencilla
//     // const url = resp.data.data.images.original.url
//     // Obtener URL con destructuracion
//     const { data } = resp.data
//     const { url } = data.images.original
//     // Creo ele emento HTML
//     const img = document.createElement('img')
//     img.src = url
//     document.body.append(img)

//   })

export default giphyApi