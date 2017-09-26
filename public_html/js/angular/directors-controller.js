//directors-controller
angular.module('app').controller('DirectorController', DirectorController);
DirectorController.$inject = ['$scope', '$state'];

function DirectorController($scope, $state) {
    $scope.redirectTo = function (dir) {
        $state.go(dir);
    };
}