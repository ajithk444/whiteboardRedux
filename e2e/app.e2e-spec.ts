import { WhiteboardReduxPage } from './app.po';

describe('whiteboard-redux App', function() {
  let page: WhiteboardReduxPage;

  beforeEach(() => {
    page = new WhiteboardReduxPage();
  });
  const expectedTitle = 'Whiteboard with Redux';
  it('should display message saying ' + expectedTitle + '!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(expectedTitle);
  });
});
