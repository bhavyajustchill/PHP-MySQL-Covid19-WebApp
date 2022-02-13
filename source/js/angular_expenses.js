var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookies, $cookieStore, $http) 
{
	
	



/****************************************************************************/
/************************** Update Inovice ********************************/
/****************************************************************************/
	$scope.myVarexpenses = true;
	
	$scope.expenses_update = function(customer_id,fname,lname,email) 
	{
		$scope.myVarexpenses = false;
		$scope.customer_id = customer_id;
		$scope.fname = fname;
		$scope.lname = lname;
		$scope.email = email;
	}	
	
/****************************************************************************/
/************************** View All Invoice ********************************/
/****************************************************************************/
	
	$scope.sales_results = function()
	{
		$scope.sales_from_date = document.getElementById('sales_from_date').value;
		$scope.sales_to_date = document.getElementById('sales_to_date').value;
		
		$http.post('get_report.php',{'from': $scope.sales_from_date, 'to':$scope.sales_to_date})
		.success(function(data, status, headers, config)
		{
			if(data.success == 1)
			{
		//		$scope.mySalesVar = false;
				$scope.report_details = data.sales;			
			}
			if(data.success == 0)
			{
				alert("No Child Found!!!");
			}
			if(data.success == 2)
			{
				alert("Pls fill all fields");
			}
		});
	}
/****************************************************************************/
/************************** View All Invoice ********************************/
/****************************************************************************/
	
	$scope.vaccince_results = function()
	{
		$scope.sales_from_date = document.getElementById('sales_from_date').value;
		$scope.sales_to_date = document.getElementById('sales_to_date').value;
		
		$http.post('get_report_vaccine.php',{'from': $scope.sales_from_date, 'to':$scope.sales_to_date})
		.success(function(data, status, headers, config)
		{
			if(data.success == 1)
			{
		//		$scope.mySalesVar = false;
				$scope.report_all_details = data.sales;			
			}
			if(data.success == 0)
			{
				alert("No Sales Found!!!");
			}
			if(data.success == 2)
			{
				alert("Pls fill all fields");
			}
		});
	}
/****************************************************************************/
/************************** Run Invoice *************************************/
/****************************************************************************/

	$scope.sales_results();
	$scope.vaccince_results();
	
/****************************************************************************/
/************************** Delete Sales   *********************************/
/****************************************************************************/
	// products_delete
	$scope.expenses_delete = function(customer_id) 
	{		
        $http.post('expenses_delete.php', 
		{
		'customer_id': customer_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Expenses Deleted Successful");
				window.location = "expenses.html";	
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Deleting Product!!");
			}
			else
			{
				alert("No id found");
			}
        });
    }
	
	
	
	
	
/****************************************************************************/
/************************** View Customer Details ***************************/
/****************************************************************************/
	// All Details
	$http.post('users_get.php',{'name': $scope.user_name, 'mobile':$scope.user_mobile, 'location':$scope.user_location})
	.success(function(data, status, headers, config)
	{
		if(data.success == 1)
		{
			$scope.user_details = data.user_details;			
		}
		if(data.success == 0)
		{
			$scope.er_details = "No More Details";
		}
	});

/****************************************************************************/
/************************** Admin Details ***********************************/
/****************************************************************************/	
	$scope.bn_adm_email = $cookieStore.get("bn_adm_email");

	$http.post('admin_details.php', {'email': $scope.bn_adm_email})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			$scope.adm_details = data.details;
		}
		else
		{
			$scope.er_admdtls = "No Data Found !!!";
		}
    });
	
/****************************************************************************/
/************************** Admin Logout ************************************/
/****************************************************************************/		
	$scope.admin_logout = function() 
	{
		if(confirm("Are You Sure?"))
		{
			$cookies.bn_adm_email = "";
			window.location = "index.html";
			return;
		}
		else
		{
			return false;
		}
	}
	
	$scope.exportData = function () {
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Report.xls");
		};
	


	
	
});