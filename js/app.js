angular.module('cvvh', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                controller: 'mainCtrl'
            })

            .state('services', {
                url: '/services',
                templateUrl: './views/services.html',
                controller: 'mainCtrl'
            })

            .state('staff', {
                url: '/staff',
                templateUrl: './views/staff.html',
                controller: 'mainCtrl'
            })

            .state('contact', {
                url: '/contact-us',
                templateUrl: './views/contact.html',
                controller: 'mainCtrl'
            })

            .state('refill', {
                url: '/refill',
                templateUrl: './views/refill.html',
                controller: 'mainCtrl'
            });

        $urlRouterProvider
            .otherwise('/');
    });
