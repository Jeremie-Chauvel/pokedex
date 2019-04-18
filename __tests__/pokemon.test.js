import { mount } from '@vue/test-utils'
import Pokemon from '../components/Pokemon'

describe('Pokemon', () => {
  it('Should be a Vue instance', () => {
    const wrapper = mount(Pokemon)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('convertHectogrammsToKilograms', () => {
  it('Should return correct conversion value', () => {
    expect(Pokemon.methods.convertHectogrammsToKilograms(51)).toBe(5.1)
    expect(Pokemon.methods.convertHectogrammsToKilograms(60.9874)).toBe(6.1)
    expect(Pokemon.methods.convertHectogrammsToKilograms(0)).toBe(0)
    expect(Pokemon.methods.convertHectogrammsToKilograms(-25)).toBe(-2.5)
  })
})

describe('convertHeightTostr', () => {
  it('Should return correct string for each value', () => {
    expect(Pokemon.methods.convertHeightTostr(51)).toBe('5.1 m')
    expect(Pokemon.methods.convertHeightTostr(6)).toBe('6 dm')
    expect(Pokemon.methods.convertHeightTostr(0)).toBe('0 dm')
  })
})
