angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$scope', '$state'];

function HomeController($scope, $state) {
    $scope.myInterval = 2000;
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

    $scope.gotoFBCCI = function () {
        $state.go('fbcci');
    };
};
