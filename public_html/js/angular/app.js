var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
                    controller: 'FBCCIController'
                })
                .state('fbcci.contact', {
                    url: "/contact",
                    templateUrl: "pages/fbcci/contact.html"
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/contact.html"
//                        }
//                    }
                })
                .state('fbcci.about', {
                    url: "/about",
                    templateUrl: "pages/fbcci/about.html"
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/about.html"
//                        }
//                    }
                })
                .state('fbcci.past_presidents', {
                    url: "/past-presidents",
                    templateUrl: "pages/fbcci/past_presidents.html"
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/past_presidents.html"
//                        }
//                    }
                })
                .state('fbcci.past_first_vp', {
                    url: "/past-first-vp",
                    templateUrl: "pages/fbcci/past_first_vp.html"
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/past_first_vp.html"
//                        }
//                    }
                })
                .state('fbcci.past_vp', {
                    url: "/past_vp",
                    templateUrl: "pages/fbcci/past_vp.html"
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/past_vp.html"
//                        }
//                    }
                })
                .state('fbcci.vision_mission', {
                    url: "/vision_mission",
                    templateUrl: "pages/fbcci/vision_mission.html"
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/vision_mission.html"
//                        }
//                    }
                })
                .state('fbcci.secretariat', {
                    url: "/secretariat",
                    templateUrl: "pages/fbcci/secretariat.html"
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/secretariat.html"
//                        }
//                    }
                })
                .state('fbcci.president', {
                    url: "/president",
                    templateUrl: "pages/fbcci/president.html"
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/president.html"
//                        }
//                    }
                })
                .state('fbcci.first_vice_president', {
                    url: "/first-vice-president",
                    templateUrl: "pages/fbcci/first_vice_president.html"
//                            views: {
//                                "fbcci": {
//                                    templateUrl: "pages/fbcci/first_vice_president.html"
//                                }
//                            }
                })
                .state('fbcci.vice_president', {
                    url: "/vice-president",
                    templateUrl: "pages/fbcci/vice_president.html"
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/vice_president.html"
//                        }
//                    }
                })
                .state('fbcci.directors', {
                    url: "/directors",
                    templateUrl: "pages/fbcci/director.html"
//                    controller: 'DirectorController'
//                    views: {
//                        "fbcci": {
//                            templateUrl: "pages/fbcci/director.html",
//                            controller: 'DirectorController'
//                        }
//                    }
                })
                .state('fbcci.directors_chamber_group', {
                    url: "/directors-chamber-group",
                    templateUrl: "pages/fbcci/directors_chamber_group.html"
                })
                .state('fbcci.directors_association_group', {
                    url: "/directors-association-group",
                    templateUrl: "pages/fbcci/directors_association_group.html"
                })
                .state('fbcci.directors_list', {
                    url: "/directors-list",
                    templateUrl: "pages/fbcci/directors-list.html"
                });
    }]);

//app.controller('myctrl', function ($scope) {
//    $scope.alim = "1.1.6";
//});

//    http://onehungrymind.com/build-sweet-photo-slider-angularjs-animate/
//    https://greensock.com/get-started-js#basics
//    https://code.angularjs.org/1.6.5/