import { HairAndCosmeticsPage } from './app.po';

describe('hair-and-cosmetics App', function() {
  let page: HairAndCosmeticsPage;

  beforeEach(() => {
    page = new HairAndCosmeticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
