describe('Test pictures', function () {
  it('should load every image', function () {
    browser.get('http://localhost:3000/offer');
    browser.executeAsyncScript(function (callback) {
      var imgs = document.getElementsByTagName('img'),
        loaded = 0;
      for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].naturalWidth > 0) {
          loaded = loaded + 1;
        };
      };
      callback(imgs.length - loaded);
    }).then(function (brokenImagesCount) {
      expect(brokenImagesCount).toBe(0);
    });
  });
});
