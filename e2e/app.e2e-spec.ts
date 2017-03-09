import { WhiteboardReduxPage } from './app.po';

describe('whiteboard-redux App', function() {
  let page: WhiteboardReduxPage;

  beforeEach(() => {
    page = new WhiteboardReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
