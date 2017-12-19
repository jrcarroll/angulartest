import { AnotherDeployTestPage } from './app.po';

describe('another-deploy-test App', () => {
  let page: AnotherDeployTestPage;

  beforeEach(() => {
    page = new AnotherDeployTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
