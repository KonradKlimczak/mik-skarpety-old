angular.module('mikApp').service('OfferService', ['$http', '$mdDialog',
  function ($http, $mdDialog) {
    this.getOffer = getOffer;
    this.getOfferById = getOfferById;
    this.getCategories = getCategories;
    this.showErrorDialog = showErrorDialog;

    function getOffer() {
      return $http.get('/app/offer/socks.json');
    }

    function getCategories() {
      return [{
        "name": "All",
        "value": true
      }, {
        "name": "Men",
        "value": true
      }, {
        "name": "Women",
        "value": true
      }, {
        "name": "Sport",
        "value": true
      }, {
        "name": "Frotte",
        "value": true
      }, {
        "name": "Stopki",
        "value": true
      }, {
        "name": "Bambusowe",
        "value": true
      }, {
        "name": "Category_7",
        "value": true
      }];
    }

    function getOfferById(sockId) {
      throw {
        name: "NotImplementedError",
        message: "This function is not implemented due to missing backend of app."
      };
    }

    function showErrorDialog() {
      return $mdDialog.show($mdDialog.confirm({
        title: 'Request failed',
        textContent: 'HTTP request has failed. Please try again later.',
        ok: 'Try Again',
        cancel: 'Cancel'
      }));
    }
  }]);