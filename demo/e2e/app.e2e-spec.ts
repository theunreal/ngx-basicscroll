import { NgxBasicscrollDemoPage } from './app.po';

describe('ngx-basicscroll-demo App', () => {
  let page: NgxBasicscrollDemoPage;

  beforeEach(() => {
    page = new NgxBasicscrollDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
