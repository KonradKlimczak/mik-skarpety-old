angular.module('mikApp').service('OfferService', function() {
    this.getOffer = getOffer;
    
    function getOffer() {
        // This function is going to use $http
        var offer = [{
            id: 1,
            name: 'Suit socks',
            categories: ['Men'],
            image: '/images/socks/sk1m.jpg',
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
            id: 2,
            name: 'Skarpety Awangarda',
            categories: ['Men', 'Sport'],
            image: '/images/socks/sk2m.jpg',
            sizes: ['38-40', '41-43', '44-46'],
            descriptions: [
                'Socks ideal for a suit and not only.',
                'Made from high quality combed cotton.',
                'Szyk i moda.',
                'Available in rich colors.',
                'Flat seam and wide ribbing causing no pinching.'
            ],
            amount: 10
        }, {
            id: 3,
            name: 'Bamboo socks',
            categories: ['Men'],
            image: '/images/socks/sk3m.jpg',
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
            id: 4,
            name: 'Skarpety Garniturowe',
            categories: ['Men'],
            image: '/images/socks/sk1m.jpg',
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
});