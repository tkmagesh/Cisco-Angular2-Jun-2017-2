import { BugTrackerPage } from './app.po';

describe('bug-tracker App', () => {
  let page: BugTrackerPage;

  beforeEach(() => {
    page = new BugTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
