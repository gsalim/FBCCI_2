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
    //Camera Slideshow
    $scope.images = [
        {
            bigimage: 'images/slides/bridge.jpg',
            thumb: 'images/slides/thumbs/bridge.jpg',
            desc: 'To be or not to be that is the question.'
        },
        {
            bigimage: 'images/slides/leaf.jpg',
            thumb: 'images/slides/thumbs/leaf.jpg',
            desc: 'God save the queen.'
        },
        {
            bigimage: 'images/slides/road.jpg',
            thumb: 'images/slides/thumbs/road.jpg',
            desc: 'All for one, one for all.'
        },
        {
            bigimage: 'images/slides/sea.jpg',
            thumb: 'images/slides/thumbs/sea.jpg',
            desc: 'No string attached.'
        }

    ];
}
;
