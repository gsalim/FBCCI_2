angular.module('app').controller('FBCCIController', FBCCIController);
FBCCIController.$inject = ['$scope', '$state'];

function FBCCIController($scope, $state) {
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
}

