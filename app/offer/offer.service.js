angular.module('mikApp').service('OfferService', ['$state', '$location', function ($state, $location) {
  this.getOffer = getOffer;
  this.goToDetails = goToDetails;
  this.getOfferById = getOfferById;

  function getOffer() {
    // This function is going to use $http
    var offer = [{
      id: 'm01',
      name: 'Suit socks',
      categories: ['Men'],
      image: '/images/socks/m01.jpg',
      sizes: ['38-40', '41-43', '44-46'],
      colors: {
        'Black': 'black-box',
        'Blue gray': 'blue-gray-box'
      },
      descriptions: [
        'Socks ideal for a suit and not only.',
        'Made from high quality combed cotton.',
        'True comfort and elegance.',
        'Available in rich colors.',
        'Flat seam and wide ribbing causing no pinching.'
      ],
      amount: 10
    }, {
      id: 'sock-bold',
      name: 'Skarpety Awangarda',
      categories: ['Women'],
      image: '/images/socks/d01.jpg',
      sizes: ['38-40', '41-43', '44-46'],
      colors: {
        'Black': 'black-box'
      },
      descriptions: [
        'Socks ideal for a suit and not only.',
        'Made from high quality combed cotton.',
        'Szyk i moda.',
        'Available in rich colors.',
        'Flat seam and wide ribbing causing no pinching.'
      ],
      amount: 10
    }, {
      id: 'bamboo-sock',
      name: 'Bamboo socks',
      categories: ['Men'],
      image: '/images/socks/m02.jpg',
      sizes: ['38-40', '41-43', '44-46'],
      descriptions: [
        'Socks with silver ions.',
        'Made of high quality bamboo yarn.',
        'Właściwości antybakteryjne i antypotne.',
        'Dostępne w różnych kolorach.',
        'Flat seam and wide ribbing causing no pinching.'
      ],
      amount: 10
    }, {
      id: 'short-sock',
      name: 'Skarpety Garniturowe',
      categories: ['Men'],
      image: '/images/socks/m03.jpg',
      sizes: ['38-40', '41-43', '44-46'],
      descriptions: [
        'Socks ideal for a suit and not only.',
        'Made from high quality combed cotton.',
        'True comfort and elegance.',
        'Available in rich colors.',
        'Flat seam and wide ribbing causing no pinching.'
      ],
      amount: 10
    }, {
      id: 'shortx-sock',
      name: 'Skarpety Garniturowe',
      categories: ['Men'],
      image: '/images/socks/d02.jpg',
      sizes: ['38-40', '41-43', '44-46'],
      descriptions: [
        'Socks ideal for a suit and not only.',
        'Made from high quality combed cotton.',
        'True comfort and elegance.',
        'Available in rich colors.',
        'Flat seam and wide ribbing causing no pinching.'
      ],
      amount: 10
    }, {
      id: 'shortx-sock',
      name: 'Skarpety Garniturowe',
      categories: ['Men'],
      image: '/images/socks/d03.jpg',
      sizes: ['38-40', '41-43', '44-46'],
      descriptions: [
        'Socks ideal for a suit and not only.',
        'Made from high quality combed cotton.',
        'True comfort and elegance.',
        'Available in rich colors.',
        'Flat seam and wide ribbing causing no pinching.'
      ],
      amount: 10
    }];
    return offer;
  }

  function goToDetails(sock) {
    // $state.go('details', {param1: sock.id});
    $location.path('/details/' + sock.id).replace();
  }

  function getOfferById(sockId) {
    // This function is going to use $http
    var socks = getOffer();
    var sock;

    for (var i = 0; i < socks.length; i += 1) {
      if (socks[i].id === sockId) {
        var sock = socks[i];
        break
      }
    }

    return sock;
  }
}]);