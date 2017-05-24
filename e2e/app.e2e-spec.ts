import { QuixiquePage } from './app.po';

describe('quixique App', () => {
  let page: QuixiquePage;

  beforeEach(() => {
    page = new QuixiquePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
