/**
 * Created by Code_Beast on 5/4/2016.
 */

angular.module('configuratorApp').
  controller('detailCtrl',['$scope' , '$http' ,'$routeParams', function ($scope , $http , $routeParams) {
  $http.get('data/data.json').success(function (data) {
    $scope.artists=data;
    $scope.semone=data[$routeParams.itemId].firstsem;
    $scope.semtwo=data[$routeParams.itemId].secondsem;
    $scope.whichItem=$routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });


}]);
