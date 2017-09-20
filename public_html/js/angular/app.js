var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $state) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "pages/home.html",
                    controller: 'HomeController'
                })
                .state('fbcci', {
                    url: "/fbcci",
                    templateUrl: "pages/fbcci.html",
//                    onEnter: function () {
//                        $state.go('fbcci.home');
//                    }
                    controller: 'FBCCIController'
                })
                .state('fbcci.contact', {
                    url: "/fbcci/contact",
                    views: {
                        "fbcci": {
                            templateUrl: "pages/fbcci/contact.html"
//                            controller: 'FBCCIController'
                        }
                    }
                })
//                .state('fbcci.about', {
//                    url: "/fbcci/about",
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/about.html",
//                            controller: 'AgentAccessCtrl'
//                        }
//                    }
//                })



//                .state('home2', {
//                    url: "/home2",
//                    templateUrl: "pages/home2.html"
//                })
//                .state('contact_us', {
//                    url: "/contact_us",
//                    templateUrl: "pages/contact_us.html"
//                })
//                .state('sign_up_individual', {
//                    url: "/sign_up_individual",
//                    templateUrl: "pages/sign_up_individual.html"
//                })
//                .state('jobs', {
//                    url: "/jobs",
//                    templateUrl: "pages/jobs.html"
//                })
//                .state('loan_product', {
//                    url: "/loan_product",
//                    templateUrl: "pages/loan_product.html"
//                })
//                .state('about', {
//                    url: "/about",
//                    templateUrl: "pages/about.html",
//                    controller: 'CarouselDemoCtrl'
//                })
//                .state('login', {
//                    url: "/login",
//                    templateUrl: "pages/login.html"
//                })
                ;
    }]);

//app.controller('myctrl', function ($scope) {
//    $scope.alim = "1.1.6";
//});

//    http://onehungrymind.com/build-sweet-photo-slider-angularjs-animate/
//    https://greensock.com/get-started-js#basics
//    https://code.angularjs.org/1.6.5/