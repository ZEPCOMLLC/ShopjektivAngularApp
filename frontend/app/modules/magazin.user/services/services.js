'use strict';

/* Services */

/*
 http://docs.angularjs.org/api/ngResource.$resource

 Default ngResources are defined as

 'get':    {method:'GET'},
 'save':   {method:'POST'},
 'query':  {method:'GET', isArray:true},
 'remove': {method:'DELETE'},
 'delete': {method:'DELETE'}

 */

angular.module('magazin.frontend.user', ['ngResource'])

.factory('UsersFactory', function ($resource) {
    return $resource('../api/v1/user/', {}, {
        query: { method: 'GET', headers: {'Api-Key': '@token'},isArray: true  },
        create: { method: 'POST' }
    })
})

.factory('UserFactory', function ($resource) {
    return $resource('/api/v1/users/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
})
