import { mount } from '@vue/test-utils'
import Pokemon from '../components/Pokemon'

describe('Pokemon', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Pokemon)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('convertPoundsToKilograms', () => {
  test('return correct conversion value', () => {
    expect(Pokemon.methods.convertPoundsToKilograms(50)).toBe(23)
    expect(Pokemon.methods.convertPoundsToKilograms(60.9874)).toBe(28)
    expect(Pokemon.methods.convertPoundsToKilograms(0)).toBe(0)
    expect(Pokemon.methods.convertPoundsToKilograms(-25)).toBe(-11)
  })
})
