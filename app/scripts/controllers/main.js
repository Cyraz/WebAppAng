'use strict';

/**
 * @ngdoc function
 * @name configuratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the configuratorApp
 */
angular.module('configuratorApp')
  .controller('MainCtrl',['$scope','$rootScope','$http','NetworkService', function ($scope,$rootScope,$http,NetworkService) {

    $scope.modvar="this is script calling";
    $scope.selectedTab=2;
    $scope.isActiveTab=function (tab) {
      if(tab ==  $scope.selectedTab){
        return 'active';
      }else {
        return 'inactive';
      }
    };
    $scope.demoRim='http://v2d.configurators.ru/photo/wheels/rear/57motorsport-g07cr-bright-silver-paint.png';
    $http.get('http://realmags.com/rest/api/wheels').success(function (data) {
      $scope.wheels=data;
      $scope.picName1=$scope.wheels[0].name;
      $scope.picName2=$scope.wheels[1].name;
      $scope.picName3=$scope.wheels[2].name;
      $scope.picName4=$scope.wheels[3].name;
      $scope.picName5=$scope.wheels[4].name;
      $scope.picName6=$scope.wheels[5].name;

    });
    $scope.counter=6;
    $scope.nextPics=function(){
      if($scope.counter < $scope.wheels.length) {
        if((0 + $scope.counter) < $scope.wheels.length){
          $scope.picName1 = $scope.wheels[0 + $scope.counter].name;
        }else{
          $scope.picName1 ='NA';
        }
        if((1 + $scope.counter) < $scope.wheels.length){
          $scope.picName2 = $scope.wheels[1 + $scope.counter].name;
        }else{
          $scope.picName2 ='NA';
        }
        if((2 + $scope.counter) < $scope.wheels.length){
          $scope.picName3 = $scope.wheels[2 + $scope.counter].name;
        }else{
          $scope.picName3 ='NA';
        }
        if((3 + $scope.counter) < $scope.wheels.length){
          $scope.picName4 = $scope.wheels[3 + $scope.counter].name;
        }else{
          $scope.picName4 ='NA';
        }
        if((4 + $scope.counter) < $scope.wheels.length){
          $scope.picName5 = $scope.wheels[4 + $scope.counter].name;
        }else{
          $scope.picName5 ='NA';
        }
        if((5 + $scope.counter) < $scope.wheels.length){
          $scope.picName6 = $scope.wheels[5 + $scope.counter].name;
        }else{
          $scope.picName6 ='NA';
        }


        $scope.counter += 6;
        console.log('length : '+ $scope.wheels.length +' counter : ' +$scope.counter);
      }else{
        $scope.counter=6;
        console.log('length : '+ $scope.wheels.length +' counter : ' +$scope.counter);

      }


    };
    $scope.previousPics=function(){
      if($scope.counter > 0){
        $scope.picName1=$scope.wheels[$scope.counter-7].name;
        $scope.picName2=$scope.wheels[$scope.counter-6].name;
        $scope.picName3=$scope.wheels[$scope.counter-5].name;
        $scope.picName4=$scope.wheels[$scope.counter-4].name;
        $scope.picName5=$scope.wheels[$scope.counter-3].name;
        $scope.picName6=$scope.wheels[$scope.counter-2].name;
        $scope.counter-=6;

      }else {
        $scope.counter= $scope.wheels.length;
      }


    };
    function restRim() {
      $scope.demoRim='http://v2d.configurators.ru/photo/wheels/rear/57motorsport-g07cr-bright-silver-paint.png';
      $("#config_wheelrear").animateRotate(-90, 1379, 'linear', function () {});
      $("#config_wheelfront").animateRotate(-90, 1379, 'linear', function () {});
    }
    $scope.restoreRim=restRim;

    $scope.updateRim=function (pno) {
      console.log("Update Rim: "+pno);
      $scope.modelWheel=pno;
      var yourURL = "http://localhost/interprise/images/images/"+pno+"/get.php";
      /*$.get(
        yourURL,
        function(data, textStatus, jqXHR) {
          $scope.modelWheelData=jQuery.parseJSON( data );
          console.log("Succsess : Opening Modal with data : "+$scope.modelWheelData[0].name);
          $('#myModal').modal();
        }
      ).fail(function () {
        restRim();
      });*/
      $http({
        method: 'GET',
        url: yourURL
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log("Angular http success : "+response.data);
        $scope.modelWheelData=response.data;
        $('#myModal').modal();
      }, function errorCallback(response) {
        console.log("Angular http failed : "+response.data);
        restRim();
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      //Old Code to display pics as is shown on configurator
      // $scope.demoRim='http://www.realmags.com/rest/api/wheel/'+pno+'/pic?type=thumb';
      //   $("#config_wheelrear").animateRotate(-90, 1379, 'linear', function () {});
      //   $("#config_wheelfront").animateRotate(-90, 1379, 'linear', function () {});
    };
    $scope.modalWheelUpdate=function (wheel,version) {
      $scope.demoRim="http://localhost/interprise/images/images/"+wheel+"/"+version;
      console.log("calling demo wheel with "+wheel+" and version : "+version);
      $('#myModal').modal('hide');
      $("#config_wheelrear").animateRotate(-90, 1379, 'linear', function () {});
      $("#config_wheelfront").animateRotate(-90, 1379, 'linear', function () {});
    };




//Jquery START
    $('#grow').click(function() {
      var left = $('#config_wheelF');
      left.show("fast");
      $('#config_wheelF').animate({ "width": "+=" + left.width() * .02,"height": "+=" + left.height() * .02}, "fast");


      var right = $('#config_wheelR');
      right.show("fast");
      $('#config_wheelR').animate({ "width": "+=" + right.width() * .02, "height": "+=" + left.height() * .02}, "fast");


    });
    $('#shrink').click(function() {
      var left = $('#config_wheelF');
      left.show("fast");
      $('#config_wheelF').animate({ "width": "-=" + left.width() * .02,"height": "-=" + left.height() * .02}, "fast");


      var right = $('#config_wheelR');
      right.show("fast");
      $('#config_wheelR').animate({ "width": "-=" + right.width() * .02 ,"height": "-=" + left.height() * .02}, "fast");
    });

    $('#size_default').click(function() {
      $('#config_wheelF').width(92);
      $('#config_wheelF').height(92);




      $('#config_wheelR').width(92);
      $('#config_wheelR').height(92);
    });
//Jquery END

// Testing area
    $scope.testNS=function () {
      alert(NetworkService.testService($rootScope.testVar));
    };


    $.fn.animateRotate = function(angle, duration, easing, complete) {
      var args = $.speed(duration, easing, complete);
      var step = args.step;
      return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
          $.style(e, 'transform', 'rotate(' + now + 'deg)');
          if (step) return step.apply(e, arguments);
        };

        $({deg: 0}).animate({deg: angle}, args);
      });
    };
    $(document).ready(function(){
      //
      // $("button").click(function(){
      //   $("#config_wheelrear").animateRotate(-90, 1379, 'linear', function () {});
      //   $("#config_wheelfront").animateRotate(-90, 1379, 'linear', function () {});
      // });

    });


  $scope.fntest=function () {
    alert("fntest");
  };
    $scope.fnlink=function (parm) {
      $(parm).animateRotate(-180, 1379, 'linear', function () {});
      return false;
    };

  }]);
