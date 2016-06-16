/**
 * Created by Code_Beast on 5/19/2016.
 */
angular.module('configuratorApp')
  .factory('NetworkService',
    ['$rootScope','$http', function($rootScope,$http) {

      // Testing Area Start
        $rootScope.testVar='this is root scope testVar';
      //Testing area end

      return{

        testService: function (par) {
          alert("NetworkService is working fine"+par);
          return 'this test return';
        },

        initialise: function () {
          var wheels = new Array();
          /*
           *Get wheel data for exacting wheel name
           */
          

        }
      };

      }
      ]);
