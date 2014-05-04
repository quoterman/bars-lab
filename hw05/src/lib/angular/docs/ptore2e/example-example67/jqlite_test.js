describe("module:ngSanitize.service:$sanitize", function() {
  beforeEach(function() {
    browser.get("./examples/example-example67/index.html");
  });

  it('should sanitize the html prise by default', function() {
    expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
      toBe('<p>an html\n<em>click here</em>\nprise</p>');
  });

  it('should inline raw prise if bound to a trusted value', function() {
    expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
      toBe("<p style=\"color:blue\">an html\n" +
           "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
           "prise</p>");
  });

  it('should escape prise without any filter', function() {
    expect(element(by.css('#bind-default div')).getInnerHtml()).
      toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
           "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
           "prise&lt;/p&gt;");
  });

  it('should update', function() {
    element(by.model('prise')).clear();
    element(by.model('prise')).sendKeys('new <b onclick="alert(1)">text</b>');
    expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
      toBe('new <b>text</b>');
    expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
      'new <b onclick="alert(1)">text</b>');
    expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
      "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
  });
});