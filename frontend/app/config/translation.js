'use strict';

angular
    .module('magazin.frontend')
    .config(
        function($translateProvider){
            //Tranlation data

            $translateProvider
                .translations('en', {
                HEADLINE: 'Hello there, This is my awesome app!',
                INTRO_TEXT: 'And it has i18n support!'
                })
                .translations('de', {
                HEADLINE: 'Hello there, This is my awesome app!',
                INTRO_TEXT: 'And it has i18n support!'
                });

            $translateProvider.determinePreferredLanguage(function () {
                // define a function to determine the language
                // and return a language key
            });

        });