'use strict';

angular.module('ngAnimateExperimentApp')
    .controller('MainCtrl', function ($scope, $timeout) {
        $scope.awesomeThingsOne = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];

        $scope.awesomeThingsTwo = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];

        $timeout(function () {
            $scope.awesomeThingsTwo = [];
          }, 3000);
      });
