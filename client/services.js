// Include OAuth.js in the <head> of your HTML,

// <script src="/path/to/oauth.js"></script>

// In your JavaScript, add this line to initialize OAuth.js

// OAuth.initialize('your_app_public_key');
angular.module('SGN.login', [])
.factory('facebookService', function($q, $http) {

  //Authentication result returned by facebook. Inclues an auth token
  var authorizationResult = false;
  var authtoken = false;

  return {
    initialize: function() {
      // do we still need this?
    },
    // connectFacebook: function() {
    //   var deferred = $q.defer();
    //   $http.get('http://localhost:3000/signin')
    //   .then(function(response) {
    //     //todo
    //     deferred.resolve(response);
    //   });
    //   return deferred.promise;
    // },
    getFriends: function () {
      // api call to GET /friends
      // return promise
    }
  };
    
});

angular.module('SGN.requests', [])
.factory('SGNRequests', function($http) {
  return {
    getFriends: function (entry) {
      return $http({
        method: 'GET',
        url: '/getFriends',
        data: entry
      }).then(function(resp) {
        return resp;
      });
    },
    addFriend: function (entry) {
      return $http({
        method: 'POST',
        url: '/users/friends',
        data: entry
      }).then(function(resp) {
        return resp;
      });
    },
    updateProfile: function (entry) {
      return $http({
        method: 'PUT',
        url: '/users/profile',
        data: entry
      }).then(function(resp) {
        return resp;
      });
    },

    //STEAM api calls
    getSteamProfile: function (steamID, callback) {
      return $http({
        method: 'GET',
        url: '/updateSteam?steamID=' + steamID
      }).then(function(resp) {
        callback (resp);
      });
    },
    getSteamFriends: function(steamID, callback) {
      return $http({
        method: 'GET',
        url: '/updateSteamFriends?steamID=' + steamID
      }).then(function(resp) {
        callback (resp);
      });
    },

    //our DB STEAM calls
    getSteamDBProfile: function(steamID, callback) {
      return $http({
        method: 'GET',
        url: '/users/steam?steamID=' + steamID,
      }).then(function(resp) {
        callback (resp);
      });
    },
    updateSteamProfile: function (accountInfo) {
     return $http({
       method: 'POST',
       url: '/users/steam',
       data: accountInfo
     }).then(function(resp) {
       return resp;
     }); 
    }


  };
});