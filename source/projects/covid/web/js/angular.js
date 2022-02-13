var app = angular.module("myapp", ['ngCookies']);
app.controller("myappCtrl", function($scope, $cookies, $cookieStore, $http) 
{
	
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
			window.location = "home.html";
			return;
		}
		else
		{
			return false;
		}
	}
	
/****************************************************************************/
/************************** Update Marketing ********************************/
/****************************************************************************/
	$scope.myVar = true;
	$scope.edit_marketing = function(product_id,emp_id,pname,pimage,description,price,offer,size,stock,specification,tax_amount,shipping_days) 
	{
		$scope.myVar = true;
		window.location = "home.html";
	}	

	
/****************************************************************************/
/************************** View All enquiry Report *************************/
/****************************************************************************/
	// All Products
	
	$http.get('total_get.php')
	.success(function (response) 
	{
		if(response.success == 1)
		{
			$scope.enquiry = response.enquiry;
		}		
	});
	
/****************************************************************************/
/************************** Total Estimate Report **************************/
/****************************************************************************/
	$http.get('project_get.php')
	.success(function (response) 
	{
		if(response.success == 1)
		{
			$scope.project = response.project;	
			
		}		
	});
	
/****************************************************************************/
/************************** View all Sales **********************************/
/****************************************************************************/

	$http.get('sales_get.php')
	.success(function (response) 
	{
		if(response.success == 1)
		{
			$scope.details = response.details;
		}		
	});
	
/****************************************************************************/
/************************** View all Task **********************************/
/****************************************************************************/

	$http.get('task_get.php')
	.success(function (response) 
	{
		if(response.success == 1)
		{
			$scope.task = response.details;
		}		
	});
	
	
/****************************************************************************/
/************************** Confirm Enquiry *********************************/
/****************************************************************************/
	// products_delete
	$scope.confirm_sales = function(customer_id) 
	{		
        $http.post('confirm_sales.php', 
		{
		'customer_id': customer_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Enquiry Moved Successful");
				window.location = "sales.html";
				return;
			}
			else if(data.success == 0)
			{
				alert("Error While Confirming Enquiry !!");
			}
			else
			{
				alert("No id found");
			}
        });
    }
	
/****************************************************************************/
/************************** View All Products *******************************/
/****************************************************************************/
	// All Products
	$scope.status = $cookieStore.get("status");	
	
	$http.post('products_get.php',{'status':$scope.status})
		.success(function (data, status, headers, config) 
		{
			if(data.success == 1)
			{
				$scope.products = data.products;
			}
			else
			{
				$scope.er_list = "No Products Found";
			}
		});
	
/****************************************************************************/
/************************** Add Products *********************************/
/****************************************************************************/
	$scope.product_add = function() 
	{
	$http.post('products_add.php', {
	'empid': $scope.empid, 'pname': $scope.pname,  'pimage': $scope.pimage,  
	'description': $scope.description,'price': $scope.price, 
	 'size': $scope.size,'stock': $scope.stock, 'specification': $scope.specification,
	 'tax_amount': $scope.tax_amount})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Added successfully");
			window.location = "marketing.html"; //create_associate
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Please Fill All Fields");
				}
			
    });
	}
	
/****************************************************************************/
/************************** Delete Products *********************************/
/****************************************************************************/
	// products_delete
	$scope.product_delete = function(product_id) 
	{		
        $http.post('products_delete.php', 
		{
		'product_id': product_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Deleted Successful");
				window.location = "marketing.html";
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
	
/*****************************************************************************/
/************************** Update Products *********************************/
/****************************************************************************/
	$scope.product_edit_cookie = function(product_id,emp_id,pname,pimage,description,price,offer,size,
							stock,specification,tax_amount,shipping_days) 
	{
		$cookieStore.put("product_id",product_id);
		$cookieStore.put("emp_id",emp_id);
		$cookieStore.put("pname",pname);
		$cookieStore.put("pimage",pimage);
		$cookieStore.put("description",description);
		$cookieStore.put("price",price);
		$cookieStore.put("offer",offer);
		$cookieStore.put("size",size);
		$cookieStore.put("stock",stock);
		$cookieStore.put("specification",specification);
    	$cookieStore.put("tax_amount",tax_amount);
		$cookieStore.put("shipping_days",shipping_days);
		window.location = "edit_marketing.html";
		return;
	}
	
	$scope.product_id = $cookieStore.get("product_id");
	$scope.emp_id = $cookieStore.get("emp_id");
	$scope.pname = $cookieStore.get("pname");
	$scope.pimage = $cookieStore.get("pimage");
	$scope.description = $cookieStore.get("description");
	$scope.price = $cookieStore.get("price");
	$scope.offer = $cookieStore.get("offer");
	$scope.size = $cookieStore.get("size");
	$scope.stock = $cookieStore.get("stock");
	$scope.specification = $cookieStore.get("specification");
	$scope.tax_amount = $cookieStore.get("tax_amount");
	$scope.shipping_days = $cookieStore.get("shipping_days");
		
$scope.product_update_data = function() 
	{
	$http.post('products_update.php', {
			'product_id': $scope.product_id,'emp_id': $scope.emp_id,'pname': $scope.pname, 
			'pimage': $scope.pimage,  'description': $scope.description,
			'price': $scope.price, 'size': $scope.size,
			'stock': $scope.stock, 'specification': $scope.specification, 
			'tax_amount': $scope.tax_amount})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");
			window.location = "marketing.html"; //create_associate			
			///***** Delete Cookies **************			
			$cookies.emp_id = "";
			$cookies.pname = "";
			$cookies.pimage = "";
			$cookies.description = "";
			$cookies.price = "";
			$cookies.offer = "";
			$cookies.size = "";
			$cookies.stock = "";
			$cookies.specification = "";
			$cookies.tax_amount = "";
			$cookies.shipping_days = "";
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");
				}
			
    });
	}

	
/****************************************************************************/
/************************** Validation **********************************/
/****************************************************************************/
	$scope.er_email = true;
	// mobile number verification
	$scope.register_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.pimage))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	// mobile number verification
	$scope.login_email = function()
	{
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if(filter.test($scope.log_email))
		{
			$scope.er_email = true;
			$scope.btn_sgnup = false;
			$scope.btn_sgnin = false;
		}
		else
		{
			$scope.er_email = false;
			$scope.btn_sgnup = true;
			$scope.btn_sgnin = true;
		}
	}
	
	$scope.er_mob = true;
	// mobile number verification
	$scope.mobile_no = function()
	{
		var filter = /^\d{10}$/;
		if(filter.test($scope.description))
		{
			$scope.er_mob = true;
			$scope.btn_sgnup = false;
		}
		else
		{
			$scope.er_mob = false;
			$scope.btn_sgnup = true;
		}
	}

/****************************************************************************/
/************************** Add Sales *********************************/
/****************************************************************************/

	$scope.sales_create = function() 
	{		
		$http.post('sales_create.php', 
		{'fname': $scope.fname, 'lname':$scope.lname, 'email':$scope.email,
		'password': $scope.password,'plotno': $scope.plotno,'sqfeet': $scope.sqfeet,
		'cname': $scope.cname,'cusid': $scope.cusid,
		'address': $scope.address,'mobile': $scope.mobile,'chequeno': $scope.chequeno,
		'bank': $scope.bank,'tot_amt': $scope.tot_amt,'adv_amt': $scope.adv_amt
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Created Successfully");
				window.location = "sales.html";
				return;				
			}/*
			else if(data.success == 0)
			{
				alert("Invalid Inputs");
			}*/
			else
			{
				alert("Created Successfully");
				window.location = "sales.html";
				return;				
			}
        });
    }

/*****************************************************************************/
/************************** Update Cookies Sales    **************************/
/****************************************************************************/
	$scope.sales_edit_cookie = function(customer_id,fname, lname, email, password, plotno, sqfeet, cname, cusid, address, mobile, chequeno, bank, tot_amt, adv_amt) 
	{
		$cookieStore.put("customer_id",customer_id);
		$cookieStore.put("fname",fname);
		$cookieStore.put("lname",lname);
		$cookieStore.put("email",email);
		$cookieStore.put("password",password);
		$cookieStore.put("plotno",plotno);
		$cookieStore.put("sqfeet",sqfeet);
		$cookieStore.put("cname",cname);
		$cookieStore.put("cusid",cusid);
		$cookieStore.put("address",address);
		$cookieStore.put("mobile",mobile);
    	$cookieStore.put("chequeno",chequeno);
		$cookieStore.put("bank",bank);
		$cookieStore.put("tot_amt",tot_amt);
		$cookieStore.put("adv_amt",adv_amt);
		window.location = "edit_sales.html";
		return;
	}
	
	$scope.customer_id = $cookieStore.get("customer_id");
	$scope.fname = $cookieStore.get("fname");
	$scope.lname = $cookieStore.get("lname");
	$scope.email = $cookieStore.get("email");
	$scope.password = $cookieStore.get("password");
	$scope.plotno = $cookieStore.get("plotno");
	$scope.sqfeet = $cookieStore.get("sqfeet");
	$scope.cname = $cookieStore.get("cname");
	$scope.cusid = $cookieStore.get("cusid");
	$scope.address = $cookieStore.get("address");
	$scope.mobile = $cookieStore.get("mobile");
	$scope.chequeno = $cookieStore.get("chequeno");
	$scope.bank = $cookieStore.get("bank");
	$scope.tot_amt = $cookieStore.get("tot_amt");
	$scope.adv_amt = $cookieStore.get("adv_amt");
	
/*****************************************************************************/
/************************** Update Sales    *********************************/
/****************************************************************************/
	$scope.sales_update = function() 
	{
	$http.post('sales_update.php', {
			'customer_id': $scope.customer_id,'fname': $scope.fname, 'lname':$scope.lname, 'email':$scope.email,
			'password': $scope.password,'plotno': $scope.plotno,'sqfeet': $scope.sqfeet,
			'cname': $scope.cname,'cusid': $scope.cusid,'address': $scope.address,
			'mobile': $scope.mobile,'chequeno': $scope.chequeno,
			'bank': $scope.bank,'tot_amt': $scope.tot_amt,'adv_amt': $scope.adv_amt
			})
	.success(function(data, status, headers, config) 
	{
		if(data.success == 1)
		{
			alert("Updated Successfully");					
			window.location = "sales.html"; //create_associate	
			///***** Delete Cookies **************	
			$cookies.fname = "";
			$cookies.lname = "";
			$cookies.email = "";
			$cookies.password = "";
			$cookies.plotno = "";
			$cookies.sqfeet = "";
			$cookies.cname = "";
			$cookies.cusid = "";
			$cookies.address = "";
			$cookies.mobile = "";
			$cookies.chequeno = "";
			$cookies.bank = "";
			$cookies.tot_amt = "";
			$cookies.adv_amt = "";			
			return;
		}
				else if(data.success == 2)
				{
					alert("Adding Unsuccessful");
				}
				else
				{
					alert("Fill All Fields");						
				}
								
    });
	}
/****************************************************************************/
/************************** Delete Sales   *********************************/
/****************************************************************************/
	// products_delete
	$scope.sales_delete = function(customer_id) 
	{		
        $http.post('sales_delete.php', 
		{
		'customer_id': customer_id
		})
		.success(function(data, status, headers, config) 
		{
			if(data.success == 1)
			{
				alert("Customer Sales Deleted Successful");
				window.location = "sales.html";	
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

	
});