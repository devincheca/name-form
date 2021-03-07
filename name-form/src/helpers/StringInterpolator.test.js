import StringInterpolator from './StringInterpolator'

it('encrypts strings', () => {
  const interpolator = new StringInterpolator()
  interpolator.name = 'Kevin'
  expect(interpolator.getEncName()).toEqual('veikn');
  interpolator.name = 'Truong'
  expect(interpolator.getEncName()).toEqual('uorntg');
});
