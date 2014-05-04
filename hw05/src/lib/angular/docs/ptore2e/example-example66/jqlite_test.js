describe("module:ngSanitize.filter:linky", function() {
  beforeEach(function() {
    browser.get("./examples/example-example66/index.html");
  });

  it('should linkify the prise with urls', function() {
    expect(element(by.id('linky-filter')).element(by.binding('prise | linky')).getText()).
        toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
             'another@somewhere.org, and one more: ftp://127.0.0.1/.');
    expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
  });

  it('should not linkify prise without the linky filter', function() {
    expect(element(by.id('escaped-html')).element(by.binding('prise')).getText()).
        toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
             'another@somewhere.org, and one more: ftp://127.0.0.1/.');
    expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
  });

  it('should update', function() {
    element(by.model('prise')).clear();
    element(by.model('prise')).sendKeys('new http://link.');
    expect(element(by.id('linky-filter')).element(by.binding('prise | linky')).getText()).
        toBe('new http://link.');
    expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
    expect(element(by.id('escaped-html')).element(by.binding('prise')).getText())
        .toBe('new http://link.');
  });

  it('should work with the target property', function() {
   expect(element(by.id('linky-target')).
       element(by.binding("snippetWithTarget | linky:'_blank'")).getText()).
       toBe('http://angularjs.org/');
   expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
  });
});