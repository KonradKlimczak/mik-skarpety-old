angular.module('mikApp').directive('colorBox', ['OfferService', function(OfferService) {
  var colors = OfferService.getColors();
  return {
    restrict: 'E',
    replace: 'true',
    scope: {
      colorName: '=color'
    },
    templateUrl: '/app/offer/views/color-box.template.html',
    link: function(scope) {
      scope.colorClass = colors[scope.colorName];
    }
  };
}]);