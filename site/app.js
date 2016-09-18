(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.checkLunchMenu = function(lunchItems){
		if(lunchItems == undefined || lunchItems == "")
			$scope.result = "Please enter data first"
		else
			$scope.result = lunchItems.split(",").length > 3 ? "Too much!" : "Enjoy!"
	}
}

})();