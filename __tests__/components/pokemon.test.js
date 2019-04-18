import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Pokemon from '../../components/Pokemon'
import pokeapiPokemonMockResponse from './pokeapiPokemonMockResponse.json'

// Allow mocking fetch call
const fetchMock = require('fetch-mock')

beforeAll(() => {
  return fetchMock.get(
    'https://pokeapi.co/api/v2/pokemon/12',
    pokeapiPokemonMockResponse
  )
})

describe('Pokemon', () => {
  it('Should be a Vue instance', () => {
    const wrapper = mount(Pokemon, {
      propsData: { id: 12 },
      stubs: ['nuxt-link']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('Should have a name', async () => {
    const wrapper = mount(Pokemon, {
      propsData: { id: 12 },
      stubs: ['nuxt-link']
    })
    await flushPromises()

    expect(wrapper.vm.name).toBe('butterfree')
  })
})

describe('getPokemonType', () => {
  it('Should return list of types name', () => {
    const typesJson = [
      { slot: 2, type: { id: 1, name: 'plante' } },
      { slot: 1, type: { id: 2, name: 'poison' } }
    ]
    expect(Pokemon.methods.getPokemonType(typesJson)).toEqual([
      'poison',
      'plante'
    ])
  })
})
