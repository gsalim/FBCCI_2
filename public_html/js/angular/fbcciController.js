angular.module('app').controller('FBCCIController', FBCCIController);
FBCCIController.$inject = ['$scope', '$state', '$window', '$location'];

function FBCCIController($scope, $state, $window, $location, vm) {
    $scope.isNavCollapsed = true;

    $scope.myInterval = 2500;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function () {
        slides.push({
            image: 'images/sliders/DSC_0146.jpg',
            text: '-',
            id: currIndex++
        });
        slides.push({
            image: 'images/sliders/DSC_0724.jpg',
            text: '-',
            id: currIndex++
        });
    };

    $scope.addSlide();

    $scope.hideDropDown = function () {
        $scope.isNavCollapsed = !$scope.isNavCollapsed;
        console.log("Full isNavCollapsed: " + $scope.isNavCollapsed);
    };

    $scope.iconBarClicked = function () {
        $scope.isNavCollapsed = !$scope.isNavCollapsed;
        console.log("Icon Bar isNavCollapsed: " + $scope.isNavCollapsed);
    };
    var count = 0;

    $scope.setupContent = function () {
        console.log("Collapsing Called...." + count++);
    };

    $scope.redirectTo = function (dir) {
        $state.go(dir);
    };

    $scope.downloadFile = function (doc) {
//        documents/Board-of-Directors-List-2017-2019.pdf
        var url = new $window.URL($location.absUrl()).origin + "/api/voyages/" +vm.voyage.id + '/documents/' + doc.id + '?auth=' + token;
        $window.open(url);
    };

    //angular.element($window).on('resize', function () {
    //   console.log($window.innerWidth);
    //});

    //http://jsfiddle.net/jaredwilli/SfJ8c/
    // http://embed.plnkr.co/uMKBlkHArfV0CwdJF5lH/preview
    // https://www.pointblankdevelopment.com.au/blog/76/getting-the-bootstrap-3-navbar-and-angularjs-to-play-nicely-together    
    // https://help.form.io/tutorials/walkthroughs/servicetracker/
}

