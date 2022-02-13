var app = angular.module("myAttd", ['ngCookies']);
app.controller("myAttdCtrl", function($scope, $cookieStore, $http) 
{
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ admin panel $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

	
/*********************** student attendance *******************************/	

		$scope.attd_date = document.getElementById("datepicker").value;
		alert($scope.attd_date);

});