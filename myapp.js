angular.module('myapp', ['ui.bootstrap']);
function Timer($scope,$timeout) {
    var servers = ['Kyrios','Enla','Inoch','Salphira'];
    $scope.serverName = servers[Math.floor((Math.random()*4))];
    $scope.counter = Math.floor((Math.random()*4000)+2000);     
    $scope.tlFormat = "calculating...";

    $scope.onTimeout = function(){
	var num = Math.floor((Math.random()*10)+1);
	$scope.counter-=num;

	if( $scope.counter*10/60 > 60 ) {
		$scope.tlFormat = "> 1 h";
	} else if ($scope.counter*10/60 == 60) {
		$scope.tlFormat = "1 h"
	} else if ($scope.counter>0){
		$scope.tlFormat = $scope.counter*10/60  + " min";
	} else {
		$scope.tlFormat = 0; 
		$scope.counter = 0;
	}
		
        mytimeout = $timeout($scope.onTimeout,10000);
    }
    var mytimeout = $timeout($scope.onTimeout,10000);

    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }

	$scope.reloadRoute = function() {
		
	}
}

