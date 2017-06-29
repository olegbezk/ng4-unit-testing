import { Ng4TestingPage } from './app.po';

describe('ng4-testing App', () => {
  let page: Ng4TestingPage;

  beforeEach(() => {
    page = new Ng4TestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
