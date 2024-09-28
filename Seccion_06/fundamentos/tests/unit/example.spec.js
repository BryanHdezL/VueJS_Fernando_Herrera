// Funcion describe

describe('Example Component', () => {

  test('Debe de ser mayor a 10', () => {
    // 1. Arreglar
    let value = 10;
    // 2. Estimulo
    value += 2
    // 3. Observar el resultado
    // if (value > 10) 'OK'
    // else throw `${value} no es mayor a 10.`
    expect(value).toBeGreaterThan(10)
  })

})