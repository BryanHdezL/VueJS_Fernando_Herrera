// Importacion de componente
import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

// Test del componente Counter
describe('Counter Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter)
  })

  // Prueba para comporbar que el componente no se modifico
  test('Debe de hacer match con el snapshot', () => {
    // Evaluamos el HTML del componente
    expect(wrapper.html()).toMatchSnapshot()
  })

  // Prueba para verificar el valor de una etiqueta HTML
  test('H2 debe de terner el valor defecto "Counter"', () => {
    const wrapper = shallowMount(Counter)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    const h2Value = wrapper.find('h2').text()
    expect(h2Value).toBe('Counter');
  })

  // Prueba con find & findAll
  test('El valor defecto debe de ser 100 en el parrafo', () => {
    // const pTags = wrapper.findAll('p')
    // expect(pTags[1].text()).toBe('100')
    const value = wrapper.find('[data-testid="counter"]').text()
    expect(value).toBe('100')
    expect(value).toBe('100')
  })

  // Prueba de eventos
  test('Debe de incrementar y decremenetar el contador', async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    const value = wrapper.find('[data-testid="counter"]').text()
    expect(value).toBe('101')
  })

  // Prueba de propiedades
  test('Debe de establecer el valor por defecto', () => {
    const { start } = wrapper.props()
    const value = wrapper.find('[data-testid="counter"]').text()
    expect(Number(value)).toBe(start)
  });

  // Prueba de propiedades enviadas
  test('Debe de mostrar la propiedad title', () => {
    const wrapper = shallowMount(Counter, {
      props: {
        title: 'Hola Mundo'
      }
    })
    expect(wrapper.find('h2').text()).toBe('Hola Mundo')
  });

})