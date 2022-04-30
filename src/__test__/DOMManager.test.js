import { getFetchUrl, getPostUrl, createInitialDom } from '../modules/GLOBALS'
describe('check post and get urls', () => {
  test('get POST url passing an id', () => {
    const temID = 'test/123';
    const fetchULT = getFetchUrl(temID);
    const expected = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${temID}/scores/`;
    expect(fetchULT).toBe(expected);
  })
});