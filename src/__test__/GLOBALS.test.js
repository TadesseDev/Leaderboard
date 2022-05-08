import { getFetchUrl, getPostUrl, createInitialDom } from '../modules/GLOBALS'
document.body.innerHTML = '<ul id="to-do-lists"></ul>';
describe('check post and get urls', () => {
  test('get POST url passing an id', () => {
    const tempID = 'test/123';
    const fetchURT = getFetchUrl(tempID);
    const expected = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${tempID}/scores/`;
    expect(fetchURT).toBe(expected);
  });
  test('Get POST url from getPostUrl method', () => {
    const tempID = 'test/123';
    const postURL = getPostUrl(tempID);
    const expected = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${tempID}/scores`;
    expect(postURL).toBe(expected);
  });
});

describe('Test Initial DOM contents', () => {
  it('should render the home container', () => {
    createInitialDom().then(resolve => {
      expect(resolve).toBeTruthy();
    });
  });
  it('should render the Loading .gif', () => {
    createInitialDom().then(() => {

    });
  });
})