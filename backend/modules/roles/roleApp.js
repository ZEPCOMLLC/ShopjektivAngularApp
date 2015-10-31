  'use strict';

  angular.module('magazin.role', ['permissions','user'])
   .run(run);
    run.$inject = ['Permission','User','$rootScope'];
     function run($user,$permission,$rootScope) {
	 
	  // Define anonymous role
      $permission
	  .defineRole('anonymous', function (stateParams) {
        // If the returned value is *truthy* then the user has the role, otherwise they don't
        if (!$user) {
		 // Is anonymous
          return true; 
        }
        return false;
      })
	    .defineRole('user', function (stateParams) {
          return $user.checkSession();
        })
		.defineRole('admin', function (stateParams) {
           var deferred = $q.defer();

          $user.getAccessLevel().then(function (data) {
            if (data.accessLevel === 'admin') {
              deferred.resolve();
            } else {
              deferred.reject();
            }
          }, function () {
            // Error with request
            deferred.reject();
          });

          return deferred.promise;
        })
	  
	 }
      