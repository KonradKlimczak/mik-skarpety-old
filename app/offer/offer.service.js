angular.module('mikApp').service('OfferService', ['$http', '$mdDialog',
  function ($http, $mdDialog) {
    var categories = [{
      'name': 'All',
      'value': true
    }, {
      'name': 'Men',
      'value': true
    }, {
      'name': 'Women',
      'value': true
    }, {
      'name': 'Sport',
      'value': true
    }, {
      'name': 'Frotte',
      'value': true
    }, {
      'name': 'Short',
      'value': true
    }, {
      'name': 'Bamboo',
      'value': true
    }, {
      'name': 'Knee',
      'value': true
    }, {
      'name': 'Pressure-free',
      'value': true
    }];
    var colors = {
      'White': 'white-box',
      'Black': 'black-box',
      'Ashen': 'ashen-box',
      'Steel': 'steel-box',
      'Jeans': 'jeans-box',
      'Navy blue': 'navy-blue-box',
      'Graphite': 'graphite-box',
      'Beige': 'beige-box',
      'Bronze': 'bronze-box'
    };
    this.getOffer = getOffer;
    this.getOfferById = getOfferById;
    this.getCategories = getCategories;
    this.showErrorDialog = showErrorDialog;
    this.getColors = getColors;

    function getOffer() {
      return $http.get('/app/data/socks.dat');
    }

    function getCategories() {
      return categories;
    }

    function getOfferById(sockId) {
      throw {
        name: 'NotImplementedError',
        message: 'This function is not implemented due to missing backend of app.'
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

    function getColors() {
      return colors;
    }
  }]);