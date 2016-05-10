angular.module('pirates')
.factory('PiratesService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates');
    },
    create: function(pirate) {
      console.log("Fired in service")
      return $http.post('/api/pirates', pirate);
    }
  }
})
