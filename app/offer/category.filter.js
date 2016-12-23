"use strict";
angular.module('mikApp').filter('categoryFilter', function() {
  return function(items, categories) {
    if (!categories) {
      return items;
    }

    return items.filter(function(element) {
      for (var i = 0; i < element.categories.length; i += 1) {
        for (var j = 0; j < categories.length; j += 1) {
          if (element.categories[i] === categories[j].name && categories[j].value) {
            return true;
          }
        }
      }
    });
  };
});