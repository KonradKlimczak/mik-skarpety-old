angular.module('mikApp').service('OfferService', function() {
    this.getOffer = getOffer;
    
    function getOffer() {
        // This function is going to use $http
        var offer = [{
            id: 1,
            name: 'Skarpety Garniturowe',
            image: '/images/socks/sk1m.jpg',
            sizes: ['38-40', '41-43', '44-46'],
            descriptions: [
                'Skarpety idealne do garnituru i nie tylko.',
                'Wykonane z wysokiej jakości bawełny czesankowej.',
                'Prawdziwa wygoda i elegancja.',
                'Dostępne w bogatej kolorystyce.',
                'Płaski szew i szeroki nieuciskający ściągacz.'
            ],
            amount: 10
        }, {
            id: 2,
            name: 'Skarpety Awangarda',
            image: '/images/socks/sk2m.jpg',
            sizes: ['38-40', '41-43', '44-46'],
            descriptions: [
                'Skarpety idealne do garnituru i nie tylko.',
                'Wykonane z wysokiej jakości bawełny czesankowej.',
                'Szyk i moda.',
                'Dostępne w bogatej kolorystyce.',
                'Płaski szew i szeroki nieuciskający ściągacz.'
            ],
            amount: 10
        }, {
            id: 3,
            name: 'Skarpety Bambusowe',
            image: '/images/socks/sk3m.jpg',
            sizes: ['38-40', '41-43', '44-46'],
            descriptions: [
                'Skarpety z jonami srebra.',
                'Wykonane z wysokiej jakości przędzy bambusowej.',
                'Właściwości antybakteryjne i antypotne.',
                'Dostępne w różnych kolorach.',
                'Płaski szew i szeroki nieuciskający ściągacz.'
            ],
            amount: 10
        }, {
            id: 4,
            name: 'Skarpety Garniturowe',
            image: '/images/socks/sk1m.jpg',
            sizes: ['38-40', '41-43', '44-46'],
            descriptions: [
                'Skarpety idealne do garnituru i nie tylko.',
                'Wykonane z wysokiej jakości bawełny czesankowej.',
                'Prawdziwa wygoda i elegancja.',
                'Dostępne w bogatej kolorystyce.',
                'Płaski szew i szeroki nieuciskający ściągacz.'
            ],
            amount: 10
        }];
        return offer; 
    }
});