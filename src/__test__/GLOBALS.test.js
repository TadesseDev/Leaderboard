import { getFetchUrl, getPostUrl, createInitialDom } from '../modules/GLOBALS'
document.body.innerHTML = '<ul id="to-do-lists"></ul>';
describe('check post and get urls', () => {
  test('get POST url passing an id', () => {
    const tempID = 'test/123';
    const fetchURT = getFetchUrl(tempID);
    const postURL = getPostUrl(tempID);
    const getExpected = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${tempID}/scores/`;
    const postExpected = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${tempID}/scores`;
    expect(fetchURT).toBe(getExpected);
    expect(postURL).toBe(postExpected);
  });
});