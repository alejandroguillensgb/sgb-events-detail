'use strict';

angular.module('sgb-events-detail', ['megazord'])
    .controller('sgb-events-detail-controller', ['$scope', '_router', '_screen', '_screenParams','_data', 'appConstants',
    	function ($scope, _router, _screen, _screenParams, _data, appConstants) {
        _screen.initialize($scope, _screenParams);
        $scope.fullImagePath = appConstants.fullImagePath;
        $scope.data = _data; 
        console.log($scope.data); 

        $scope.openURL = function(url){
            window.open(url, '_system', 'location=yes'); 
            return false; 
        };

        $scope.toTime = function(timeString){
            var timeTokens = timeString.split(':');
            return new Date(1970,0,1, timeTokens[0], timeTokens[1]);
        }


        //Add your controller logic here.
    }]);