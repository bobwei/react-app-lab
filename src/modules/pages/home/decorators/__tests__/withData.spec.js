import state from './state.json';
import expectedResult from './expectedResult.json';
import { mapStateToProps } from '../withData';

it('can map state to props', () => {
  const result = mapStateToProps(state);
  expect(result)
    .toEqual(expectedResult);
});
