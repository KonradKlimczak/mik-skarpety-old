describe('OfferService factory', function () {
  var OfferService;

  beforeEach(angular.mock.module('mikApp'));

  beforeEach(inject(function (_OfferService_) {
    OfferService = _OfferService_;
  }));

  it('should exist', function () {
    expect(OfferService).toBeDefined();
  });
});