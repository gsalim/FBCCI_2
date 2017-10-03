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
                })
                .state('fbcci.about', {
                    url: "/about",
                    templateUrl: "pages/fbcci/about.html"
                })
                .state('fbcci.past_presidents', {
                    url: "/past-presidents",
                    templateUrl: "pages/fbcci/past_presidents.html"
                })
                .state('fbcci.past_first_vp', {
                    url: "/past-first-vp",
                    templateUrl: "pages/fbcci/past_first_vp.html"
                })
                .state('fbcci.past_vp', {
                    url: "/past_vp",
                    templateUrl: "pages/fbcci/past_vp.html"
                })
                .state('fbcci.vision_mission', {
                    url: "/vision_mission",
                    templateUrl: "pages/fbcci/vision_mission.html"
                })
                .state('fbcci.secretariat', {
                    url: "/secretariat",
                    templateUrl: "pages/fbcci/secretariat.html"
                })
                .state('fbcci.president', {
                    url: "/president",
                    templateUrl: "pages/fbcci/president.html"
                })
                .state('fbcci.first_vice_president', {
                    url: "/first-vice-president",
                    templateUrl: "pages/fbcci/first_vice_president.html"
                })
                .state('fbcci.vice_president', {
                    url: "/vice-president",
                    templateUrl: "pages/fbcci/vice_president.html"
                })
                .state('fbcci.directors', {
                    url: "/directors",
                    templateUrl: "pages/fbcci/director.html"
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
                })
                .state('fbcci.general_affairs', {
                    url: "/general-affairs",
                    templateUrl: "pages/fbcci/general_affairs.html"
                })
                .state('fbcci.membership_legal_affairs', {
                    url: "/membership-legal-affairs",
                    templateUrl: "pages/fbcci/membership_legal_affairs.html"
                })
                .state('fbcci.international_division', {
                    url: "/international-division",
                    templateUrl: "pages/fbcci/international_division.html"
                })
                .state('fbcci.research_division', {
                    url: "/research-division",
                    templateUrl: "pages/fbcci/research_division.html"
                })
                .state('fbcci.trade_finance', {
                    url: "/trade-finance",
                    templateUrl: "pages/fbcci/trade_finance.html"
                })
                .state('fbcci.pr_protocols', {
                    url: "/pr-protocols",
                    templateUrl: "pages/fbcci/pr_protocols.html"
                })
                .state('fbcci.sme_price_monitoring', {
                    url: "/sme-price-monitoring",
                    templateUrl: "pages/fbcci/sme_price_monitoring.html"
                })
                .state('fbcci.ongoing_events', {
                    url: "/ongoing-events",
                    templateUrl: "pages/fbcci/ongoing_events.html"
                })
                .state('fbcci.upcoming_events', {
                    url: "/upcoming-events",
                    templateUrl: "pages/fbcci/upcoming_events.html"
                })
                .state('fbcci.annual_report', {
                    url: "/annual-report",
                    templateUrl: "pages/fbcci/annual_report.html"
                })
                .state('fbcci.business_report', {
                    url: "/business-report",
                    templateUrl: "pages/fbcci/business_report.html"
                })
                .state('fbcci.research_papers', {
                    url: "/research-papers",
                    templateUrl: "pages/fbcci/research_papers.html"
                })
                .state('fbcci.press_release', {
                    url: "/press-release",
                    templateUrl: "pages/fbcci/press_release.html"
                })
                .state('fbcci.photo_gallery', {
                    url: "/photo-gallery",
                    templateUrl: "pages/fbcci/photo_gallery.html"
                })
                .state('fbcci.video_gallery', {
                    url: "/video-gallery",
                    templateUrl: "pages/fbcci/video_gallery.html"
                });
    }]);

//                .state('fbcci.events', {
//                    url: "/events",
//                    templateUrl: "pages/fbcci/events.html"
//                })

app.directive('camera', [
    "$compile", "$timeout", function ($compile, $timeout) {
        return {
            restrict: 'A',
            scope: {
                options: '='
            },
            link: function ($scope, element, attr) {
                return $timeout(function () {
                    return jQuery(element).camera($scope.options);
                }, 500);
            }
        };
    }
]);

//    http://onehungrymind.com/build-sweet-photo-slider-angularjs-animate/
//    https://greensock.com/get-started-js#basics
//    https://code.angularjs.org/1.6.5/