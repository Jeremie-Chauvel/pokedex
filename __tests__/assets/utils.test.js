import * as utils from '../../assets/utils'

describe('convertHectogrammsToKilograms', () => {
  it('Should return correct conversion value', () => {
    expect(utils.convertHectogrammsToKilograms(51)).toBe(5.1)
    expect(utils.convertHectogrammsToKilograms(60.9874)).toBe(6.1)
    expect(utils.convertHectogrammsToKilograms(0)).toBe(0)
    expect(utils.convertHectogrammsToKilograms(-25)).toBe(-2.5)
  })
})

describe('convertHeightTostr', () => {
  it('Should return correct string for each value', () => {
    expect(utils.convertHeightTostr(51)).toBe('5.1 m')
    expect(utils.convertHeightTostr(6)).toBe('6 dm')
    expect(utils.convertHeightTostr(0)).toBe('0 dm')
  })
})
